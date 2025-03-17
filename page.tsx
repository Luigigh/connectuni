import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  Facebook,
  GraduationCap,
  Instagram,
  Linkedin,
  Twitter,
  Users,
} from "lucide-react"

// Adicionar o botão de tema ao cabeçalho da página inicial
import { ThemeToggle } from "@/components/theme-toggle"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full flex h-16 items-center justify-between p-4">
          <div className="flex items-center gap-2 ">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">UniConnect</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Como Funciona
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Para Universitários
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Para Universidades
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Sobre Nós
            </Link>
          </nav>

          {/* Adicionar o ThemeToggle ao header */}
          {/* Localizar a div que contém os botões de login */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" asChild>
              <Link href="/login/student">
                <Users className="mr-2 h-4 w-4" />
                Universitários
              </Link>
            </Button>
            <Button asChild>
              <Link href="/login/university">
                <Building2 className="mr-2 h-4 w-4" />
                Universidades
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="w-full px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-2 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Conectando talentos universitários às melhores oportunidades
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  A plataforma que aproxima estudantes universitários das melhores universidades e oportunidades
                  profissionais do mercado.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/register/student">
                      Sou Universitário
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/register/university">
                      Sou Universidade
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center shadow-lg">
                <Image
                  src="/landingpage.png"
                  width={700}
                  height={700}
                  alt="Estudantes universitários"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold">5,000+</h2>
                <p className="text-xl">Vagas Disponíveis</p>
              </div>
              <div className="space-y-2">
                <h2 className="text-4xl font-bold">250+</h2>
                <p className="text-xl">Universidades Parceiras</p>
              </div>
              <div className="space-y-2">
                <h2 className="text-4xl font-bold">50,000+</h2>
                <p className="text-xl">Alunos Conectados</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Como Funciona</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Uma plataforma completa para conectar universitários e universidades de forma eficiente e
                  profissional.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/landingpage.png"
                width={500}
                height={400}
                alt="Plataforma em uso"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <GraduationCap className="h-4 w-4" />
                        </div>
                        <h3 className="text-xl font-bold">Para Universitários</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Crie seu perfil profissional, destaque suas habilidades e encontre as melhores oportunidades de
                        estágio e emprego.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <Building2 className="h-4 w-4" />
                        </div>
                        <h3 className="text-xl font-bold">Para Universidades</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Publique vagas, gerencie candidaturas e encontre os melhores talentos para sua instituição.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <BriefcaseBusiness className="h-4 w-4" />
                        </div>
                        <h3 className="text-xl font-bold">Oportunidades</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Estágios, empregos, bolsas de estudo e programas de intercâmbio em um só lugar.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Pronto para começar sua jornada?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Junte-se a milhares de universitários e universidades que já estão conectados na nossa plataforma.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/register/student">
                    Criar Conta Gratuita
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Saiba Mais</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">UniConnect</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Termos de Uso
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Contato
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

