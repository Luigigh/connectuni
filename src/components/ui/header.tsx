
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Users, Building2, GraduationCap } from "lucide-react"


export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-2">
        <div className="flex h-16 items-center justify-between  w-full">
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
    )
}

