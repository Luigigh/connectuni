import { query } from "@/lib/db"

export async function getUniversityById(id: number) {
  const result = await query("SELECT * FROM universities WHERE id = $1", [id])
  return result.rows[0] || null
}

export async function getUniversityWithDetails(universityId: number) {
  // Buscar universidade
  const university = await query("SELECT * FROM universities WHERE id = $1", [universityId])

  if (!university.rows[0]) return null

  // Buscar departamentos
  const departments = await query("SELECT * FROM departments WHERE university_id = $1", [universityId])

  // Buscar cursos
  const courses = await query(
    `
    SELECT c.*, d.name as department_name 
    FROM courses c
    JOIN departments d ON c.department_id = d.id
    WHERE c.university_id = $1
  `,
    [universityId],
  )

  // Buscar estatísticas
  const stats = await query("SELECT * FROM university_stats WHERE university_id = $1", [universityId])

  // Buscar conquistas
  const achievements = await query("SELECT achievement FROM university_achievements WHERE university_id = $1", [
    universityId,
  ])

  // Buscar redes sociais
  const socialMedia = await query("SELECT platform, url FROM university_social_media WHERE university_id = $1", [
    universityId,
  ])

  // Transformar redes sociais em um objeto
  const socialMediaObj: Record<string, string> = {}
  socialMedia.rows.forEach((sm) => {
    socialMediaObj[sm.platform] = sm.url
  })

  return {
    ...university.rows[0],
    departments: departments.rows,
    courses: courses.rows,
    stats: stats.rows[0] || {},
    achievements: achievements.rows.map((a) => a.achievement),
    socialMedia: socialMediaObj,
  }
}

export async function getUniversityJobs(universityId: number) {
  const result = await query(
    `
    SELECT j.*, d.name as department_name, 
           (SELECT COUNT(*) FROM applications WHERE job_id = j.id) as applicants
    FROM jobs j
    LEFT JOIN departments d ON j.department_id = d.id
    WHERE j.university_id = $1
    ORDER BY j.created_at DESC
  `,
    [universityId],
  )

  return result.rows
}

