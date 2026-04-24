import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Users, ExternalLink, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const egresados = [
  { name: "Ana Martínez", year: "2023", current: "Geóloga en YPF" },
  { name: "Carlos Ruiz", year: "2022", current: "Geofísico en Schlumberger" },
  { name: "Laura Gómez", year: "2021", current: "Investigadora CONICET" },
  { name: "Diego Torres", year: "2020", current: "Consultor en PAE" },
  { name: "Sofía Vargas", year: "2023", current: "MSc en Stanford University" },
  { name: "Pablo Herrera", year: "2022", current: "Geólogo en Tecpetrol" },
];

const chapters = [
  { name: "SC AAPG UBA", location: "Buenos Aires, Argentina" },
  { name: "SC AAPG UNCuyo", location: "Mendoza, Argentina" },
  { name: "SC AAPG UNPSJB", location: "Comodoro Rivadavia, Argentina" },
  { name: "SC AAPG UNAM", location: "Ciudad de México, México" },
  { name: "SC AAPG USP", location: "São Paulo, Brasil" },
  { name: "SC AAPG UIS", location: "Bucaramanga, Colombia" },
];

const Comunidad = () => {
  return (
    <Layout>
      <section className="bg-aapg-gradient pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl font-black text-primary-foreground sm:text-5xl">
            Comunidad
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-lg text-primary-foreground/70">
            Egresados y Chapters hermanos en la región
          </motion.p>
        </div>
      </section>

      {/* Egresados */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold text-primary">Egresados del Chapter</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {egresados.map((e, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <Card>
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                      <Users className="h-5 w-5 text-muted-foreground/40" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold">{e.name}</h3>
                      <p className="text-sm text-aapg-gold">Egresado {e.year}</p>
                      <p className="text-xs text-muted-foreground">{e.current}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Chapters */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold text-primary">Chapters de la Región</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {chapters.map((ch, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <Card className="group cursor-pointer transition-shadow hover:shadow-md">
                  <CardContent className="flex items-center gap-4 p-5">
                    <Globe className="h-8 w-8 text-aapg-blue shrink-0" />
                    <div>
                      <h3 className="font-heading font-bold group-hover:text-aapg-blue transition-colors">{ch.name}</h3>
                      <p className="text-xs text-muted-foreground">{ch.location}</p>
                    </div>
                    <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground/30" />
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

export default Comunidad;
