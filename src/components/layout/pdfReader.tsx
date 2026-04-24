import React from "react";
import { Button } from "@/components/ui/button"; 
import { Card, CardContent } from "@/components/ui/card";
import { Download, BookOpen, ExternalLink } from "lucide-react"; 
import { motion } from "framer-motion";

// Configuración de animación básica para Framer Motion
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// 1. Leemos todos los PDFs de la carpeta especificada
const pdfModules = import.meta.glob("@/assets/library/*.pdf", { eager: true });

// 2. Transformamos el objeto en un array limpio y formateamos el título
const pdfList = Object.keys(pdfModules).map((path) => {
    const fileName = path.split("/").pop() || "Documento.pdf";
    
    // Limpiamos el nombre para el título: quitamos el ".pdf" y reemplazamos guiones por espacios
    const cleanTitle = fileName
      .replace(/\.pdf$/i, "")
      .replace(/[-_]/g, " ");

    return {
        name: fileName,
        title: cleanTitle,
        // @ts-ignore
        url: pdfModules[path].default || pdfModules[path], 
    };
});

export const PdfSection = () => {
    return (
        <section className="bg-muted/50 py-16">
            <div className="container mx-auto px-4">
                
                <h2 className="mb-8 text-center font-heading text-3xl font-bold text-primary">
                    Biblioteca Técnica
                </h2>
                
                {/* Fallback si no hay PDFs */}
                {pdfList.length === 0 && (
                    <p className="text-center text-muted-foreground">
                        No hay documentos disponibles en la biblioteca en este momento.
                    </p>
                )}

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {pdfList.map((pdf, index) => (
                        <motion.div 
                            key={index} 
                            initial="hidden" 
                            whileInView="visible" 
                            viewport={{ once: true }} 
                            variants={fadeInUp}
                        >
                            <Card className="h-full hover:shadow-md transition-shadow">
                                <CardContent className="p-6 flex items-start gap-4 flex-col sm:flex-row">
                                    
                                    {/* Icono decorativo */}
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-aapg-gold/10">
                                        <BookOpen className="h-6 w-6 text-aapg-gold" />
                                    </div>
                                    
                                    {/* Contenido de la tarjeta */}
                                    <div className="flex-1 w-full">
                                        <h3 className="font-heading font-bold text-sm capitalize line-clamp-2">
                                            {pdf.title}
                                        </h3>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            Documento PDF
                                        </p>
                                        
                                        {/* Botones de acción */}
                                        <div className="flex gap-2 mt-4">
                                            {/* Abrir en nueva pestaña */}
                                            <a 
                                                href={pdf.url} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="flex-1"
                                            >
                                                <Button variant="outline" size="sm" className="w-full text-xs font-heading font-semibold gap-1.5">
                                                    <ExternalLink className="h-3 w-3" /> Abrir
                                                </Button>
                                            </a>
                                            
                                            {/* Descargar directamente */}
                                            <a 
                                                href={pdf.url} 
                                                download={pdf.name} 
                                                className="flex-1"
                                            >
                                                <Button variant="default" size="sm" className="w-full text-xs font-heading font-semibold gap-1.5">
                                                    <Download className="h-3 w-3" /> Descargar
                                                </Button>
                                            </a>
                                        </div>
                                    </div>

                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};