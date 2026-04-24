import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Users, Calendar, Award, Lock, BookOpen, ArrowRight, MapPin, Clock, Image, Download, FileText, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PdfSection } from "@/components/layout/pdfReader";
import energiaArgentina from "@/assets/energiaArgentina.png"
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};


const articles = [
  { title: "Análisis de facies en la Fm. Vaca Muerta", author: "María González", date: "Ene 2026", category: "Artículo técnico" },
  { title: "Aplicación de machine learning en perfilaje", author: "Tomás Rodríguez", date: "Dic 2025", category: "Proyecto" },
  { title: "Experiencia IBA 2025: lecciones aprendidas", author: "Equipo IBA UNC", date: "Nov 2025", category: "Experiencia" },
  { title: "Geoquímica orgánica en cuencas argentinas", author: "Lucía Fernández", date: "Oct 2025", category: "Artículo técnico" },
  { title: "Mi pasantía en exploración offshore", author: "Martín Díaz", date: "Sep 2025", category: "Experiencia" },
  { title: "Modelado 3D de reservorios con Petrel", author: "Camila López", date: "Ago 2025", category: "Proyecto" },
];



const Biblioteca = () => {


  return (
    <Layout>

      <section className="bg-aapg-gradient mt-20  pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl font-black text-primary-foreground sm:text-5xl">
            Biblioteca
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-lg text-primary-foreground/70">
            Libros, artículos y proyectos
          </motion.p>
        </div>
      </section>


      <div className="flex justify-center items-center mt-40 w-full">
  <img 
    className="w-full max-w-[1700px] h-auto object-contain" 
    src={energiaArgentina} 
    alt="Matríz energética Argentina" 
  />
</div>


      {/* Biblioteca */}
      <PdfSection />
      {/* <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold text-primary">Biblioteca Técnica</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Fundamentos de Geología del Petróleo", category: "Geología", pages: "320 págs." },
              { title: "Interpretación Sísmica Avanzada", category: "Geofísica", pages: "215 págs." },
              { title: "Sedimentología y Estratigrafía", category: "Sedimentología", pages: "180 págs." },
              { title: "Geoquímica de Reservorios", category: "Geoquímica", pages: "145 págs." },
              { title: "Vaca Muerta: Análisis Regional", category: "Cuencas", pages: "98 págs." },
              { title: "Métodos de Perfilaje de Pozos", category: "Ingeniería", pages: "260 págs." },
            ].map((doc, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <Card className="h-full">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-aapg-gold/10">
                      <BookOpen className="h-6 w-6 text-aapg-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-sm">{doc.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{doc.category} · {doc.pages}</p>
                      <Button variant="outline" size="sm" className="mt-3 text-xs font-heading font-semibold gap-1.5">
                        <Lock className="h-3 w-3" /> Acceso miembros
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Artículos */}
      {/* <section className="py-16">
        <h2 className="mb-8 text-center font-heading text-3xl font-bold text-primary">
          Artículos
        </h2>
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <Card className="group h-full cursor-pointer transition-shadow hover:shadow-lg">
                  <div className="h-44 bg-secondary flex items-center justify-center">
                    {a.category === "Artículo técnico" ? <BookOpen className="h-10 w-10 text-muted-foreground/30" /> :
                      a.category === "Proyecto" ? <Lightbulb className="h-10 w-10 text-muted-foreground/30" /> :
                        <Users className="h-10 w-10 text-muted-foreground/30" />}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="rounded-full bg-aapg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-aapg-gold">{a.category}</span>
                      <span className="text-xs text-muted-foreground">{a.date}</span>
                    </div>
                    <h3 className="font-heading text-lg font-bold group-hover:text-aapg-blue transition-colors">{a.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Por {a.author}</p>
                    <Button variant="ghost" className="mt-3 p-0 h-auto text-sm font-semibold text-aapg-blue hover:text-aapg-navy gap-1">
                      Leer más <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Certificados */}
      {/* <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <FileText className="mx-auto h-10 w-10 text-aapg-gold mb-4" />
            <h2 className="font-heading text-3xl font-bold text-primary">Certificados de Participación</h2>
            <p className="mt-3 text-muted-foreground">
              Descargá tus certificados de actividades, charlas, workshops y eventos del Student Chapter.
            </p>
            <Card className="mt-8">
              <CardContent className="p-6 space-y-4">
                <div className="grid gap-3">
                  {[
                    { event: "Workshop: Interpretación Sísmica con IA", date: "28 Feb 2026" },
                    { event: "Charla: Geología de Vaca Muerta", date: "15 Mar 2026" },
                    { event: "Salida de Campo: Sierras de Córdoba", date: "22 Mar 2026" },
                  ].map((cert, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                      <div className="text-left">
                        <p className="text-sm font-medium">{cert.event}</p>
                        <p className="text-xs text-muted-foreground">{cert.date}</p>
                      </div>
                      <Button variant="outline" size="sm" className="shrink-0 gap-1.5 font-heading font-semibold text-xs">
                        <Download className="h-3.5 w-3.5" /> Descargar
                      </Button>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">Iniciá sesión para ver tus certificados disponibles.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default Biblioteca;
