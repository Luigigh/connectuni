

import { universities } from "@/data/dt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { email, password } = await req.json();

  // Verifica se o usuário existe
  const university = universities.find((u) => u.email === email && u.password === password);

  if (!university) {
    return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
  }

  return NextResponse.json({ message: "Login bem-sucedido!", university });
    
}
