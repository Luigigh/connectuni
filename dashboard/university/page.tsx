"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart3,
  Bell,
  BriefcaseBusiness,
  Building2,
  Calendar,
  ChevronDown,
  Home,
  LineChart,
  MessageSquare,
  PlusCircle,
  Search,
  Settings,
  Users,
  X,
  Filter,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Adicionar o botão de tema ao dashboard da universidade
import { ThemeToggle } from "@/components/theme-toggle"

// Mock data for job postings
const jobPostingsData = [
  {
    id: 1,
    title: "Estágio em Desenvolvimento Web",
    department: "Tecnologia da Informação",
    type: "Estágio",
    status: "Ativa",
    posted: "15/03/2023",
    expires: "15/04/2023",
    applicants: 12,
    views: 145,
  },
  {
    id: 2,
    title: "Assistente de Pesquisa",
    department: "Departamento de Ciências",
    type: "Meio Período",
    status: "Ativa",
    posted: "10/03/2023",
    expires: "10/04/2023",
    applicants: 8,
    views: 98,
  },
  {
    id: 3,
    title: "Estágio em Marketing Digital",
    department: "Marketing",
    type: "Estágio",
    status: "Encerrada",
    posted: "01/03/2023",
    expires: "01/04/2023",
    applicants: 20,
    views: 210,
  },
  {
    id: 4,
    title: "Bolsista de Iniciação Científica",
    department: "Pesquisa",
    type: "Bolsa",
    status: "Ativa",
    posted: "05/03/2023",
    expires: "05/04/2023",
    applicants: 15,
    views: 180,
  },
  {
    id: 5,
    title: "Estágio em Design Gráfico",
    department: "Marketing",
    type: "Estágio",
    status: "Ativa",
    posted: "12/03/2023",
    expires: "12/04/2023",
    applicants: 6,
    views: 85,
  },
  {
    id: 6,
    title: "Analista de Dados Jr",
    department: "Tecnologia da Informação",
    type: "CLT",
    status: "Ativa",
    posted: "08/03/2023",
    expires: "08/04/2023",
    applicants: 18,
    views: 220,
  },
  {
    id: 7,
    title: "Monitor de Laboratório",
    department: "Departamento de Ciências",
    type: "Bolsa",
    status: "Ativa",
    posted: "03/03/2023",
    expires: "03/04/2023",
    applicants: 10,
    views: 120,
  },
]

// Mock data for recent applicants
const recentApplicantsData = [
  {
    id: 1,
    name: "João Silva",
    course: "Ciência da Computação",
    applied: "Há 2 dias",
    position: "Estágio em Desenvolvimento Web",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "Novo",
  },
  {
    id: 2,
    name: "Maria Oliveira",
    course: "Administração",
    applied: "Há 3 dias",
    position: "Assistente de Pesquisa",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "Entrevista",
  },
  {
    id: 3,
    name: "Pedro Santos",
    course: "Marketing",
    applied: "Há 5 dias",
    position: "Estágio em Marketing Digital",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "Avaliação",
  },
  {
    id: 4,
    name: "Ana Pereira",
    course: "Design",
    applied: "Há 1 dia",
    position: "Estágio em Design Gráfico",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "Novo",
  },
  {
    id: 5,
    name: "Lucas Mendes",
    course: "Ciência da Computação",
    applied: "Há 4 dias",
    position: "Analista de Dados Jr",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "Avaliação",
  },
]

export default function UniversityDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("")
  const [typeFilter, setTypeFilter] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [filtersVisible, setFiltersVisible] = useState(false)
  const [jobPostings, setJobPostings] = useState(jobPostingsData)
  const [recentApplicants, setRecentApplicants] = useState(recentApplicantsData)
  const [filteredJobs, setFilteredJobs] = useState(jobPostingsData)
  const [filteredApplicants, setFilteredApplicants] = useState(recentApplicantsData)
  const [activeTab, setActiveTab] = useState("jobs")

  // Aplicar filtros quando qualquer filtro mudar para vagas
  useEffect(() => {
    let filtered = jobPostingsData

    // Aplicar filtro de busca
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (job) => job.title.toLowerCase().includes(searchLower) || job.department.toLowerCase().includes(searchLower),
      )
    }

    // Aplicar filtro de departamento
    if (departmentFilter) {
      filtered = filtered.filter((job) => job.department === departmentFilter)
    }

    // Aplicar filtro de tipo de vaga
    if (typeFilter) {
      filtered = filtered.filter((job) => job.type === typeFilter)
    }

    // Aplicar filtro de status
    if (statusFilter) {
      filtered = filtered.filter((job) => job.status === statusFilter)
    }

    setFilteredJobs(filtered)
  }, [searchTerm, departmentFilter, typeFilter, statusFilter])

  // Aplicar filtros para candidatos
  useEffect(() => {
    let filtered = recentApplicantsData

    // Aplicar filtro de busca
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (applicant) =>
          applicant.name.toLowerCase().includes(searchLower) ||
          applicant.course.toLowerCase().includes(searchLower) ||
          applicant.position.toLowerCase().includes(searchLower),
      )
    }

    setFilteredApplicants(filtered)
  }, [searchTerm])

  // Função para limpar todos os filtros
  const clearFilters = () => {
    setDepartmentFilter("")
    setTypeFilter("")
    setStatusFilter("")
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
                  alt="Logo"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Universidade Federal</span>
                <span className="text-xs text-muted-foreground">Administrador</span>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/university">
                    <Home className="h-4 w-4" />
                    <span>Painel</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/university/jobs">
                    <BriefcaseBusiness className="h-4 w-4" />
                    <span>Vagas</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/university/applicants">
                    <Users className="h-4 w-4" />
                    <span>Candidatos</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/university/messages">
                    <MessageSquare className="h-4 w-4" />
                    <span>Mensagens</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/university/analytics">
                    <BarChart3 className="h-4 w-4" />
                    <span>Analytics</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/university/calendar">
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
                  <Link href="/dashboard/university/settings">
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
                  placeholder="Buscar vagas, candidatos..."
                  className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <Button variant="outline" size="icon" className="relative">
                  <Bell className="h-4 w-4" />
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                    5
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
                      <Building2 className="mr-2 h-4 w-4" />
                      <span>Perfil da Universidade</span>
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
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-bold tracking-tight">Painel Administrativo</h1>
                  <p className="text-muted-foreground">Gerencie vagas, candidatos e acompanhe métricas.</p>
                </div>
                <Button asChild>
                  <Link href="/dashboard/university/jobs/new">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Nova Vaga
                  </Link>
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Vagas Ativas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {jobPostingsData.filter((job) => job.status === "Ativa").length}
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">3 novas vagas esta semana</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total de Candidatos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {jobPostingsData.reduce((acc, job) => acc + job.applicants, 0)}
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">15 novos candidatos esta semana</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <div className="text-2xl font-bold">24%</div>
                      <Badge className="ml-2" variant="outline">
                        <LineChart className="mr-1 h-3 w-3 text-emerald-500" />
                        +5%
                      </Badge>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">Comparado ao mês anterior</p>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="jobs" onValueChange={setActiveTab}>
                <div className="flex items-center justify-between">
                  <TabsList>
                    <TabsTrigger value="jobs">Vagas Publicadas</TabsTrigger>
                    <TabsTrigger value="applicants">Candidatos Recentes</TabsTrigger>
                  </TabsList>

                  {activeTab === "jobs" && (
                    <div className="flex items-center gap-2">
                      {(departmentFilter || typeFilter || statusFilter) && (
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
                            {(departmentFilter || typeFilter || statusFilter) && (
                              <Badge
                                variant="secondary"
                                className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center"
                              >
                                {[departmentFilter, typeFilter, statusFilter].filter(Boolean).length}
                              </Badge>
                            )}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[240px]">
                          <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <div className="grid gap-2 p-2">
                            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                              <SelectTrigger>
                                <SelectValue placeholder="Departamento" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="all">Todos os departamentos</SelectItem>
                                <SelectItem value="Tecnologia da Informação">Tecnologia da Informação</SelectItem>
                                <SelectItem value="Departamento de Ciências">Departamento de Ciências</SelectItem>
                                <SelectItem value="Marketing">Marketing</SelectItem>
                                <SelectItem value="Pesquisa">Pesquisa</SelectItem>
                              </SelectContent>
                            </Select>
                            <Select value={typeFilter} onValueChange={setTypeFilter}>
                              <SelectTrigger>
                                <SelectValue placeholder="Tipo de Vaga" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="all">Todos os tipos</SelectItem>
                                <SelectItem value="Estágio">Estágio</SelectItem>
                                <SelectItem value="Meio Período">Meio Período</SelectItem>
                                <SelectItem value="CLT">CLT</SelectItem>
                                <SelectItem value="Bolsa">Bolsa</SelectItem>
                              </SelectContent>
                            </Select>
                            <Select value={statusFilter} onValueChange={setStatusFilter}>
                              <SelectTrigger>
                                <SelectValue placeholder="Status" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="all">Todos os status</SelectItem>
                                <SelectItem value="Ativa">Ativa</SelectItem>
                                <SelectItem value="Encerrada">Encerrada</SelectItem>
                              </SelectContent>
                            </Select>
                            <Button size="sm" onClick={applyFilters}>
                              Aplicar Filtros
                            </Button>
                          </div>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  )}
                </div>

                <TabsContent value="jobs" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Gerenciamento de Vagas</CardTitle>
                      <CardDescription>
                        Visualize e gerencie todas as vagas publicadas pela sua universidade.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
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
                        <div className="overflow-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b text-sm">
                                <th className="text-left font-medium p-2 pl-0">Título</th>
                                <th className="text-left font-medium p-2">Departamento</th>
                                <th className="text-left font-medium p-2">Tipo</th>
                                <th className="text-left font-medium p-2">Status</th>
                                <th className="text-left font-medium p-2">Candidatos</th>
                                <th className="text-left font-medium p-2">Visualizações</th>
                                <th className="text-left font-medium p-2">Ações</th>
                              </tr>
                            </thead>
                            <tbody>
                              {filteredJobs.map((job) => (
                                <tr key={job.id} className="border-b text-sm">
                                  <td className="p-2 pl-0">
                                    <div className="font-medium">{job.title}</div>
                                    <div className="text-xs text-muted-foreground">Publicada: {job.posted}</div>
                                  </td>
                                  <td className="p-2">{job.department}</td>
                                  <td className="p-2">
                                    <Badge variant="outline">{job.type}</Badge>
                                  </td>
                                  <td className="p-2">
                                    <Badge variant={job.status === "Ativa" ? "secondary" : "outline"}>
                                      {job.status}
                                    </Badge>
                                  </td>
                                  <td className="p-2">{job.applicants}</td>
                                  <td className="p-2">{job.views}</td>
                                  <td className="p-2">
                                    <div className="flex gap-2">
                                      <Button size="sm" variant="ghost" asChild>
                                        <Link href={`/dashboard/university/jobs/${job.id}`}>Editar</Link>
                                      </Button>
                                      <Button size="sm" variant="ghost" asChild>
                                        <Link href={`/dashboard/university/jobs/${job.id}/applicants`}>
                                          Ver Candidatos
                                        </Link>
                                      </Button>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        Exportar Relatório
                      </Button>
                      <Button size="sm" asChild>
                        <Link href="/dashboard/university/jobs">Ver Todas as Vagas</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="applicants" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Candidatos Recentes</CardTitle>
                      <CardDescription>Visualize os candidatos mais recentes para suas vagas.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {filteredApplicants.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                          <div className="rounded-full bg-muted p-3 mb-4">
                            <Search className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <h3 className="text-lg font-medium">Nenhum candidato encontrado</h3>
                          <p className="text-muted-foreground mt-1 max-w-md">
                            Não encontramos candidatos com os critérios de busca atuais.
                          </p>
                          <Button variant="outline" className="mt-4" onClick={() => setSearchTerm("")}>
                            Limpar Busca
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {filteredApplicants.map((applicant) => (
                            <div key={applicant.id} className="flex items-center justify-between border-b pb-4">
                              <div className="flex items-center gap-4">
                                <Image
                                  src={applicant.avatar || "/placeholder.svg"}
                                  width={40}
                                  height={40}
                                  alt={applicant.name}
                                  className="rounded-full"
                                />
                                <div>
                                  <h3 className="font-medium">{applicant.name}</h3>
                                  <div className="text-sm text-muted-foreground">{applicant.course}</div>
                                  <div className="mt-1 flex items-center gap-2 text-xs">
                                    <Badge variant="outline">{applicant.status}</Badge>
                                    <span className="text-muted-foreground">Aplicou {applicant.applied}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="text-sm text-right">
                                <div className="font-medium">{applicant.position}</div>
                                <Button size="sm" variant="ghost" className="mt-2" asChild>
                                  <Link href={`/dashboard/university/applicants/${applicant.id}`}>Ver Perfil</Link>
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button size="sm" className="w-full" asChild>
                        <Link href="/dashboard/university/applicants">Ver Todos os Candidatos</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

