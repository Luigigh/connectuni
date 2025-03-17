import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { GraduationCap, Building2, Shield } from "lucide-react"
// Adicionar o botão de tema à página de login da universidade
import { ThemeToggle } from "@/components/theme-toggle"

export default function UniversityLoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">UniConnect</span>
          </Link>

          {/* Adicionar o ThemeToggle ao header */}
          {/* Localizar a div que contém os botões de navegação */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login/student">Sou Universitário</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container flex items-center justify-center py-10">
        <div className="flex flex-col lg:flex-row w-full max-w-5xl gap-8 items-center">
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Portal da Universidade</h1>
              <p className="text-muted-foreground md:text-xl">
                Acesse sua conta institucional para gerenciar vagas e conectar-se com os melhores talentos.
              </p>
            </div>

            <div className="hidden lg:block">
              <Image
                src="/placeholder.svg?height=350&width=450"
                width={450}
                height={350}
                alt="Campus universitário"
                className="rounded-lg object-cover mx-auto lg:mx-0"
              />
            </div>
          </div>

          <div className="w-full max-w-md">
            <Card className="border-2">
              <CardHeader className="space-y-1">
                <div className="flex justify-center mb-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-center">Login Institucional</CardTitle>
                <CardDescription className="text-center">
                  Acesso exclusivo para universidades e instituições de ensino
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Institucional</Label>
                  <Input id="email" type="email" placeholder="admin@universidade.edu.br" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Senha</Label>
                    <Link href="/reset-password" className="text-xs text-primary hover:underline">
                      Esqueceu a senha?
                    </Link>
                  </div>
                  <Input id="password" type="password" />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Lembrar de mim
                  </label>
                </div>

                <Button className="w-full" size="lg">
                  Entrar
                </Button>

                <div className="flex items-center justify-center gap-2 p-2 rounded-md bg-muted">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">Acesso seguro com verificação em duas etapas</p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                <div className="text-center text-sm">
                  Sua instituição ainda não está cadastrada?{" "}
                  <Link href="/register/university" className="text-primary hover:underline">
                    Solicitar acesso
                  </Link>
                </div>
                <div className="text-center text-xs text-muted-foreground">
                  Ao fazer login, você concorda com nossos{" "}
                  <Link href="/terms" className="hover:underline">
                    Termos de Serviço
                  </Link>{" "}
                  e{" "}
                  <Link href="/privacy" className="hover:underline">
                    Política de Privacidade
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <span className="text-sm font-bold">UniConnect</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Termos de Uso
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Contato
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

