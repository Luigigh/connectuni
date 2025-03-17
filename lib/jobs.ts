import { query } from "@/lib/db"

export async function getJobs(
  filters: {
    search?: string
    area?: string
    location?: string
    type?: string
  } = {},
) {
  let sql = `
    SELECT j.*, u.name as company, u.logo_url, u.location,
           d.name as area
    FROM jobs j
    JOIN universities u ON j.university_id = u.id
    LEFT JOIN departments d ON j.department_id = d.id
    WHERE j.status = 'active'
  `

  const params: any[] = []
  let paramIndex = 1

  if (filters.search) {
    sql += ` AND (j.title ILIKE $${paramIndex} OR u.name ILIKE $${paramIndex} OR d.name ILIKE $${paramIndex})`
    params.push(`%${filters.search}%`)
    paramIndex++
  }

  if (filters.area) {
    sql += ` AND d.name = $${paramIndex}`
    params.push(filters.area)
    paramIndex++
  }

  if (filters.location) {
    sql += ` AND u.location ILIKE $${paramIndex}`
    params.push(`%${filters.location}%`)
    paramIndex++
  }

  if (filters.type) {
    sql += ` AND j.type = $${paramIndex}`
    params.push(filters.type)
    paramIndex++
  }

  sql += " ORDER BY j.created_at DESC"

  const result = await query(sql, params)

  // Buscar habilidades para cada vaga
  const jobsWithSkills = await Promise.all(
    result.rows.map(async (job) => {
      const skills = await query("SELECT skill FROM job_skills WHERE job_id = $1", [job.id])
      return {
        ...job,
        badges: skills.rows.map((s) => s.skill),
      }
    }),
  )

  return jobsWithSkills
}

export async function getJobById(id: number) {
  const result = await query(
    `
    SELECT j.*, u.name as company, u.logo_url, u.location, u.about as company_about,
           d.name as area
    FROM jobs j
    JOIN universities u ON j.university_id = u.id
    LEFT JOIN departments d ON j.department_id = d.id
    WHERE j.id = $1
  `,
    [id],
  )

  if (!result.rows[0]) return null

  // Buscar habilidades
  const skills = await query("SELECT skill FROM job_skills WHERE job_id = $1", [id])

  // Buscar vagas relacionadas
  const relatedJobs = await query(
    `
    SELECT j.id, j.title, u.name as company, j.location, j.type, u.logo_url
    FROM jobs j
    JOIN universities u ON j.university_id = u.id
    WHERE j.department_id = $1 AND j.id != $2 AND j.status = 'active'
    LIMIT 3
  `,
    [result.rows[0].department_id, id],
  )

  return {
    ...result.rows[0],
    badges: skills.rows.map((s) => s.skill),
    relatedJobs: relatedJobs.rows,
  }
}

export async function createJob(jobData: {
  university_id: number
  department_id: number
  title: string
  description: string
  responsibilities: string
  requirements: string
  benefits?: string
  location: string
  type: string
  modality: string
  salary?: string
  deadline: Date
  skills: string[]
}) {
  const { skills, ...data } = jobData

  // Inserir vaga
  const result = await query(
    `
    INSERT INTO jobs (
      university_id, department_id, title, description, responsibilities, 
      requirements, benefits, location, type, modality, salary, deadline
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
    RETURNING *
  `,
    [
      data.university_id,
      data.department_id,
      data.title,
      data.description,
      data.responsibilities,
      data.requirements,
      data.benefits,
      data.location,
      data.type,
      data.modality,
      data.salary,
      data.deadline,
    ],
  )

  const jobId = result.rows[0].id

  // Inserir habilidades
  if (skills && skills.length > 0) {
    for (const skill of skills) {
      await query("INSERT INTO job_skills (job_id, skill) VALUES ($1, $2)", [jobId, skill])
    }
  }

  return result.rows[0]
}

