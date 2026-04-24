import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import LogoAAPG from "@/assets/logoAAPG.png";

const navItems = [
  { label: "Inicio", path: "/" },
  { label: "El Chapter", path: "/el-chapter" },
  { label: "Biblioteca", path: "/biblioteca" },
  { label: "Eventos", path: "/eventos" },
  { label: "IBA", path: "/iba" },
  { label: "Noticias", path: "/noticias" },
  { label: "Contacto", path: "/contacto" },
  // { label: "Comunidad", path: "/comunidad" },
];

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const isScrolled = useScrolled();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ",
        // Degradado azul oscuro inspirado en la imagen que compartiste
        "bg-gradient-to-b from-[#0c2e63] to-[#06183a]",
        isScrolled ? "shadow-lg" : ""
      )}
    >
      {/* justify-between separa el logo a la izquierda y el menú a la derecha */}
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:h-24">

        {/* Logo (Lado izquierdo) */}
        <Link to="/" className="flex flex-col gap-2 items-center z-50">
          <img
            src={LogoAAPG}
            alt="AAPG Student Chapter Logo"
            className="h-6 w-auto lg:h-9 object-contain"
          />
          <h1 className="text-white text-xl font-serif">Univesidad Nacional de Córdoba</h1>
        </Link>

        {/* Desktop Nav (Lado derecho) */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "rounded-md px-3 py-2 font-heading text-sm font-medium transition-colors",
                location.pathname === item.path
                  ? "bg-primary-foreground/20 text-primary-foreground"
                  : "text-primary-foreground/90 hover:bg-primary-foreground/20 hover:text-primary-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu (Lado derecho en pantallas chicas) */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <Menu className="h-7 w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-aapg-gradient border-aapg-blue w-72">
            <SheetTitle className="text-primary-foreground font-heading">Menú</SheetTitle>
            <nav className="mt-8 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-4 py-3 font-heading text-sm font-medium transition-colors",
                    location.pathname === item.path
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

// Hook para el scroll
function useScrolled() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrolled(window.scrollY > 20);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return scrolled;
}

export default Header;