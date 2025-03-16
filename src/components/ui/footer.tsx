import { GraduationCap, Facebook, Instagram, Twitter, Linkedin  } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full border-t py-6 md:py-0">
        <div className="w-full flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2 px-4">
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

          <div className="flex items-center gap-4 mr-4">
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
    )
}
