import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react"; // Agregamos un ícono para el botón
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const API_KEY = import.meta.env.VITE_API_KEY
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// 1. Definimos la estructura de lo que nos devuelve el backend
export interface WorldNewsItem {
  id: number;
  link: string;
  published_at: string;
  content: string,
  source: string;
  title: string;
  origin: "Argentina" | "World" | "Mundo"
}

const Noticias = () => {
  // 2. Estados para guardar las noticias de la API y el estado de carga
  const [worldNews, setWorldNews] = useState<WorldNewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 3. useEffect se encarga de llamar a la API cuando el componente se monta
  useEffect(() => {
    const fetchNews = async () => {
      console.log("HaciendoFetch")
      try {
        const response = await fetch(`${API_KEY}/api/noticias`);
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        console.log(data, "responseFetch")
        setWorldNews(data);
      } catch (error) {
        console.error("Error trayendo noticias del mundo:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <Layout>
      <section className="bg-aapg-gradient mt-20 pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl font-black text-primary-foreground sm:text-5xl">
            Noticias
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-lg text-primary-foreground/70">
            De nuestra organización y la industria
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Seteamos la pestaña por defecto */}
          <Tabs defaultValue="De Argentina">
            <TabsList className="mb-8 flex w-full justify-center md:justify-start gap-2 overflow-x-auto bg-transparent">
              <TabsTrigger value="De Argentina" className="font-heading font-semibold text-base">De Argentina</TabsTrigger>
              <TabsTrigger value="Del mundo" className="font-heading font-semibold text-base">Del mundo</TabsTrigger>
            </TabsList>

            {/* --- PESTAÑA 1: DE ARGENTINA (Hardcodeadas) --- */}
            <TabsContent value="De Argentina">
              <div className="grid gap-6 md:grid-cols-2">
                {worldNews.filter((n) => n.origin === "Argentina").map((n) => (
                  <motion.div key={n.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                    <Card className="group h-full transition-shadow hover:shadow-lg flex flex-col">
                      <CardContent className="p-6 flex flex-col flex-grow">

                        {/* Metadatos (Fuente y Fecha) */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="rounded-full bg-aapg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-aapg-gold">
                            {n.source}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {/* Formateamos la fecha para que se lea mejor */}
                            {new Date(n.published_at).toLocaleDateString('es-AR')}
                          </span>
                        </div>

                        <h3 className="font-heading text-lg font-bold group-hover:text-aapg-blue transition-colors">
                          {n.title}
                        </h3>
                        <p className="mt-4 mb-6 text-sm text-muted-foreground leading-relaxed whitespace-pre-line flex-grow">
                          {n.content}
                        </p>

                        {/* Botón hacia la noticia original en una nueva pestaña */}
                        <div className="mt-auto pt-4 border-t border-border">
                          <a
                            href={n.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-aapg-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-aapg-blue/90 focus:outline-none focus:ring-2 focus:ring-aapg-blue focus:ring-offset-2 gap-2"
                          >
                            Ir a la noticia <ExternalLink size={16} />
                          </a>
                        </div>

                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* --- PESTAÑA 2: DEL MUNDO (Desde SQLite + Bot) --- */}
            <TabsContent value="Del mundo">
              {isLoading ? (
                // Pantalla de carga
                <div className="flex justify-center py-12">
                  <span className="text-muted-foreground animate-pulse">Buscando las últimas noticias internacionales...</span>
                </div>
              ) : worldNews.length === 0 ? (
                // Si la DB está vacía
                <div className="text-center py-12 text-muted-foreground">
                  No hay noticias internacionales disponibles en este momento.
                </div>
              ) : (
                // Renderizado de las noticias de la API
                <div className="grid gap-6 md:grid-cols-2">
                  {worldNews.filter(n => n.origin === "World" || n.origin === "Mundo").map((n) => (
                    <motion.div key={n.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                      <Card className="group h-full transition-shadow hover:shadow-lg flex flex-col">
                        <CardContent className="p-6 flex flex-col flex-grow">

                          {/* Metadatos (Fuente y Fecha) */}
                          <div className="flex items-center gap-2 mb-3">
                            <span className="rounded-full bg-aapg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-aapg-gold">
                              {n.source}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {/* Formateamos la fecha para que se lea mejor */}
                              {new Date(n.published_at).toLocaleDateString('es-AR')}
                            </span>
                          </div>

                          <h3 className="font-heading text-lg font-bold group-hover:text-aapg-blue transition-colors">
                            {n.title}
                          </h3>

                          <p className="mt-4 mb-6 text-sm text-muted-foreground leading-relaxed whitespace-pre-line flex-grow">
                            {n.content}
                          </p>

                          {/* Botón hacia la noticia original en una nueva pestaña */}
                          <div className="mt-auto pt-4 border-t border-border">
                            <a
                              href={n.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-aapg-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-aapg-blue/90 focus:outline-none focus:ring-2 focus:ring-aapg-blue focus:ring-offset-2 gap-2"
                            >
                              Ir a la noticia <ExternalLink size={16} />
                            </a>
                          </div>

                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}
            </TabsContent>

          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Noticias;