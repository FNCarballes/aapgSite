import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";
import LogoAAPG from "@/assets/logoAAPG.png";
import devPhoto from "@/assets/devPhoto.png"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0c2e63] to-[#06183a]">
      <div className="container mx-auto px-4 py-12">
        {/* Usamos items-start en el grid por si las columnas tienen distinto alto de texto */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 items-start justify-center">

          {/* About */}
          <div className="flex flex-col items-center text-center">
            <Link to="/" className="flex flex-col gap-2 items-center z-50 mb-4">
              <img
                src={LogoAAPG}
                alt="AAPG Student Chapter Logo"
                className="h-6 w-auto lg:h-9 object-contain"
              />
              <h1 className="text-white text-xl font-serif">Universidad Nacional de Córdoba</h1>
            </Link>
            <p className="text-sm leading-relaxed text-primary-foreground/70 max-w-sm">
              Formando futuros profesionales en geociencias con vinculación directa a la industria energética.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center text-center">
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-aapg-gold">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm flex flex-col items-center">
              <li className="flex items-center justify-center gap-2 text-primary-foreground/70">
                <Mail className="h-4 w-4 shrink-0 text-aapg-gold" />
                <span>uncaapgstudentchapter@gmail.com</span>
              </li>
              <li className="flex items-start justify-center  text-primary-foreground/70 max-w-2xs text-center">
                <MapPin className="h-5 w-5 shrink-0 text-aapg-gold" />
                <span>Facultad de Ciencias Exactas, Físicas y Naturales UNC, Córdoba, Argentina</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center text-center">
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-aapg-gold">
              Seguinos
            </h4>
            <div className="flex justify-center gap-3">
              {[
                { icon: Instagram, href: "https://www.instagram.com/aapg_student_chapter_unc?igsh=Y213b290NjJycWps" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/student-chapter-aapg-unc-95578a395/" },
                { icon: Youtube, href: "https://youtube.com/@studentchapteraapgunc?si=iAUEkUJxkrf1OTJc" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/70 transition-colors hover:bg-aapg-gold hover:text-primary-foreground"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-10 pt-6 pr-20 border-t border-primary-foreground/10 justify-end items-center w-full gap-40">
          <div className="text-center text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} AAPG Student Chapter — Universidad Nacional de Córdoba.
          </div>

          {/* CONTENEDOR GROUP PARA EL TOOLTIP */}
          <div className="relative group">
            <a
              className="flex h-10 gap-3 px-6 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/70 transition-colors hover:bg-aapg-gold hover:text-primary-foreground"
            >
              Contactar desarrollador <ArrowRight className="w-5 h-5" />
            </a>

            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 rounded-2xl bg-white p-4 shadow-xl opacity-0 invisible transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:-translate-y-2 z-50 flex flex-col items-center border border-gray-100 after:content-[''] after:absolute after:w-full after:h-8 after:-bottom-8 after:left-0">

              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-[8px] border-transparent border-t-white"></div>

              <div className="h-[120px] w-[120px] rounded-full overflow-hidden border-2 border-aapg-gold mb-3 shadow-sm bg-gray-100 shrink-0">
                <img
                  src={devPhoto}
                  alt="Desarrollador"
                  className="w-full h-full object-cover"
                />
              </div>

              <h5 className="font-heading text-lg font-bold text-[#0c2e63] leading-tight text-center">
                Franco Nicolás Carballes
              </h5>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=franco.ncarballes@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-md text-gray-500 mt-1 font-medium text-center hover:text-[#0c2e63] hover:underline transition-colors relative z-10 cursor-pointer"
              >
                franco.ncarballes@gmail.com
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;