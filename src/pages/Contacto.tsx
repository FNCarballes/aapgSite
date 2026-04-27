import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Mail, MapPin, Handshake, Mic, Phone, Instagram, Youtube, Facebook, Linkedin, Send, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contacto = () => {
  // 1. Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    fullName: "",
    institution: "",
    mail: "",
    affair: "",
    message: "",
  });

  const MAX_MENSAJE = 1000;
  const MAX_AFFAIR = 100;

  // 2. Función para actualizar el estado al escribir
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. Validación para habilitar o deshabilitar el botón
  // Verifica que los campos obligatorios no estén vacíos (ignorando espacios en blanco)
  const isFormValid =
    formData.fullName.trim() !== "" &&
    formData.mail.trim() !== "" &&
    formData.affair.trim() !== "" &&
    formData.message.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Generamos la fecha y hora actual con formato legible
    const currentTime = new Date().toLocaleString("es-AR", {
      dateStyle: "short",
      timeStyle: "short"
    });

    // Armamos el paquete de datos EXACTAMENTE como lo pide tu plantilla de EmailJS
    const templateParams = {
      fullName: formData.fullName,
      mail: formData.mail,
      institution: formData.institution,
      affair: formData.affair,
      message: formData.message,
      time: currentTime,
    };

    // Enviamos los datos a EmailJS
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then((response) => {
      console.log('¡Éxito!', response.status, response.text);
      // Aquí puedes vaciar el formulario o mostrar una alerta de éxito
      setFormData({ fullName: "", institution: "", mail: "", affair: "", message: "" });
    })
      .catch((err) => {
        console.error('Error al enviar:', err);
      });
  };

  return (
    <Layout>
      <section className="bg-aapg-gradient mt-20 pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl font-black text-primary-foreground sm:text-5xl">
            Contacto
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-lg text-primary-foreground/70">
            Propone una charla, workshop, sugerencía o simplemente comentanos tu duda. ¡Queremos escucharte!
          </motion.p>
        </div>
      </section>

      {/* Profile */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card>
            <CardContent className="p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <Handshake className="h-8 w-8 text-aapg-gold shrink-0 mt-1" />
                <div>
                  <h2 className="font-heading text-2xl font-bold text-primary">Vinculación Institucional</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    El Student Chapter AAPG UNC reúne a estudiantes de geociencias con sólida formación técnica. Ofrecemos a las empresas un canal directo de vinculación con futuros profesionales altamente capacitados, a través de charlas, workshops, pasantías y proyectos conjuntos.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

<section className="pb-16 bg-background">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid gap-8 lg:grid-cols-2 items-stretch mt-10">
      
      {/* COLUMNA IZQUIERDA: Contacto y Redes */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeInUp} 
        className="flex flex-col space-y-6"
      >
        <h2 className="font-heading text-3xl font-bold text-primary">Contacto</h2>
        
        {/* Card Info de Contacto */}
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6 space-y-4">
            <h3 className="font-heading text-xl font-bold text-primary">Información de contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 text-aapg-gold shrink-0" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=uncaapgstudentchapter@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium hover:text-[#0c2e63] hover:underline transition-colors break-all"
                >
                  uncaapgstudentchapter@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-aapg-gold shrink-0 mt-0.5" />
                <span className="text-base leading-relaxed text-muted-foreground">
                  Facultad de Ciencias Exactas, Físicas y Naturales, Av. Vélez Sarsfield 1611, Córdoba, Argentina
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card Redes Sociales */}
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h3 className="font-heading text-xl font-bold text-primary mb-4">Seguinos en redes</h3>
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: "Instagram", link: "https://www.instagram.com/aapg_student_chapter_unc?igsh=Y213b290NjJycWps" },
                { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/student-chapter-aapg-unc-95578a395/" },
                { icon: Youtube, label: "YouTube", link: "https://youtube.com/@studentchapteraapgunc?si=iAUEkUJxkrf1OTJc" },
              ].map(({ icon: Icon, label, link }) => (
                <a
                  key={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link}
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-muted-foreground shadow-sm transition-all hover:bg-aapg-gold hover:text-primary-foreground hover:-translate-y-1"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* COLUMNA DERECHA: Formulario de Inscripción */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeInUp} 
        className="flex flex-col h-full"
      >
        <h2 className="font-heading text-3xl font-bold text-primary mb-6 lg:invisible hidden lg:block">
          Inscripción
        </h2>
        
        {/* Card Call to Action */}
        <Card className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-primary/5 border-primary/10 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="flex flex-col items-center justify-center p-0 space-y-6">
            <div className="bg-aapg-gold/20 p-4 rounded-full">
              <Users className="h-10 w-10 text-aapg-gold" />
            </div>
            
            <div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                ¡Sumate al Chapter!
              </h3>
              <p className="text-muted-foreground max-w-[280px] mx-auto">
                Completá el formulario de inscripción y empezá a formar parte de nuestra comunidad.
              </p>
            </div>

            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeRN5ZuRpVLJdCqdWuBBJZWEheK0oXrWey5XBHRamgFpPEtoA/viewform"
              className="w-full sm:w-auto pt-4"
            >
              <Button size="lg" className="w-full sm:w-auto bg-aapg-gold text-[#06183a] font-heading font-bold text-lg px-8 py-6 rounded-xl hover:bg-aapg-gold/90 hover:-translate-y-1 transition-all shadow-lg gap-2">
                <Users className="h-5 w-5" />
                Completar Formulario
              </Button>
            </a>
          </CardContent>
        </Card>
      </motion.div>

    </div>
  </div>
</section>
    </Layout>
  );
};

export default Contacto;