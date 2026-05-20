import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Users, Award, ArrowRight, Clock, MapPin, BookOpen, Handshake, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import topologicoCordoba from "@/assets/topoCordoba.webp"
import type { WorldNewsItem } from "./Noticias";
const API_KEY = import.meta.env.VITE_API_KEY
import { events } from "@/hooks/hardcodes";
import { formatEventDate } from "@/utils/dateParser";
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const lastEvent = events[0]

// Animated counter hook
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

// Countdown component
function Countdown() {
  const eventDate = new Date(lastEvent.date.from);

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(eventDate));

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft(eventDate)), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-3 sm:gap-4">
      {[
        { value: timeLeft.days, label: "Días" },
        { value: timeLeft.hours, label: "Horas" },
        { value: timeLeft.mins, label: "Min" },
        { value: timeLeft.secs, label: "Seg" },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary-foreground/10 font-heading text-2xl font-bold text-primary-foreground sm:h-16 sm:w-16 sm:text-3xl">
            {String(item.value).padStart(2, "0")}
          </div>
          <span className="mt-1 text-xs text-primary-foreground/60">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    mins: Math.floor((diff % 3600000) / 60000),
    secs: Math.floor((diff % 60000) / 1000),
  };
}

const Index = () => {

  const [recientes, setRecientes] = useState<WorldNewsItem[]>([]);
  console.log(recientes)
  useEffect(() => {
    const recentNews = async () => {
      try {

        const res = await fetch(`${API_KEY}/api/noticias/recientes`)
        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status}`);
        }
        const data = await res.json()
        setRecientes(data)
      } catch (error) {
        console.error("Error trayendo noticias:", error);
      }
    }
    recentNews()
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative flex min-h-[90vh] items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${topologicoCordoba})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Opcional, le da un pequeño efecto parallax
        }}
      >
        {/* Overlay para oscurecer la imagen y asegurar legibilidad */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Gradiente inferior para transición suave */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />

        <div className="container relative z-10 mx-auto px-4 py-32 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block rounded-full bg-[#06183a]/50 px-4 py-2 font-heading text-sm font-semibold uppercase tracking-widest text-aapg-gold">
                American Association of Petroleum Geologists
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mx-auto max-w-4xl font-heading text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Student Chapter{" "}
              <span className="text-gradient-gold">UNC</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-2xl font-semibold text-lg leading-relaxed text-white/90 sm:text-xl"
            >
              Conectamos estudiantes de geociencias con la industria energética.
              Formación técnica, investigación y desarrollo profesional en la
              Universidad Nacional de Córdoba.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSeRN5ZuRpVLJdCqdWuBBJZWEheK0oXrWey5XBHRamgFpPEtoA/viewform">
                <Button size="lg" className="bg-aapg-gold text-[#06183a] font-heading font-bold hover:bg-aapg-gold-light gap-2 px-8">
                  <Users className="h-5 w-5" />
                  Sumate al Chapter
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-white/30 text-white bg-[#06183a]/50 font-heading font-semibold gap-2" asChild>
                <Link to="/eventos">
                  <Calendar className="h-5 w-5" />
                  Próximos eventos
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white/80 border-white/30 hover:text-white bg-[#06183a]/50 font-heading font-semibold gap-2" asChild>
                <Link to="/contacto">
                  <Mic className="h-5 w-5" />
                  Proponer una charla
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Event */}
      {/* <section className="relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border-none  shadow-2xl">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-b from-[#0c2e63] to-[#06183a] p-8 md:p-10">
                  <span className="inline-block rounded bg-aapg-gold/20 px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-aapg-gold">
                    Próximo evento
                  </span>
                  <h3 className="mt-4 font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
                    {lastEvent.title}
                  </h3>
                  <div className="mt-4 space-y-2 text-sm text-primary-foreground/70">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-aapg-gold" />
                      <span>{formatEventDate(lastEvent.date.from, lastEvent.date.to)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-aapg-gold" />
                      <span>{lastEvent.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-aapg-gold" />
                      <span>Disertante: {lastEvent.lecturer}</span>
                    </div>
                  </div>
                  <div className="relative group">
                    <Button className="mt-6 bg-aapg-gold text-primary font-heading font-bold hover:bg-aapg-gold-light gap-2">
                      Inscribirse <ArrowRight className="h-4 w-4" />
                    </Button>
                    <div className="absolute bottom-full left-[90px] -translate-x-1/2 mb-3 w-56 rounded-2xl bg-white p-4 shadow-xl opacity-0 invisible transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:-translate-y-2 z-50 flex flex-col items-center border border-gray-100 after:content-[''] after:absolute after:w-full after:h-8 after:-bottom-8 after:left-0">
                      <p className="font-bold">Asistir puntualmente - Sin inscripción</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center  bg-gradient-to-b from-[#0c2e63] to-[#06183a] p-8 md:p-10">
                  <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Comienza en
                  </p>
                  <Countdown />
                  <p className="mt-6 text-center text-sm text-muted-foreground">
                    No te pierdas esta oportunidad de aprender sobre las últimas tecnologías en interpretación sísmica.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section> */}

      {/* Latest News */}
      <section className="relative z-50 bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
              Últimas Noticias
            </h2>
            <p className="mt-3 text-muted-foreground">
              Enterate de las novedades del Chapter
            </p>
          </div>

          {/* Condicionamos el renderizado a que haya noticias */}
          {recientes.length > 0 ? (
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <div className="grid gap-6 md:grid-cols-3">
                {recientes.map((item, i) => (
                  <motion.div key={i} variants={fadeInUp}>
                    <Card className="group h-full cursor-pointer transition-shadow hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="rounded-full bg-aapg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-aapg-gold">
                            {item.source}
                          </span>
                          <span className="text-xs text-muted-foreground">{item.published_at}</span>
                        </div>
                        <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-aapg-blue transition-colors">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {item.content}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInUp} className="mt-8 text-center">
                <Button variant="outline" className="font-heading font-semibold gap-2" asChild>
                  <Link to="/noticias">
                    Ver todas las noticias
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          ) : (
            // Opcional: Mostrar un estado de carga mientras llegan las noticias
            <div className="flex justify-center mt-8">
              <span className="text-muted-foreground">Cargando noticias...</span>
            </div>
          )}
        </div>
      </section>
      {/* Value Proposition */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className="mb-10 text-center">
              <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                ¿Por qué ser parte del Chapter?
              </h2>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: BookOpen,
                  title: "Formación técnica",
                  desc: "Accedé a charlas, workshops y recursos exclusivos sobre geociencias y energía.",
                },
                {
                  icon: Handshake,
                  title: "Vinculación industrial",
                  desc: "Conectá directamente con empresas líderes del sector energético y accedé a oportunidades laborales.",
                },
                {
                  icon: Award,
                  title: "Competencias internacionales",
                  desc: "Participá en el Imperial Barrel Award y otras competencias de nivel mundial representando a la UNC.",
                },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="h-full border-none bg-white text-center p-8">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-aapg-gold/10">
                      <item.icon className="h-7 w-7 text-aapg-gold" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;