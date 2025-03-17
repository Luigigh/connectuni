import { query } from "@/lib/db"

export async function getUserById(id: number) {
  const result = await query("SELECT * FROM users WHERE id = $1", [id])
  return result.rows[0] || null
}

export async function getUserByEmail(email: string) {
  const result = await query("SELECT * FROM users WHERE email = $1", [email])
  return result.rows[0] || null
}

export async function createUser(userData: {
  name: string
  email: string
  password_hash: string
  phone?: string
  location?: string
  about?: string
  role: "student" | "university_admin"
}) {
  const { name, email, password_hash, phone, location, about, role } = userData

  const result = await query(
    "INSERT INTO users (name, email, password_hash, phone, location, about, role) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    [name, email, password_hash, phone, location, about, role],
  )

  return result.rows[0]
}

export async function updateUser(
  id: number,
  userData: Partial<{
    name: string
    email: string
    phone: string
    location: string
    about: string
    avatar_url: string
    cover_photo_url: string
  }>,
) {
  const fields = Object.keys(userData)
  const values = Object.values(userData)

  if (fields.length === 0) return null

  const setClause = fields.map((field, i) => `${field} = $${i + 2}`).join(", ")

  const result = await query(
    `UPDATE users SET ${setClause}, updated_at = CURRENT_TIMESTAMP WHERE id = $1 RETURNING *`,
    [id, ...values],
  )

  return result.rows[0]
}

