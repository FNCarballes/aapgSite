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
      <PdfSection />
    </Layout>
  );
};

export default Biblioteca;
