"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import {
  Bell,
  BriefcaseBusiness,
  Building2,
  Calendar,
  ChevronDown,
  Edit,
  FileText,
  GraduationCap,
  Home,
  Languages,
  Link2,
  MapPin,
  MessageSquare,
  Plus,
  Settings,
  Share2,
  Upload,
  User,
  X,
  Mail,
  Phone,
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

// Adicionar o botão de tema à página de perfil do estudante
import { ThemeToggle } from "@/components/theme-toggle"

// Mock profile data
const profile = {
  name: "Ana Silva",
  email: "ana.silva@universidade.edu.br",
  phone: "(11) 98765-4321",
  location: "São Paulo, SP",
  university: "Universidade Federal",
  course: "Ciência da Computação",
  semester: "5º Semestre",
  about:
    "Estudante de Ciência da Computação apaixonada por desenvolvimento web e inteligência artificial. Busco oportunidades para aplicar meus conhecimentos e desenvolver novas habilidades em um ambiente desafiador.",
  avatar: "/placeholder.svg?height=150&width=150",
  coverPhoto: "/placeholder.svg?height=300&width=1200",
  skills: ["JavaScript", "React", "Node.js", "HTML/CSS", "Python", "Git", "SQL", "TypeScript", "UI/UX Design", "Figma"],
  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Avançado" },
    { name: "Espanhol", level: "Intermediário" },
  ],
  education: [
    {
      institution: "Universidade Federal",
      degree: "Bacharelado em Ciência da Computação",
      period: "2020 - 2024 (Cursando)",
      description: "Foco em desenvolvimento de software, inteligência artificial e ciência de dados.",
    },
    {
      institution: "Colégio Técnico",
      degree: "Técnico em Informática",
      period: "2017 - 2019",
      description: "Formação técnica com ênfase em programação e redes de computadores.",
    },
  ],
  experience: [
    {
      company: "Startup XYZ",
      position: "Estagiária de Desenvolvimento",
      period: "Jan 2022 - Atual",
      description:
        "Desenvolvimento de aplicações web utilizando React e Node.js. Participação em projetos de inovação e implementação de novas funcionalidades.",
    },
    {
      company: "Laboratório de Pesquisa",
      position: "Bolsista de Iniciação Científica",
      period: "Mar 2021 - Dez 2021",
      description:
        "Pesquisa na área de processamento de linguagem natural e desenvolvimento de algoritmos de aprendizado de máquina.",
    },
  ],
  projects: [
    {
      title: "Sistema de Recomendação",
      description:
        "Desenvolvimento de um sistema de recomendação de produtos utilizando técnicas de machine learning e collaborative filtering.",
      technologies: ["Python", "TensorFlow", "Flask"],
      link: "https://github.com/anasilva/recommendation-system",
    },
    {
      title: "Aplicativo de Gestão Acadêmica",
      description: "Aplicativo web para gestão de atividades acadêmicas, incluindo calendário, notas e frequência.",
      technologies: ["React", "Firebase", "Material UI"],
      link: "https://github.com/anasilva/academic-app",
    },
    {
      title: "Portfolio Pessoal",
      description: "Website responsivo para apresentação de projetos e habilidades profissionais.",
      technologies: ["HTML/CSS", "JavaScript", "Bootstrap"],
      link: "https://anasilva.dev",
    },
  ],
  certifications: [
    {
      name: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "2022",
      credential: "UC-123456",
    },
    {
      name: "Machine Learning Specialization",
      issuer: "Coursera",
      date: "2021",
      credential: "ML-789012",
    },
  ],
  profileCompletion: 85,
}

export default function StudentProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-muted/40">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={profile.avatar || "/placeholder.svg"}
                  width={40}
                  height={40}
                  alt="Avatar"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{profile.name}</span>
                <span className="text-xs text-muted-foreground">{profile.course}</span>
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
                <SidebarMenuButton asChild isActive>
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
              <div className="flex-1">
                <h1 className="text-lg font-semibold">Meu Perfil</h1>
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
                          src={profile.avatar || "/placeholder.svg"}
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

          <main className="flex-1">
            <div className="relative h-48 md:h-64 w-full bg-muted">
              <Image
                src={profile.coverPhoto || "/placeholder.svg"}
                fill
                alt="Capa do perfil"
                className="object-cover"
              />
              <div className="absolute bottom-4 right-4 flex gap-2">
                <Button variant="secondary" size="sm">
                  <Upload className="mr-2 h-4 w-4" />
                  Alterar Capa
                </Button>
              </div>
            </div>

            <div className="container px-4 md:px-6">
              <div className="flex flex-col md:flex-row gap-6 -mt-16 md:-mt-20">
                <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-background overflow-hidden bg-background">
                  <Image src={profile.avatar || "/placeholder.svg"} fill alt={profile.name} className="object-cover" />
                  <Button variant="secondary" size="icon" className="absolute bottom-0 right-0 h-8 w-8 rounded-full">
                    <Upload className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex-1 pt-4 md:pt-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h1 className="text-2xl font-bold">{profile.name}</h1>
                      <p className="text-muted-foreground">
                        {profile.course} • {profile.university}
                      </p>
                      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{profile.location}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Share2 className="mr-2 h-4 w-4" />
                        Compartilhar Perfil
                      </Button>
                      <Button size="sm" onClick={() => setIsEditing(!isEditing)}>
                        <Edit className="mr-2 h-4 w-4" />
                        {isEditing ? "Salvar Alterações" : "Editar Perfil"}
                      </Button>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Perfil Completo: {profile.profileCompletion}%</span>
                        <span className="text-xs text-muted-foreground">15% para completar</span>
                      </div>
                      <Progress value={profile.profileCompletion} className="h-2 mt-2" />
                    </div>

                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <Link href="#" className="text-primary hover:underline">
                          Currículo
                        </Link>
                      </div>
                      <div className="flex items-center gap-1">
                        <Link2 className="h-4 w-4 text-muted-foreground" />
                        <Link href="#" className="text-primary hover:underline">
                          LinkedIn
                        </Link>
                      </div>
                      <div className="flex items-center gap-1">
                        <GraduationCap className="h-4 w-4 text-muted-foreground" />
                        <Link href="#" className="text-primary hover:underline">
                          Lattes
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Sobre Mim</span>
                        {isEditing && (
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {isEditing ? (
                        <Textarea
                          defaultValue={profile.about}
                          className="min-h-[120px]"
                          placeholder="Escreva uma breve descrição sobre você, suas habilidades e objetivos profissionais."
                        />
                      ) : (
                        <p>{profile.about}</p>
                      )}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Formação Acadêmica</span>
                        {isEditing && (
                          <Button variant="ghost" size="sm">
                            <Plus className="h-4 w-4" />
                          </Button>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {profile.education.map((edu, index) => (
                          <div key={index} className="relative">
                            {isEditing && (
                              <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-8 w-8">
                                <Edit className="h-4 w-4" />
                              </Button>
                            )}
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                              <h3 className="font-semibold">{edu.degree}</h3>
                              <span className="text-sm text-muted-foreground">{edu.period}</span>
                            </div>
                            <p className="text-sm">{edu.institution}</p>
                            <p className="text-sm text-muted-foreground mt-1">{edu.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Experiência Profissional</span>
                        {isEditing && (
                          <Button variant="ghost" size="sm">
                            <Plus className="h-4 w-4" />
                          </Button>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {profile.experience.map((exp, index) => (
                          <div key={index} className="relative">
                            {isEditing && (
                              <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-8 w-8">
                                <Edit className="h-4 w-4" />
                              </Button>
                            )}
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                              <h3 className="font-semibold">{exp.position}</h3>
                              <span className="text-sm text-muted-foreground">{exp.period}</span>
                            </div>
                            <p className="text-sm">{exp.company}</p>
                            <p className="text-sm text-muted-foreground mt-1">{exp.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Projetos</span>
                        {isEditing && (
                          <Button variant="ghost" size="sm">
                            <Plus className="h-4 w-4" />
                          </Button>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {profile.projects.map((project, index) => (
                          <div key={index} className="relative">
                            {isEditing && (
                              <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-8 w-8">
                                <Edit className="h-4 w-4" />
                              </Button>
                            )}
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold">{project.title}</h3>
                              <Link
                                href={project.link}
                                target="_blank"
                                className="text-xs text-primary hover:underline"
                              >
                                Ver Projeto
                              </Link>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {project.technologies.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Informações de Contato</span>
                        {isEditing && (
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{profile.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{profile.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{profile.location}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Habilidades</span>
                        {isEditing && (
                          <Button variant="ghost" size="sm">
                            <Plus className="h-4 w-4" />
                          </Button>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {profile.skills.map((skill, index) => (
                          <div key={index} className="relative group">
                            <Badge variant="secondary" className="text-sm">
                              {skill}
                              {isEditing && (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                              )}
                            </Badge>
                          </div>
                        ))}
                        {isEditing && (
                          <Badge variant="outline" className="text-sm border-dashed cursor-pointer">
                            <Plus className="mr-1 h-3 w-3" />
                            Adicionar
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Idiomas</span>
                        {isEditing && (
                          <Button variant="ghost" size="sm">
                            <Plus className="h-4 w-4" />
                          </Button>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {profile.languages.map((language, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Languages className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{language.name}</span>
                            </div>
                            <Badge variant="outline">{language.level}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Certificações</span>
                        {isEditing && (
                          <Button variant="ghost" size="sm">
                            <Plus className="h-4 w-4" />
                          </Button>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {profile.certifications.map((cert, index) => (
                          <div key={index} className="relative">
                            {isEditing && (
                              <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-8 w-8">
                                <Edit className="h-4 w-4" />
                              </Button>
                            )}
                            <h3 className="font-medium text-sm">{cert.name}</h3>
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <span>{cert.issuer}</span>
                              <span>{cert.date}</span>
                            </div>
                            <div className="text-xs mt-1">Credencial: {cert.credential}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

