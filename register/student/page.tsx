"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { GraduationCap, ChevronLeft, Eye, EyeOff, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ThemeToggle } from "@/components/theme-toggle"


// Esquema de validação para o formulário de estudante
const studentFormSchema = z
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
    phone: z.string().optional(),
    university: z.string().min(2, {
      message: "Selecione sua universidade.",
    }),
    course: z.string().min(2, {
      message: "Digite seu curso.",
    }),
    semester: z.string().min(1, {
      message: "Selecione seu semestre.",
    }),
    terms: z.boolean().refine((val) => val === true, {
      message: "Você deve aceitar os termos de uso.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  })

type StudentFormValues = z.infer<typeof studentFormSchema>

// Lista de universidades para o select
const universities = [
  { value: "universidade_federal", label: "Universidade Federal" },
  { value: "universidade_estadual", label: "Universidade Estadual" },
  { value: "universidade_particular", label: "Universidade Particular" },
  { value: "outra", label: "Outra" },
]

// Lista de semestres para o select
const semesters = [
  { value: "1", label: "1º Semestre" },
  { value: "2", label: "2º Semestre" },
  { value: "3", label: "3º Semestre" },
  { value: "4", label: "4º Semestre" },
  { value: "5", label: "5º Semestre" },
  { value: "6", label: "6º Semestre" },
  { value: "7", label: "7º Semestre" },
  { value: "8", label: "8º Semestre" },
  { value: "9", label: "9º Semestre" },
  { value: "10", label: "10º Semestre" },
  { value: "outro", label: "Outro" },
]

export default function StudentRegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Valores padrão para o formulário
  const defaultValues: Partial<StudentFormValues> = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    university: "",
    course: "",
    semester: "",
    terms: false,
  }

  // Inicializar o formulário com react-hook-form e zod
  const form = useForm<StudentFormValues>({
    resolver: zodResolver(studentFormSchema),
    defaultValues,
  })

  // Função para lidar com o envio do formulário
  async function onSubmit(data: StudentFormValues) {
    try {
      setIsSubmitting(true)

      // Aqui você faria a chamada para a API para registrar o estudante
      console.log("Dados do formulário:", data)

      // Simular um atraso de rede
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mostrar toast de sucesso


      // Redirecionar para o dashboard após o cadastro
      setTimeout(() => {
        router.push("/dashboard/student")
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
                <CardTitle className="text-2xl">Cadastro de Estudante</CardTitle>
                <CardDescription>Crie sua conta para acessar oportunidades em universidades</CardDescription>
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
                        <FormLabel>Nome completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Digite seu nome completo" {...field} />
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
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input placeholder="seu.email@exemplo.com" type="email" {...field} />
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

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone (opcional)</FormLabel>
                      <FormControl>
                        <Input placeholder="(00) 00000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="university"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Universidade</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione sua universidade" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {universities.map((university) => (
                              <SelectItem key={university.value} value={university.value}>
                                {university.label}
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
                    name="course"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Curso</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: Ciência da Computação" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="semester"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Semestre atual</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione seu semestre" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {semesters.map((semester) => (
                            <SelectItem key={semester.value} value={semester.value}>
                              {semester.label}
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

