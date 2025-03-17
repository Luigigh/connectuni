import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, BookmarkPlus, Building2, Calendar, Clock, GraduationCap, MapPin, Share2 } from "lucide-react"

// Adicionar o botão de tema à página de detalhes da vaga
import { ThemeToggle } from "@/components/theme-toggle"

// Mock job data
const job = {
  id: 1,
  title: "Estágio em Desenvolvimento Web",
  company: "Universidade Federal",
  location: "São Paulo, SP",
  type: "Estágio",
  area: "Tecnologia",
  posted: "15/03/2023",
  deadline: "15/04/2023",
  duration: "6 meses",
  salary: "R$ 1.200,00",
  logo: "/placeholder.svg?height=80&width=80",
  description:
    "Estamos em busca de um estagiário talentoso para se juntar à nossa equipe de desenvolvimento web. O candidato ideal terá conhecimentos em HTML, CSS, JavaScript e frameworks modernos como React.",
  responsibilities: [
    "Desenvolver e manter aplicações web",
    "Colaborar com a equipe de design para implementar interfaces de usuário",
    "Participar de code reviews e reuniões de planejamento",
    "Testar e depurar aplicações",
    "Documentar o código desenvolvido",
  ],
  requirements: [
    "Cursando Ciência da Computação, Engenharia de Software ou áreas relacionadas",
    "Conhecimento em HTML, CSS e JavaScript",
    "Familiaridade com React ou outros frameworks modernos",
    "Conhecimento básico de Git",
    "Boa comunicação e trabalho em equipe",
  ],
  benefits: [
    "Bolsa auxílio compatível com o mercado",
    "Vale refeição",
    "Vale transporte",
    "Horário flexível",
    "Possibilidade de efetivação",
  ],
  badges: ["React", "JavaScript", "HTML/CSS", "Git"],
}

// Mock related jobs
const relatedJobs = [
  {
    id: 2,
    title: "Estágio em UX/UI Design",
    company: "Universidade Estadual",
    location: "São Paulo, SP",
    type: "Estágio",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    title: "Desenvolvedor Front-end Jr",
    company: "Instituto de Tecnologia",
    location: "São Paulo, SP",
    type: "CLT",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    title: "Estágio em Desenvolvimento Mobile",
    company: "Universidade Particular",
    location: "Campinas, SP",
    type: "Estágio",
    logo: "/placeholder.svg?height=40&width=40",
  },
]

export default function JobPage() {
  return (
    <div className="min-h-screen bg-muted/40">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
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
          {/* Localizar a div que contém os botões de navegação */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" asChild>
              <Link href="/dashboard/student">Meu Painel</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/dashboard/student">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o painel
            </Link>
          </Button>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Image
                src={job.logo || "/placeholder.svg"}
                width={80}
                height={80}
                alt={job.company}
                className="rounded-lg"
              />
              <div>
                <h1 className="text-2xl font-bold">{job.title}</h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building2 className="h-4 w-4" />
                  <span>{job.company}</span>
                  <span>•</span>
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                <BookmarkPlus className="mr-2 h-4 w-4" />
                Salvar
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Compartilhar
              </Button>
              <Button size="sm">Candidatar-se</Button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="secondary">{job.type}</Badge>
            <Badge variant="secondary">{job.area}</Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              Prazo: {job.deadline}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Duração: {job.duration}
            </Badge>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Descrição da Vaga</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{job.description}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Responsabilidades</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {job.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Requisitos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {job.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Benefícios</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {job.benefits.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Habilidades Desejadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {job.badges.map((badge, index) => (
                    <Badge key={index} variant="secondary">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Detalhes da Vaga</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tipo:</span>
                    <span className="font-medium">{job.type}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Área:</span>
                    <span className="font-medium">{job.area}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duração:</span>
                    <span className="font-medium">{job.duration}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bolsa:</span>
                    <span className="font-medium">{job.salary}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Data Limite:</span>
                    <span className="font-medium">{job.deadline}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Candidatar-se</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sobre a Universidade</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={job.logo || "/placeholder.svg"}
                    width={60}
                    height={60}
                    alt={job.company}
                    className="rounded-lg"
                  />
                  <div>
                    <h3 className="font-bold">{job.company}</h3>
                    <p className="text-sm text-muted-foreground">{job.location}</p>
                  </div>
                </div>
                <p className="text-sm">
                  A Universidade Federal é uma instituição de ensino superior reconhecida pela excelência em pesquisa e
                  desenvolvimento tecnológico.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="#">Ver Perfil da Universidade</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Vagas Relacionadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {relatedJobs.map((relatedJob) => (
                    <div key={relatedJob.id} className="flex items-center gap-3">
                      <Image
                        src={relatedJob.logo || "/placeholder.svg"}
                        width={40}
                        height={40}
                        alt={relatedJob.company}
                        className="rounded-md"
                      />
                      <div>
                        <h3 className="font-medium text-sm">{relatedJob.title}</h3>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <span>{relatedJob.company}</span>
                          <span>•</span>
                          <span>{relatedJob.type}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="/dashboard/student">Ver Mais Vagas</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      <footer className="w-full border-t py-6 mt-12">
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
        </div>
      </footer>
    </div>
  )
}

