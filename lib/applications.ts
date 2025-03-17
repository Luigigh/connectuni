import { query } from "@/lib/db"

export async function applyForJob(studentId: number, jobId: number) {
  // Verificar se já existe uma candidatura
  const existing = await query("SELECT * FROM applications WHERE student_id = $1 AND job_id = $2", [studentId, jobId])

  if (existing.rows.length > 0) {
    throw new Error("Você já se candidatou para esta vaga")
  }

  // Criar nova candidatura
  const result = await query(
    "INSERT INTO applications (student_id, job_id, status, progress) VALUES ($1, $2, $3, $4) RETURNING *",
    [studentId, jobId, "Em análise", 50],
  )

  return result.rows[0]
}

export async function getApplicationById(id: number) {
  const result = await query(
    `
    SELECT a.*, j.title as job_title, j.description as job_description,
           j.type as job_type, u.name as university_name, u.logo_url
    FROM applications a
    JOIN jobs j ON a.job_id = j.id
    JOIN universities u ON j.university_id = u.id
    WHERE a.id = $1
  `,
    [id],
  )

  return result.rows[0] || null
}

export async function updateApplicationStatus(id: number, status: string, progress: number) {
  const result = await query(
    "UPDATE applications SET status = $1, progress = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *",
    [status, progress, id],
  )

  return result.rows[0]
}

