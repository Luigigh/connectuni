"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  CalendarIcon,
  BarChart3,
  Bell,
  Building2,
  ChevronDown,
  Home,
  MessageSquare,
  Plus,
  Settings,
  Trash2,
  Users,
  X,
  BriefcaseBusiness,
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { Badge } from "@/components/ui/badge"

// Adicionar o botão de tema à página de criação de vaga
import { ThemeToggle } from "@/components/theme-toggle"

export default function NewJobPage() {
  const [date, setDate] = useState<Date>()
  const [skills, setSkills] = useState<string[]>(["JavaScript", "React", "Node.js", "HTML/CSS"])
  const [newSkill, setNewSkill] = useState("")

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill])
      setNewSkill("")
    }
  }

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill))
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
                  <Link href="/dashboard/university/profile">
                    <Building2 className="h-4 w-4" />
                    <span>Perfil da Instituição</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
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
              <div className="flex-1">
                <h1 className="text-lg font-semibold">Nova Vaga</h1>
              </div>
              {/* Adicionar o ThemeToggle ao header */}
              {/* Localizar a div que contém os botões de notificação e perfil */}
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

          <main className="flex-1 p-6">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold">Publicar Nova Vaga</h1>
                  <p className="text-muted-foreground">
                    Preencha os detalhes da oportunidade para atrair os melhores candidatos
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/dashboard/university/jobs">Cancelar</Link>
                  </Button>
                  <Button>Publicar Vaga</Button>
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Informações Básicas</CardTitle>
                    <CardDescription>Detalhes principais da vaga</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Título da Vaga *</Label>
                      <Input id="title" placeholder="Ex: Estágio em Desenvolvimento Web" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="department">Departamento *</Label>
                        <Select>
                          <SelectTrigger id="department">
                            <SelectValue placeholder="Selecione um departamento" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ti">Tecnologia da Informação</SelectItem>
                            <SelectItem value="eng">Engenharia</SelectItem>
                            <SelectItem value="adm">Administração</SelectItem>
                            <SelectItem value="mkt">Marketing</SelectItem>
                            <SelectItem value="rh">Recursos Humanos</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="type">Tipo de Vaga *</Label>
                        <Select>
                          <SelectTrigger id="type">
                            <SelectValue placeholder="Selecione o tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="internship">Estágio</SelectItem>
                            <SelectItem value="parttime">Meio Período</SelectItem>
                            <SelectItem value="fulltime">Período Integral</SelectItem>
                            <SelectItem value="scholarship">Bolsa de Pesquisa</SelectItem>
                            <SelectItem value="volunteer">Voluntário</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="location">Localização *</Label>
                        <Input id="location" placeholder="Ex: São Paulo, SP" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="modality">Modalidade *</Label>
                        <Select>
                          <SelectTrigger id="modality">
                            <SelectValue placeholder="Selecione a modalidade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="presential">Presencial</SelectItem>
                            <SelectItem value="remote">Remoto</SelectItem>
                            <SelectItem value="hybrid">Híbrido</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="salary">Bolsa/Salário (opcional)</Label>
                        <Input id="salary" placeholder="Ex: R$ 1.200,00" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="deadline">Data Limite para Inscrição *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "dd/MM/yyyy") : <span>Selecione uma data</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Descrição da Vaga</CardTitle>
                    <CardDescription>Detalhes sobre a oportunidade, responsabilidades e requisitos</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="description">Descrição Geral *</Label>
                      <Textarea
                        id="description"
                        placeholder="Descreva a vaga, o contexto e os objetivos..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="responsibilities">Responsabilidades *</Label>
                      <Textarea
                        id="responsibilities"
                        placeholder="Liste as principais atividades e responsabilidades..."
                        className="min-h-[120px]"
                      />
                      <p className="text-xs text-muted-foreground">
                        Dica: Use marcadores para listar as responsabilidades de forma clara.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="requirements">Requisitos *</Label>
                      <Textarea
                        id="requirements"
                        placeholder="Liste os requisitos necessários para a vaga..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="benefits">Benefícios (opcional)</Label>
                      <Textarea
                        id="benefits"
                        placeholder="Liste os benefícios oferecidos..."
                        className="min-h-[100px]"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Habilidades Desejadas</CardTitle>
                    <CardDescription>Adicione as habilidades e competências relevantes para a vaga</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm">
                          {skill}
                          <Button
                            variant="ghost"
                            size="icon"
                            className="ml-1 h-4 w-4"
                            onClick={() => removeSkill(skill)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Input
                        placeholder="Adicionar nova habilidade"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && addSkill()}
                      />
                      <Button type="button" onClick={addSkill}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Configurações Adicionais</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="featured" />
                        <label
                          htmlFor="featured"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Destacar vaga (aparecerá no topo das buscas)
                        </label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="notify" defaultChecked />
                        <label
                          htmlFor="notify"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Receber notificações sobre candidaturas
                        </label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="questions" />
                        <label
                          htmlFor="questions"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Incluir perguntas personalizadas no formulário de candidatura
                        </label>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-between">
                  <Button variant="outline" className="gap-2">
                    <Trash2 className="h-4 w-4" />
                    Descartar Rascunho
                  </Button>

                  <div className="flex gap-2">
                    <Button variant="outline">Salvar como Rascunho</Button>
                    <Button>Publicar Vaga</Button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

