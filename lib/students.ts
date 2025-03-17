import { query } from "@/lib/db"

export async function getStudentProfileByUserId(userId: number) {
  const result = await query("SELECT * FROM student_profiles WHERE user_id = $1", [userId])
  return result.rows[0] || null
}

export async function getStudentWithDetails(studentId: number) {
  // Buscar perfil do estudante
  const profile = await query("SELECT * FROM student_profiles WHERE id = $1", [studentId])

  if (!profile.rows[0]) return null

  // Buscar usuário relacionado
  const user = await query("SELECT * FROM users WHERE id = $1", [profile.rows[0].user_id])

  // Buscar habilidades
  const skills = await query("SELECT skill FROM student_skills WHERE student_id = $1", [studentId])

  // Buscar idiomas
  const languages = await query("SELECT * FROM student_languages WHERE student_id = $1", [studentId])

  // Buscar educação
  const education = await query("SELECT * FROM student_education WHERE student_id = $1 ORDER BY period DESC", [
    studentId,
  ])

  // Buscar experiências
  const experiences = await query("SELECT * FROM student_experiences WHERE student_id = $1 ORDER BY period DESC", [
    studentId,
  ])

  // Buscar projetos com tecnologias
  const projects = await query("SELECT * FROM student_projects WHERE student_id = $1", [studentId])

  const projectsWithTechnologies = await Promise.all(
    projects.rows.map(async (project) => {
      const technologies = await query("SELECT technology FROM project_technologies WHERE project_id = $1", [
        project.id,
      ])
      return {
        ...project,
        technologies: technologies.rows.map((t) => t.technology),
      }
    }),
  )

  // Buscar certificações
  const certifications = await query("SELECT * FROM student_certifications WHERE student_id = $1", [studentId])

  return {
    ...user.rows[0],
    profile: profile.rows[0],
    skills: skills.rows.map((s) => s.skill),
    languages: languages.rows,
    education: education.rows,
    experiences: experiences.rows,
    projects: projectsWithTechnologies,
    certifications: certifications.rows,
  }
}

export async function getStudentApplications(studentId: number) {
  const result = await query(
    `
    SELECT a.*, j.title as job_title, j.type as job_type, u.name as university_name, u.logo_url
    FROM applications a
    JOIN jobs j ON a.job_id = j.id
    JOIN universities u ON j.university_id = u.id
    WHERE a.student_id = $1
    ORDER BY a.applied_at DESC
  `,
    [studentId],
  )

  return result.rows
}

