import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Calendar, MapPin, BookOpen, Lightbulb, Users, ArrowRight, Clock, PinIcon, Pen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CharlaHugo from "@/assets/CharlaHugo.jpg"
import CharlaDaniel from "@/assets/CharlaDaniel.png"
import JuntaIBA from "@/assets/JuntaIBA.jpeg"
import CharlaVictoriaYPaol from "@/assets/CharlaVictoriaYPaola.png"
import Recaudacion from "@/assets/Recaudacion.jpeg"
import { events } from "@/hooks/hardcodes";
import { formatEventDate } from "@/utils/dateParser";
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};





const eventsPerformed = [{ title: "Hidrocarburos: Introducción a su cadena de valor", lecturer: "Hugo Gustavo Pelliza", description: "Charla sobre el alcance de la industria, cuáles son las distintas actividades, sus partes, el rol que tiene en la economía y en la sociedad, y cómo se genera valor.", image: CharlaHugo },
{ title: "Aplicación de ensayadores de formación y herramientas especiales en la industria de los hidrocarburos", lecturer: "Daniel Martín", description: "", image: CharlaDaniel },
{ title: "Desafíos y oportunidades: Estadísticas y visión a futuro", lecturer: "Victoria Ferreyra - Paola Delgado", description: "", image: CharlaVictoriaYPaol },
{ title: "Reunión equipo UNC Imperial Barrel Award 2026 y representante de Schlumberger", lecturer: "Victoria Ferreyra - Viviana Aguirre", description: "", image: JuntaIBA },
{ title: "Recaudación de fondos", lecturer: "Estudent Chapter 2026", description: "", image: Recaudacion },


]
const Eventos = () => {
  return (
    <Layout>
      <section className="bg-aapg-gradient mt-20 pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl font-black text-primary-foreground sm:text-5xl">
            Eventos
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-lg text-primary-foreground/70">
            Proyectos y experiencias de nuestros miembros
          </motion.p>
        </div>
      </section>

{/* //SECCION PROXIMOS EVENTOS - NO BORRAR */}
      {/* <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold text-primary">
            Próximos Eventos
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {events.map((ev, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <Card className="h-full">
                  {ev.image && <div className="h-40 bg-secondary flex items-center justify-center">
                    <img src={ev.image} className="h-full w-full object-cover" />
                  </div>}
                  <CardContent className="p-6">
                    <h3 className="font-heading text-lg font-bold">{ev.title}</h3>
                    <h4 className="font-heading text-base text-muted-foreground font-medium">{ev.summary}</h4>

                    <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-aapg-gold" />{formatEventDate(ev.date.from, ev.date.to)}</div>
                      <div className="flex items-center gap-2"><Users className="h-3.5 w-3.5 text-aapg-gold" />Disertante: {ev.lecturer}</div>
                      <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-aapg-gold" />{ev.location}</div>
                    </div>
                    <div className="relative group">
                      <Button className="mt-4 w-full bg-primary font-heading font-semibold gap-2">
                        Inscribirse <ArrowRight className="h-4 w-4" />
                      </Button>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 rounded-2xl bg-white p-4 shadow-xl opacity-0 invisible transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:-translate-y-2 z-50 flex flex-col items-center border border-gray-100 after:content-[''] after:absolute after:w-full after:h-8 after:-bottom-8 after:left-0">
                        <p className="font-bold">Asistir puntualmente - Sin inscripción</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}



      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold text-primary">Eventos del año</h2>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {eventsPerformed.map((caption, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <Card className="group overflow-hidden cursor-pointer">
                  <div className="aspect-square w-full bg-secondary flex items-center justify-center">
                    <img src={caption.image} className="w-full h-full object-cover text-muted-foreground/20 group-hover:text-aapg-blue/40 transition-colors" />
                  </div>
                  <CardContent className="p-3 ">
                    <h1 className="text-md font-semibold text-muted-foreground ">{caption.title}</h1>
                    <h2 className="text-s font-medium text-muted-foreground line-clamp-2">Por: {caption.lecturer}</h2>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Eventos;
