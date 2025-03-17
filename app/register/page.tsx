"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { GraduationCap, Building2, ArrowRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

export default function RegisterPage() {
  const router = useRouter()
  const [userType, setUserType] = useState<"student" | "university" | null>(null)

  const handleContinue = () => {
    if (userType === "student") {
      router.push("/register/student")
    } else if (userType === "university") {
      router.push("/register/university")
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">UniConnect</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Já tem uma conta? Entrar</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container max-w-screen-md flex items-center justify-center py-10">
        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Crie sua conta</CardTitle>
            <CardDescription>Escolha como deseja se cadastrar na plataforma</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card
                className={`cursor-pointer border-2 transition-all ${
                  userType === "student" ? "border-primary" : "border-border hover:border-primary/50"
                }`}
                onClick={() => setUserType("student")}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Sou Universitário
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Crie seu perfil, candidate-se a vagas e conecte-se com universidades.
                  </p>
                </CardContent>
                <CardFooter className="border-t bg-muted/50 p-3">
                  <div className="flex items-center justify-between w-full text-sm">
                    <span>Perfil de Estudante</span>
                    {userType === "student" && <ArrowRight className="h-4 w-4 text-primary" />}
                  </div>
                </CardFooter>
              </Card>

              <Card
                className={`cursor-pointer border-2 transition-all ${
                  userType === "university" ? "border-primary" : "border-border hover:border-primary/50"
                }`}
                onClick={() => setUserType("university")}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    Sou Universidade
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Publique vagas, encontre talentos e gerencie candidaturas.
                  </p>
                </CardContent>
                <CardFooter className="border-t bg-muted/50 p-3">
                  <div className="flex items-center justify-between w-full text-sm">
                    <span>Perfil Institucional</span>
                    {userType === "university" && <ArrowRight className="h-4 w-4 text-primary" />}
                  </div>
                </CardFooter>
              </Card>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" asChild>
              <Link href="/">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Voltar
              </Link>
            </Button>
            <Button onClick={handleContinue} disabled={!userType}>
              Continuar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </main>

      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">UniConnect © 2023</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Termos de Uso
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Contato
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

