import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

// Inicializa a conexão com o banco de dados
const sql = neon(process.env.DATABASE_URL!)

// Exporta a instância do drizzle para uso em toda a aplicação
export const db = drizzle(sql)

// Função de utilidade para executar consultas SQL diretamente
export async function query(sql: string, params: any[] = []) {
  try {
    return await db.execute(sql, params)
  } catch (error) {
    console.error("Database query error:", error)
    throw error
  }
}

