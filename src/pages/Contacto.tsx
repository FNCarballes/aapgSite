import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Mail, MapPin, Handshake, Mic, Phone, Instagram, Youtube, Facebook, Linkedin, Send } from "lucide-react";
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

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl text-center font-bold text-primary">Completá el formulario o envianos un mail y nos pondremos en contacto</h2>
          <div className="grid gap-8 lg:grid-cols-2 mt-10">
            {/* Form */}
            <div className="container mx-auto px-4">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mx-auto max-w-2xl">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <Input
                        required
                        id="fullName"
                        name="fullName"
                        placeholder="Nombre completo"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                      <Input
                        id="institution"
                        name="institution"
                        placeholder="Empresa / Institución (Opcional)"
                        value={formData.institution}
                        onChange={handleChange}
                      />
                      <Input
                        required
                        id="mail"
                        name="mail"
                        type="email"
                        placeholder="Email de contacto"
                        value={formData.mail}
                        onChange={handleChange}
                      />
                      <Input
                        required
                        id="affair"
                        name="affair"
                        placeholder="Tema propuesto"
                        maxLength={MAX_AFFAIR}
                        value={formData.affair}
                        onChange={handleChange}
                      />

                      <div className="space-y-1">
                        <Textarea
                          required
                          placeholder="Descripción breve de la charla o workshop"
                          id="message"
                          name="message"
                          maxLength={MAX_MENSAJE}
                          value={formData.message}
                          onChange={handleChange}
                        />
                        {/* 4. Contador de caracteres dinámico */}
                        <p
                          className={`text-right text-xs font-medium ${formData.message.length >= MAX_MENSAJE ? 'text-red-500' : 'text-muted-foreground'
                            }`}
                        >
                          {formData.message.length} / {MAX_MENSAJE} caracteres
                        </p>
                      </div>

                      {/* 5. Botón deshabilitado si falta algún campo */}
                      <Button
                        disabled={!isFormValid}
                        className="w-full bg-aapg-gold text-primary font-heading font-bold hover:bg-aapg-gold-light disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Enviar propuesta
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-heading text-xl font-bold text-primary">Información de contacto</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="h-5 w-5 text-aapg-gold shrink-0" />
                      <span>uncaapgstudentchapter@gmail.com</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <MapPin className="h-5 w-5 text-aapg-gold shrink-0 mt-0.5" />
                      <span>Facultad de Ciencias Exactas, Físicas y Naturales, Av. Vélez Sarsfield 1611, Córdoba, Argentina</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold text-primary mb-4">Seguinos en redes</h3>
                  <div className="flex gap-3">
                    {[
                      { icon: Instagram, label: "Instagram", link: "https://www.instagram.com/aapg_student_chapter_unc?igsh=Y213b290NjJycWps" },
                      { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/student-chapter-aapg-unc-95578a395/" },
                      { icon: Youtube, link: "https://youtube.com/@studentchapteraapgunc?si=iAUEkUJxkrf1OTJc" },
                    ].map(({ icon: Icon, label, link }) => (
                      <a
                        key={label}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={link}
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-muted-foreground transition-colors hover:bg-aapg-gold hover:text-primary-foreground"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    ))}
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

export default Contacto;