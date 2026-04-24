import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Users, Target, Eye, BookOpen, Download, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Federico from "@/assets/Federico.jpg";
import Daiana from "@/assets/Daiana.jpeg";
import Ignacio from "@/assets/Ignacio.jpeg";
import Luciana from "@/assets/Luciana.jpeg";
import Sasha from "@/assets/Sasha.jpeg";
import Magdalena from "@/assets/Magdalena.jpg";
import { Award } from "lucide-react";
import JuntaIBA from "@/assets/JuntaIBA.jpeg"
import { Link } from 'react-router-dom';
import Viviana from "@/assets/Viviana.jpeg"
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const comision = [
  { name: "Federico Lionetto", role: "Presidente", image: Federico },
  { name: "Sasha Ávila", role: "Vicepresidente", image: Sasha },
  { name: "Luciana Untacle", role: "Networking", image: Luciana },
  { name: "Daiana", role: "Social media", image: Daiana },
  { name: "Magdalena Bio", role: "Tesorera", image: Magdalena },
  { name: "Ignacio Folmer", role: "Secretario", image: Ignacio },
];
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const benefits = [
  "Acceso a charlas y workshops exclusivos",
  "Participación en competencias internacionales",
  "Red de contactos con la industria",
  "Acceso a biblioteca técnica digital",
  "Certificados de participación",
  "Bolsa de oportunidades laborales",
];


const ElChapter = () => {



  return (
    <Layout>
      <section className="py-16 mt-20">
        <div className="container mx-auto px-4 space-y-20">

          {/* Misión, Visión, Historia */}
          <div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { icon: Target, title: "Misión", text: "Promover la formación técnica y profesional de estudiantes de geociencias mediante actividades académicas, vinculación con la industria y participación en competencias internacionales." },
                { icon: Eye, title: "Visión", text: "Ser el Student Chapter de referencia en Latinoamérica, reconocido por la calidad de sus miembros, la excelencia técnica y el impacto en la comunidad geocientífica." },
                { icon: BookOpen, title: "Historia", text: "Fundado en 2018, el Student Chapter AAPG UNC ha crecido hasta convertirse en uno de los más activos de la región, con más de 85 miembros y decenas de eventos anuales." },
              ].map((item, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-aapg-gold/10">
                        <item.icon className="h-6 w-6 text-aapg-gold" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <section className="py-16 mt-20">
            <div className="container mx-auto px-4">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                <motion.h2 variants={fadeInUp} className="mb-8 text-center font-heading text-3xl font-bold text-primary">
                  Sumate, participá y crecé con nosotros
                </motion.h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {benefits.map((b, i) => (
                    <motion.div key={i} variants={fadeInUp}>
                      <Card className="h-full">
                        <CardContent className="flex items-center gap-3 p-5">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-aapg-gold/10">
                            <Users className="h-4 w-4 text-aapg-gold" />
                          </div>
                          <span className="text-sm font-medium">{b}</span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                <motion.div variants={fadeInUp} className="mt-8 text-center">

                  <Button size="lg" className="bg-aapg-gold text-primary font-heading font-bold hover:bg-aapg-gold-light gap-2" asChild>

                    <Link to="/contacto">
                      <Users className="h-5 w-5" />
                      Inscribite ahora
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* IBA */}
          <section className="py-16 ">
            <div className="container mx-auto px-4 ">
              <Card className="overflow-hidden min-h-[450px]">
                <div className="grid md:grid-cols-2">

                  {/* Columna Izquierda: Texto */}
                  <div className="bg-aapg-gradient p-8 md:p-10 flex flex-col justify-center">
                    <Award className="h-10 w-10 text-aapg-gold mb-4" />
                    <h3 className="font-heading text-2xl font-bold text-primary-foreground">
                      Imperial Barrel Award
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
                      La competencia internacional más prestigiosa en geociencias. Cada año, nuestro Chapter tiene la oportunidad de formar un equipo para competir a nivel regional y global analizando datos reales de exploración petrolera.
                    </p>
                    <div className="mt-6">
                      <Link to="/iba">
                        <Button className="bg-aapg-gold text-primary font-heading font-bold hover:bg-aapg-gold-light">
                          Conocé más
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="relative w-full h-full min-h-[380px]">
                    <img src={JuntaIBA} className=" absolute inset-0 w-full h-full object-cover" />
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Comisión Actual */}
          <div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-10 font-heading text-3xl font-bold text-center text-primary"
            >
              Comisión Actual
            </motion.h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {comision.map((member, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                  <Card className="text-center bg-white">
                    <CardContent className="justify-between p-6 h-80 overflow-hidden">
                      <div className=" mx-auto mb-5 flex h-40 w-40 items-center justify-center rounded-full bg-secondary overflow-hidden">
                        <img
                          src={member.image}
                          alt={`Foto de ${member.name}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h3 className="font-heading text-lg font-bold">{member.name}</h3>
                      <p className="text-sm font-semibold text-aapg-gold">{member.role}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Docente Sponsor */}
          <div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-8 font-heading text-3xl font-bold text-center text-primary"
            >
              Docente Sponsor
            </motion.h2>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Card className="mx-auto max-w-4xl">
                <CardContent className="flex flex-col items-center p-8 text-center md:flex-row md:text-left md:gap-8">
                  <div className="mb-4 flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-secondary md:mb-0">
                    <img src={Viviana} className="object-contain w-full h-full rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold">Viviana Aguirre</h3>
                    <p className="text-sm font-semibold text-aapg-gold">Docente Sponsor</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Profesor titular de Geología de los recursos energéticos FCEFyN-UNC.
                      Con más de 20 años de experiencia en exploración y producción, guía al Chapter en su desarrollo académico e institucional.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default ElChapter;