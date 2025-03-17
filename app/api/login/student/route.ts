import { NextResponse } from "next/server";
import { users} from "@/data/dt";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Verifica se o usuário existe
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
  }

  return NextResponse.json({ message: "Login bem-sucedido!", user });
}

