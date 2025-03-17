"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bell,
  BriefcaseBusiness,
  Building2,
  Calendar,
  ChevronDown,
  Clock,
  Filter,
  Home,
  MapPin,
  MessageSquare,
  Search,
  Settings,
  User,
  X,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// Adicionar o botão de tema ao dashboard do estudante
import { ThemeToggle } from "@/components/theme-toggle"

// Mock data for job opportunities
const jobOpportunitiesData = [
  {
    id: 1,
    title: "Estágio em Desenvolvimento Web",
    company: "Universidade Federal",
    location: "São Paulo, SP",
    type: "Estágio",
    area: "Tecnologia",
    posted: "Há 2 dias",
    logo: "/placeholder.svg?height=40&width=40",
    badges: ["React", "JavaScript", "HTML/CSS"],
  },
  {
    id: 2,
    title: "Assistente de Pesquisa",
    company: "Universidade Estadual",
    location: "Rio de Janeiro, RJ",
    type: "Meio Período",
    area: "Pesquisa",
    posted: "Há 3 dias",
    logo: "/placeholder.svg?height=40&width=40",
    badges: ["Pesquisa", "Análise de Dados", "Estatística"],
  },
  {
    id: 3,
    title: "Estágio em Marketing Digital",
    company: "Universidade Particular",
    location: "Belo Horizonte, MG",
    type: "Estágio",
    area: "Marketing",
    posted: "Há 1 semana",
    logo: "/placeholder.svg?height=40&width=40",
    badges: ["Social Media", "SEO", "Copywriting"],
  },
  {
    id: 4,
    title: "Bolsista de Iniciação Científica",
    company: "Instituto de Pesquisa",
    location: "Brasília, DF",
    type: "Bolsa",
    area: "Ciências",
    posted: "Há 5 dias",
    logo: "/placeholder.svg?height=40&width=40",
    badges: ["Laboratório", "Pesquisa", "Relatórios"],
  },
  {
    id: 5,
    title: "Estágio em Administração",
    company: "Universidade do Sul",
    location: "Porto Alegre, RS",
    type: "Estágio",
    area: "Administração",
    posted: "Há 2 semanas",
    logo: "/placeholder.svg?height=40&width=40",
    badges: ["Gestão", "Excel", "Organização"],
  },
  {
    id: 6,
    title: "Desenvolvedor Front-end Jr",
    company: "Universidade Tecnológica",
    location: "São Paulo, SP",
    type: "CLT",
    area: "Tecnologia",
    posted: "Há 1 dia",
    logo: "/placeholder.svg?height=40&width=40",
    badges: ["React", "TypeScript", "UI/UX"],
  },
  {
    id: 7,
    title: "Estágio em Recursos Humanos",
    company: "Universidade Estadual",
    location: "Rio de Janeiro, RJ",
    type: "Estágio",
    area: "Administração",
    posted: "Há 4 dias",
    logo: "/placeholder.svg?height=40&width=40",
    badges: ["Recrutamento", "Seleção", "Treinamento"],
  },
  {
    id: 8,
    title: "Analista de Dados Jr",
    company: "Instituto de Pesquisa",
    location: "São Paulo, SP",
    type: "CLT",
    area: "Tecnologia",
    posted: "Há 3 dias",
    logo: "/placeholder.svg?height=40&width=40",
    badges: ["Python", "SQL", "Power BI"],
  },
]

// Mock data for applications
const applications = [
  {
    id: 1,
    title: "Estágio em Desenvolvimento Web",
    company: "Universidade Federal",
    status: "Em análise",
    applied: "15/03/2023",
    logo: "/placeholder.svg?height=40&width=40",
    progress: 50,
  },
  {
    id: 2,
    title: "Assistente de Pesquisa",
    company: "Universidade Estadual",
    status: "Entrevista",
    applied: "10/03/2023",
    logo: "/placeholder.svg?height=40&width=40",
    progress: 75,
  },
  {
    id: 3,
    title: "Estágio em Marketing Digital",
    company: "Universidade Particular",
    status: "Recusado",
    applied: "01/03/2023",
    logo: "/placeholder.svg?height=40&width=40",
    progress: 100,
  },
]

export default function StudentDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [areaFilter, setAreaFilter] = useState("")
  const [locationFilter, setLocationFilter] = useState("")
  const [typeFilter, setTypeFilter] = useState("")
  const [filtersVisible, setFiltersVisible] = useState(false)
  const [jobOpportunities, setJobOpportunities] = useState(jobOpportunitiesData)
  const [filteredJobs, setFilteredJobs] = useState(jobOpportunitiesData)

  // Aplicar filtros quando qualquer filtro mudar
  useEffect(() => {
    let filtered = jobOpportunitiesData

    // Aplicar filtro de busca
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchLower) ||
          job.company.toLowerCase().includes(searchLower) ||
          job.area.toLowerCase().includes(searchLower) ||
          job.badges.some((badge) => badge.toLowerCase().includes(searchLower)),
      )
    }

    // Aplicar filtro de área
    if (areaFilter) {
      filtered = filtered.filter((job) => job.area === areaFilter)
    }

    // Aplicar filtro de localização
    if (locationFilter) {
      const locationMap = {
        sp: "São Paulo",
        rj: "Rio de Janeiro",
        mg: "Belo Horizonte",
        rs: "Porto Alegre",
        df: "Brasília",
      }

      filtered = filtered.filter((job) =>
        job.location.includes(locationMap[locationFilter as keyof typeof locationMap] || ""),
      )
    }

    // Aplicar filtro de tipo de vaga
    if (typeFilter) {
      const typeMap = {
        internship: "Estágio",
        parttime: "Meio Período",
        fulltime: "CLT",
        scholarship: "Bolsa",
      }

      filtered = filtered.filter((job) => job.type === typeMap[typeFilter as keyof typeof typeMap])
    }

    setFilteredJobs(filtered)
  }, [searchTerm, areaFilter, locationFilter, typeFilter])

  // Função para limpar todos os filtros
  const clearFilters = () => {
    setAreaFilter("")
    setLocationFilter("")
    setTypeFilter("")
  }

  // Aplicar filtros
  const applyFilters = () => {
    setFiltersVisible(false)
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-muted/40">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt="Avatar"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Ana Silva</span>
                <span className="text-xs text-muted-foreground">Ciência da Computação</span>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/student">
                    <Home className="h-4 w-4" />
                    <span>Início</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/student/profile">
                    <User className="h-4 w-4" />
                    <span>Meu Perfil</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/student/applications">
                    <BriefcaseBusiness className="h-4 w-4" />
                    <span>Candidaturas</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/student/messages">
                    <MessageSquare className="h-4 w-4" />
                    <span>Mensagens</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/student/universities">
                    <Building2 className="h-4 w-4" />
                    <span>Universidades</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/student/calendar">
                    <Calendar className="h-4 w-4" />
                    <span>Calendário</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/student/settings">
                    <Settings className="h-4 w-4" />
                    <span>Configurações</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger />
            <div className="flex flex-1 items-center gap-4 md:gap-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar vagas, universidades..."
                  className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              {/* Adicionar o ThemeToggle ao header */}
              {/* Localizar a div que contém os botões de notificação e perfil */}
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <Button variant="outline" size="icon" className="relative">
                  <Bell className="h-4 w-4" />
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                    3
                  </span>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <div className="relative h-8 w-8 overflow-hidden rounded-full">
                        <Image
                          src="/placeholder.svg?height=32&width=32"
                          width={32}
                          height={32}
                          alt="Avatar"
                          className="object-cover"
                        />
                      </div>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Perfil</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Configurações</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <span>Sair</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          <main className="flex-1 p-6 pt-4">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold tracking-tight">Olá, Ana!</h1>
                <p className="text-muted-foreground">
                  Veja as oportunidades disponíveis e acompanhe suas candidaturas.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Perfil Completo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold">75%</div>
                      <Progress value={75} className="w-2/3" />
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">Complete seu perfil para aumentar suas chances</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Candidaturas Ativas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="mt-2 text-xs text-muted-foreground">2 em análise, 1 em fase de entrevista</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Novas Oportunidades</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{filteredJobs.length}</div>
                    <p className="mt-2 text-xs text-muted-foreground">Baseadas no seu perfil e interesses</p>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="opportunities">
                <div className="flex items-center justify-between">
                  <TabsList>
                    <TabsTrigger value="opportunities">Oportunidades</TabsTrigger>
                    <TabsTrigger value="applications">Minhas Candidaturas</TabsTrigger>
                  </TabsList>
                  <div className="flex items-center gap-2">
                    {(areaFilter || locationFilter || typeFilter) && (
                      <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-1">
                        <X className="h-4 w-4" />
                        Limpar Filtros
                      </Button>
                    )}
                    <DropdownMenu open={filtersVisible} onOpenChange={setFiltersVisible}>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Filter className="mr-2 h-4 w-4" />
                          Filtros
                          {(areaFilter || locationFilter || typeFilter) && (
                            <Badge
                              variant="secondary"
                              className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center"
                            >
                              {[areaFilter, locationFilter, typeFilter].filter(Boolean).length}
                            </Badge>
                          )}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-[240px]">
                        <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <div className="grid gap-2 p-2">
                          <Select value={areaFilter} onValueChange={setAreaFilter}>
                            <SelectTrigger>
                              <SelectValue placeholder="Área de Interesse" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">Todas as áreas</SelectItem>
                              <SelectItem value="Tecnologia">Tecnologia</SelectItem>
                              <SelectItem value="Administração">Administração</SelectItem>
                              <SelectItem value="Marketing">Marketing</SelectItem>
                              <SelectItem value="Pesquisa">Pesquisa</SelectItem>
                              <SelectItem value="Ciências">Ciências</SelectItem>
                            </SelectContent>
                          </Select>
                          <Select value={locationFilter} onValueChange={setLocationFilter}>
                            <SelectTrigger>
                              <SelectValue placeholder="Localização" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">Todas as localizações</SelectItem>
                              <SelectItem value="sp">São Paulo</SelectItem>
                              <SelectItem value="rj">Rio de Janeiro</SelectItem>
                              <SelectItem value="mg">Minas Gerais</SelectItem>
                              <SelectItem value="rs">Rio Grande do Sul</SelectItem>
                              <SelectItem value="df">Brasília</SelectItem>
                            </SelectContent>
                          </Select>
                          <Select value={typeFilter} onValueChange={setTypeFilter}>
                            <SelectTrigger>
                              <SelectValue placeholder="Tipo de Vaga" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">Todos os tipos</SelectItem>
                              <SelectItem value="internship">Estágio</SelectItem>
                              <SelectItem value="parttime">Meio Período</SelectItem>
                              <SelectItem value="fulltime">Período Integral</SelectItem>
                              <SelectItem value="scholarship">Bolsa</SelectItem>
                            </SelectContent>
                          </Select>
                          <Button size="sm" onClick={applyFilters}>
                            Aplicar Filtros
                          </Button>
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                <TabsContent value="opportunities" className="mt-4">
                  {filteredJobs.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="rounded-full bg-muted p-3 mb-4">
                        <Search className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <h3 className="text-lg font-medium">Nenhuma vaga encontrada</h3>
                      <p className="text-muted-foreground mt-1 max-w-md">
                        Não encontramos vagas com os filtros selecionados. Tente ajustar seus critérios de busca.
                      </p>
                      <Button variant="outline" className="mt-4" onClick={clearFilters}>
                        Limpar Filtros
                      </Button>
                    </div>
                  ) : (
                    <div className="grid gap-4">
                      {filteredJobs.map((job) => (
                        <Card key={job.id} className="overflow-hidden transition-all hover:shadow-md">
                          <CardContent className="p-0">
                            <div className="flex flex-col sm:flex-row">
                              <div className="flex items-center gap-4 border-b sm:border-b-0 sm:border-r p-4 sm:w-64">
                                <Image
                                  src={job.logo || "/placeholder.svg"}
                                  width={40}
                                  height={40}
                                  alt={job.company}
                                  className="rounded-md"
                                />
                                <div>
                                  <h3 className="font-medium">{job.company}</h3>
                                  <div className="flex items-center text-xs text-muted-foreground">
                                    <MapPin className="mr-1 h-3 w-3" />
                                    {job.location}
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-1 flex-col p-4">
                                <div className="flex flex-col gap-1">
                                  <h3 className="font-semibold">{job.title}</h3>
                                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <Badge variant="outline">{job.type}</Badge>
                                    <Badge variant="outline">{job.area}</Badge>
                                    <div className="flex items-center">
                                      <Clock className="mr-1 h-3 w-3" />
                                      {job.posted}
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-2 flex flex-wrap gap-1">
                                  {job.badges.map((badge, index) => (
                                    <Badge key={index} variant="secondary" className="text-xs">
                                      {badge}
                                    </Badge>
                                  ))}
                                </div>
                                <div className="mt-4 flex justify-end">
                                  <Button size="sm" asChild>
                                    <Link href={`/job/${job.id}`}>Ver Detalhes</Link>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="applications" className="mt-4">
                  <div className="grid gap-4">
                    {applications.map((application) => (
                      <Card key={application.id} className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="flex flex-col sm:flex-row">
                            <div className="flex items-center gap-4 border-b sm:border-b-0 sm:border-r p-4 sm:w-64">
                              <Image
                                src={application.logo || "/placeholder.svg"}
                                width={40}
                                height={40}
                                alt={application.company}
                                className="rounded-md"
                              />
                              <div>
                                <h3 className="font-medium">{application.company}</h3>
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <Calendar className="mr-1 h-3 w-3" />
                                  {application.applied}
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-1 flex-col p-4">
                              <div className="flex flex-col gap-1">
                                <h3 className="font-semibold">{application.title}</h3>
                                <div className="flex items-center gap-2">
                                  <Badge
                                    variant={
                                      application.status === "Em análise"
                                        ? "outline"
                                        : application.status === "Entrevista"
                                          ? "secondary"
                                          : "destructive"
                                    }
                                  >
                                    {application.status}
                                  </Badge>
                                </div>
                              </div>
                              <div className="mt-4">
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-muted-foreground">Progresso</span>
                                  <span>{application.progress}%</span>
                                </div>
                                <Progress value={application.progress} className="mt-2" />
                              </div>
                              <div className="mt-4 flex justify-end">
                                <Button size="sm" variant="outline" asChild>
                                  <Link href={`/application/${application.id}`}>Ver Detalhes</Link>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

