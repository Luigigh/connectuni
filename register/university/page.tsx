"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { GraduationCap, ChevronLeft, Eye, EyeOff, Loader2, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ThemeToggle } from "@/components/theme-toggle"

// Esquema de validação para o formulário de universidade
const universityFormSchema = z
  .object({
    name: z.string().min(3, {
      message: "O nome deve ter pelo menos 3 caracteres.",
    }),
    email: z.string().email({
      message: "Digite um e-mail válido.",
    }),
    password: z.string().min(8, {
      message: "A senha deve ter pelo menos 8 caracteres.",
    }),
    confirmPassword: z.string(),
    phone: z.string().min(10, {
      message: "Digite um telefone válido.",
    }),
    website: z.string().url({
      message: "Digite uma URL válida.",
    }),
    type: z.string().min(1, {
      message: "Selecione o tipo de instituição.",
    }),
    location: z.string().min(3, {
      message: "Digite a localização da instituição.",
    }),
    founded: z.string().regex(/^\d{4}$/, {
      message: "Digite um ano válido (ex: 1980).",
    }),
    about: z
      .string()
      .min(10, {
        message: "A descrição deve ter pelo menos 10 caracteres.",
      })
      .max(500, {
        message: "A descrição deve ter no máximo 500 caracteres.",
      }),
    terms: z.boolean().refine((val) => val === true, {
      message: "Você deve aceitar os termos de uso.",
    }),
    // Adicionamos um campo opcional para o logo
    logo: z.any().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  })

type UniversityFormValues = z.infer<typeof universityFormSchema>

// Lista de tipos de instituição para o select
const institutionTypes = [
  { value: "publica_federal", label: "Pública Federal" },
  { value: "publica_estadual", label: "Pública Estadual" },
  { value: "publica_municipal", label: "Pública Municipal" },
  { value: "privada", label: "Privada" },
  { value: "comunitaria", label: "Comunitária" },
  { value: "confessional", label: "Confessional" },
  { value: "filantrópica", label: "Filantrópica" },
]

export default function UniversityRegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [logoPreview, setLogoPreview] = useState<string | null>(null)

  // Valores padrão para o formulário
  const defaultValues: Partial<UniversityFormValues> = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    website: "",
    type: "",
    location: "",
    founded: "",
    about: "",
    terms: false,
    logo: null,
  }

  // Inicializar o formulário com react-hook-form e zod
  const form = useForm<UniversityFormValues>({
    resolver: zodResolver(universityFormSchema),
    defaultValues,
  })

  // Função para lidar com o upload de logo
  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    if (file) {
      setLogoFile(file)
      form.setValue("logo", file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setLogoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  // Função para lidar com o envio do formulário
  async function onSubmit(data: UniversityFormValues) {
    try {
      setIsSubmitting(true)

      // Aqui você faria a chamada para a API para registrar a universidade
      console.log("Dados do formulário:", data)
      console.log("Logo:", logoFile)

      // Simular um atraso de rede
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mostrar toast de sucesso


      // Redirecionar para o dashboard após o cadastro
      setTimeout(() => {
        router.push("/dashboard/university")
      }, 1500)
    } catch (error) {
      console.error("Erro ao cadastrar:", error)

    } finally {
      setIsSubmitting(false)
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

      <main className="flex-1 container max-w-screen-md py-10">
        <Card className="w-full">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild className="rounded-full">
                <Link href="/register">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Voltar</span>
                </Link>
              </Button>
              <div>
                <CardTitle className="text-2xl">Cadastro de Universidade</CardTitle>
                <CardDescription>Crie uma conta institucional para publicar vagas e encontrar talentos</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome da instituição</FormLabel>
                        <FormControl>
                          <Input placeholder="Digite o nome da instituição" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail institucional</FormLabel>
                        <FormControl>
                          <Input placeholder="contato@universidade.edu.br" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Senha</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="Digite sua senha"
                              type={showPassword ? "text" : "password"}
                              {...field}
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="absolute right-0 top-0 h-full px-3 py-2 text-muted-foreground"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              <span className="sr-only">{showPassword ? "Esconder senha" : "Mostrar senha"}</span>
                            </Button>
                          </div>
                        </FormControl>
                        <FormDescription>Mínimo de 8 caracteres</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirmar senha</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="Confirme sua senha"
                              type={showConfirmPassword ? "text" : "password"}
                              {...field}
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="absolute right-0 top-0 h-full px-3 py-2 text-muted-foreground"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                              {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              <span className="sr-only">
                                {showConfirmPassword ? "Esconder senha" : "Mostrar senha"}
                              </span>
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone</FormLabel>
                        <FormControl>
                          <Input placeholder="(00) 0000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website</FormLabel>
                        <FormControl>
                          <Input placeholder="https://www.universidade.edu.br" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de instituição</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o tipo" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {institutionTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Localização</FormLabel>
                        <FormControl>
                          <Input placeholder="Cidade, Estado" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="founded"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ano de fundação</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: 1980" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="about"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sobre a instituição</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Descreva brevemente a história e missão da instituição"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Máximo de 500 caracteres</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Aqui está a correção: usando Label em vez de FormLabel fora do FormField */}
                <FormField
                  control={form.control}
                  name="logo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Logo da instituição (opcional)</FormLabel>
                      <FormControl>
                        <div className="space-y-2">
                          <div className="flex items-center gap-4">
                            <div className="flex h-24 w-24 items-center justify-center rounded-md border border-dashed">
                              {logoPreview ? (
                                <img
                                  src={logoPreview || "/placeholder.svg"}
                                  alt="Logo preview"
                                  className="h-full w-full object-contain p-2"
                                />
                              ) : (
                                <Upload className="h-8 w-8 text-muted-foreground" />
                              )}
                            </div>
                            <div className="flex-1">
                              <Input
                                type="file"
                                accept="image/*"
                                onChange={handleLogoChange}
                                className="cursor-pointer"
                              />
                              <p className="mt-1 text-xs text-muted-foreground">
                                Formatos aceitos: JPG, PNG. Tamanho máximo: 2MB
                              </p>
                            </div>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Termos e condições</FormLabel>
                        <FormDescription>
                          Eu concordo com os{" "}
                          <Link href="/terms" className="text-primary underline hover:text-primary/80">
                            termos de serviço
                          </Link>{" "}
                          e{" "}
                          <Link href="/privacy" className="text-primary underline hover:text-primary/80">
                            política de privacidade
                          </Link>
                          .
                        </FormDescription>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processando...
                      </>
                    ) : (
                      "Criar conta"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            <Button variant="outline" size="sm" asChild>
              <Link href="/register">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Voltar
              </Link>
            </Button>
            <div className="text-sm text-muted-foreground">
              Já tem uma conta?{" "}
              <Link href="/login" className="text-primary underline hover:text-primary/80">
                Entrar
              </Link>
            </div>
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

