"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  BarChart3,
  Bell,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  Edit,
  GraduationCap,
  Globe,
  Home,
  Link2,
  MapPin,
  MessageSquare,
  Phone,
  Plus,
  Settings,
  Share2,
  Star,
  Upload,
  Users,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
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

// Adicionar o botão de tema à página de perfil da universidade
import { ThemeToggle } from "@/components/theme-toggle"

// Mock university profile data
const profile = {
  name: "Universidade Federal",
  type: "Pública Federal",
  email: "contato@universidadefederal.edu.br",
  phone: "(11) 3456-7890",
  website: "www.universidadefederal.edu.br",
  location: "São Paulo, SP",
  founded: "1934",
  about:
    "A Universidade Federal é uma instituição de ensino superior pública brasileira, reconhecida pela excelência em ensino, pesquisa e extensão. Com mais de 80 anos de história, formamos profissionais qualificados e contribuímos para o desenvolvimento científico e tecnológico do país.",
  logo: "/placeholder.svg?height=150&width=150",
  coverPhoto: "/placeholder.svg?height=300&width=1200",
  stats: {
    students: "45.000+",
    courses: "120+",
    professors: "2.500+",
    campuses: "5",
  },
  departments: [
    "Ciências Exatas e da Terra",
    "Ciências Biológicas",
    "Engenharias",
    "Ciências da Saúde",
    "Ciências Agrárias",
    "Ciências Sociais Aplicadas",
    "Ciências Humanas",
    "Linguística, Letras e Artes",
  ],
  courses: [
    {
      name: "Ciência da Computação",
      type: "Bacharelado",
      duration: "4 anos",
      department: "Ciências Exatas e da Terra",
    },
    {
      name: "Engenharia Civil",
      type: "Bacharelado",
      duration: "5 anos",
      department: "Engenharias",
    },
    {
      name: "Medicina",
      type: "Bacharelado",
      duration: "6 anos",
      department: "Ciências da Saúde",
    },
    {
      name: "Administração",
      type: "Bacharelado",
      duration: "4 anos",
      department: "Ciências Sociais Aplicadas",
    },
    {
      name: "Psicologia",
      type: "Bacharelado",
      duration: "5 anos",
      department: "Ciências Humanas",
    },
  ],
  activeJobs: 12,
  totalApplicants: 87,
  profileCompletion: 90,
  socialMedia: {
    facebook: "facebook.com/universidadefederal",
    instagram: "instagram.com/universidadefederal",
    twitter: "twitter.com/universidadefederal",
    linkedin: "linkedin.com/company/universidadefederal",
  },
  achievements: [
    "Top 10 universidades do Brasil",
    "Nota máxima no MEC",
    "Reconhecimento internacional em pesquisa",
    "Prêmio de inovação acadêmica 2022",
  ],
}

export default function UniversityProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-muted/40">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={profile.logo || "/placeholder.svg"}
                  width={40}
                  height={40}
                  alt="Logo"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{profile.name}</span>
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
                <SidebarMenuButton asChild isActive>
                  <Link href="/dashboard/university/profile">
                    <Building2 className="h-4 w-4" />
                    <span>Perfil da Instituição</span>
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
                <h1 className="text-lg font-semibold">Perfil da Instituição</h1>
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
                          src={profile.logo || "/placeholder.svg"}
                          width={32}
                          height={32}
                          alt="Logo"
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
                  <Image src={profile.logo || "/placeholder.svg"} fill alt={profile.name} className="object-cover" />
                  <Button variant="secondary" size="icon" className="absolute bottom-0 right-0 h-8 w-8 rounded-full">
                    <Upload className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex-1 pt-4 md:pt-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-bold">{profile.name}</h1>
                        <Badge variant="secondary">Verificada</Badge>
                      </div>
                      <p className="text-muted-foreground">
                        {profile.type} • Fundada em {profile.founded}
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
                        <span className="text-xs text-muted-foreground">10% para completar</span>
                      </div>
                      <Progress value={profile.profileCompletion} className="h-2 mt-2" />
                    </div>

                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <Link
                          href={`https://${profile.website}`}
                          target="_blank"
                          className="text-primary hover:underline"
                        >
                          {profile.website}
                        </Link>
                      </div>
                      <div className="flex items-center gap-1">
                        <Link2 className="h-4 w-4 text-muted-foreground" />
                        <Link
                          href={`https://${profile.socialMedia.linkedin}`}
                          target="_blank"
                          className="text-primary hover:underline"
                        >
                          LinkedIn
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
                        <span>Sobre a Instituição</span>
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
                          placeholder="Escreva uma descrição sobre a instituição, sua história, missão e valores."
                        />
                      ) : (
                        <p>{profile.about}</p>
                      )}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Estatísticas</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <h3 className="text-2xl font-bold">{profile.stats.students}</h3>
                          <p className="text-sm text-muted-foreground">Estudantes</p>
                        </div>
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <h3 className="text-2xl font-bold">{profile.stats.courses}</h3>
                          <p className="text-sm text-muted-foreground">Cursos</p>
                        </div>
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <h3 className="text-2xl font-bold">{profile.stats.professors}</h3>
                          <p className="text-sm text-muted-foreground">Professores</p>
                        </div>
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <h3 className="text-2xl font-bold">{profile.stats.campuses}</h3>
                          <p className="text-sm text-muted-foreground">Campi</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Departamentos</span>
                        {isEditing && (
                          <Button variant="ghost" size="sm">
                            <Plus className="h-4 w-4" />
                          </Button>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {profile.departments.map((department, index) => (
                          <div key={index} className="flex items-center gap-2 p-2 rounded-md hover:bg-muted">
                            <GraduationCap className="h-4 w-4 text-muted-foreground" />
                            <span>{department}</span>
                            {isEditing && (
                              <Button variant="ghost" size="icon" className="ml-auto h-6 w-6">
                                <Edit className="h-3 w-3" />
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Cursos Oferecidos</span>
                        {isEditing && (
                          <Button variant="ghost" size="sm">
                            <Plus className="h-4 w-4" />
                          </Button>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {profile.courses.map((course, index) => (
                          <div key={index} className="relative border-b pb-4 last:border-0 last:pb-0">
                            {isEditing && (
                              <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-8 w-8">
                                <Edit className="h-4 w-4" />
                              </Button>
                            )}
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                              <h3 className="font-semibold">{course.name}</h3>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">{course.type}</Badge>
                                <span className="text-sm text-muted-foreground">{course.duration}</span>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">Departamento: {course.department}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Reconhecimentos e Conquistas</span>
                        {isEditing && (
                          <Button variant="ghost" size="sm">
                            <Plus className="h-4 w-4" />
                          </Button>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {profile.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-center gap-2 p-2 rounded-md hover:bg-muted">
                            <Star className="h-4 w-4 text-amber-500" />
                            <span>{achievement}</span>
                            {isEditing && (
                              <Button variant="ghost" size="icon" className="ml-auto h-6 w-6">
                                <Edit className="h-3 w-3" />
                              </Button>
                            )}
                          </div>
                        ))}
                        {isEditing && (
                          <div className="flex items-center gap-2 p-2 rounded-md border border-dashed">
                            <Plus className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">Adicionar nova conquista</span>
                          </div>
                        )}
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
                          <Globe className="h-4 w-4 text-muted-foreground" />
                          <Link
                            href={`https://${profile.website}`}
                            target="_blank"
                            className="text-sm text-primary hover:underline"
                          >
                            {profile.website}
                          </Link>
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
                        <span>Redes Sociais</span>
                        {isEditing && (
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <Link
                          href={`https://${profile.socialMedia.facebook}`}
                          target="_blank"
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
                        >
                          <Facebook className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">Facebook</span>
                        </Link>
                        <Link
                          href={`https://${profile.socialMedia.instagram}`}
                          target="_blank"
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
                        >
                          <Instagram className="h-4 w-4 text-pink-600" />
                          <span className="text-sm">Instagram</span>
                        </Link>
                        <Link
                          href={`https://${profile.socialMedia.twitter}`}
                          target="_blank"
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
                        >
                          <Twitter className="h-4 w-4 text-blue-400" />
                          <span className="text-sm">Twitter</span>
                        </Link>
                        <Link
                          href={`https://${profile.socialMedia.linkedin}`}
                          target="_blank"
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
                        >
                          <Linkedin className="h-4 w-4 text-blue-700" />
                          <span className="text-sm">LinkedIn</span>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Vagas Ativas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-4">
                        <div className="text-3xl font-bold">{profile.activeJobs}</div>
                        <p className="text-sm text-muted-foreground mt-1">Oportunidades publicadas</p>
                      </div>
                      <Separator className="my-4" />
                      <div className="text-center py-4">
                        <div className="text-3xl font-bold">{profile.totalApplicants}</div>
                        <p className="text-sm text-muted-foreground mt-1">Candidatos totais</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/dashboard/university/jobs">
                          <BriefcaseBusiness className="mr-2 h-4 w-4" />
                          Gerenciar Vagas
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Ações Rápidas</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <Link href="/dashboard/university/jobs/new">
                          <Plus className="mr-2 h-4 w-4" />
                          Publicar Nova Vaga
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <Link href="/dashboard/university/applicants">
                          <Users className="mr-2 h-4 w-4" />
                          Ver Candidatos
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <Link href="/dashboard/university/analytics">
                          <BarChart3 className="mr-2 h-4 w-4" />
                          Acessar Analytics
                        </Link>
                      </Button>
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

