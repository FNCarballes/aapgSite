import React, { useMemo } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Handshake, Award, ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ConPetrel from "@/assets/ConPetrel.jpeg"
import petrel2 from "@/assets/conPetrel4.png"
import prentacionIBA2 from "@/assets/PresentacionIBA2.jpeg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const experences = [
  { name: "Santiago Asinari", review: "En 2019 participé en la competencia internacional Imperial Barrel Award (AAPG), una experiencia tan exigente como formativa que marcó un punto de inflexión en mi desarrollo profesional. Durante el proceso, enfrenté el desafío de integrar conocimientos complejos para el análisis de cuencas, adquirir habilidades en el uso de software especializados de la industria y fortalecer mi manejo del idioma inglés. Más allá de lo técnico, la experiencia implicó un intenso compromiso de tiempo y dedicación, con numerosas reuniones, horas de estudio y trabajo colaborativo constante. Sin embargo, esto me llevó a formar un valioso grupo humano y generar contactos con profesionales de la industria petrolera. Estos vínculos me permitieron acceder a información y recursos claves que contribuyeron al desarrollo de mi Trabajo Final. En retrospectiva, el esfuerzo invertido encontró su recompensa en el crecimiento profesional y personal alcanzado." },
  { name: "Magalí Parolin", review: "La competencia IBA de la AAPG fue una experiencia sumamente enriquecedora que nos dejó múltiples enseñanzas. Desde el punto de vista académico, nos permitió aplicar de manera integrada los conocimientos adquiridos a lo largo de la carrera, así como incorporar nuevos enfoques y técnicas orientadas a la exploración de hidrocarburos, guiados por profesionales de la industria con una amplia trayectoria. Al mismo tiempo, representó una instancia muy cercana a la realidad laboral, funcionando como un simulacro de lo que implica trabajar en la industria: cumplir con plazos exigentes, atravesar instancias de corrección, coordinar el trabajo en equipo y desarrollar habilidades de comunicación a través de exposiciones y presentaciones técnicas. Este fue el primer año, luego de varios, en el que la carrera de Geología de la UNC vuelve a estar representada en la competencia IBA. Por eso, invitamos a quienes estén interesados en serlo parte de esta gran experiencia a acercarse a la organización y sumarse para el próximo año. Contar con más participación nos permitirá seguir creciendo como facultad, fortaleciendo nuestras herramientas y conocimientos, y logrando una mejor representación de la UNC en futuras ediciones." },
  { name: "Luciana Untacle", review: "Como estudiante, participar en los IBA de la AAPG me parece una experiencia súper enriquecedora. Me da la oportunidad de aplicar realmente lo que aprendo en la facultad a un caso concreto, integrando distintos conceptos y pensando como un profesional, no solo desde lo teórico. Además, el trabajo en equipo es clave: aprendo a discutir ideas, defender interpretaciones y organizarme con otros, algo fundamental para el futuro laboral. También valoro mucho el contacto con el ámbito profesional, porque te acerca a cómo funciona la industria y te permite generar vínculos que pueden servir más adelante. Si bien es exigente y requiere tiempo, siento que el aprendizaje que te deja, tanto técnico como personal, es mucho más profundo que el de una materia. Es una experiencia que realmente suma y marca la diferencia en la formación." },
  { name: "Pio Rossi", review: "Los IBA son una gran experiencia de aprendizaje tanto en conocimientos técnicos como no academicos, la oportunidad de tener la experiencia laboral es muy desafiante pero un paso necesario que conecta a la facultad con la vida laboral y te da el primer contacto con la industria en un ambiente seguro donde es correcto equivocarte para poder aprender de tus errores. Al margen de todos los conocimientos académicos adquiridos es importante el desarrollo de habilidades blandas al comunicarte y trabajar dentro un equipo lo que permite enriquecerte como persona y poder practicar el trabajo en equipo" },
  { name: "Federico Lionetto", review: "Participar en el Imperial Barrel Award (IBA) de la AAPG es un desafío que recomiendo a cualquier estudiante que busque acortar la brecha entre el aula y la industria del Oil & Gas. Más que una competencia académica, es una simulación real del ritmo y la exigencia de la industria. Esta experiencia me permitió no solo aplicar los conceptos geológicos de la carrera, sino investigar y dominar herramientas que van mucho más allá del plan de estudios. Además, fue el mejor campo de entrenamiento para desarrollar habilidades blandas críticas: trabajo en equipo, liderazgo bajo presión, gestión del tiempo y toma de decisiones ágiles. En lo personal, el IBA me sirvió como un diagnóstico invaluable para saber qué áreas debo seguir desarrollando. Me dejó una enseñanza fundamental: el título universitario es solo el punto de partida. Para destacar de verdad, hace falta salir de la zona de confort y buscar activamente estos desafíos que la facultad, por sí sola, no te puede brindar." },
  { name: "Paloma Pérez Valdenegro", review: "Cuando me sumé al IBA no sabía bien en qué me estaba metiendo. Me tocó liderar un equipo de cinco estudiantes y, en menos de tres meses, tuvimos que hacer algo que normalmente llevaría mucho más tiempo: analizar una cuenca que no conocíamos, con datos sísmicos 3D, registros de pozo incompletos y múltiples capas de información, estructura, geoquímica, madurez orgánica para terminar recomendando dónde perforar y por qué. Lo más desafiante no fue la parte técnica en sí, sino aprender a trabajar con la incertidumbre. Los datos nunca son perfectos, siempre hay gaps, y aun así tenés que tomar decisiones y defenderlas. Eso me cambió la forma de pensar. Aprendí a ir de lo general a lo particular, a integrar información que viene de lugares muy distintos, y a construir un argumento sólido con lo que tenés, no con lo que te gustaría tener. La presentación final fue en inglés ante un jurado internacional, lo que agregó otra capa: no alcanzaba con tener la interpretación correcta, había que comunicarla con claridad y con lógica de negocio. Fue la primera vez que sentí de verdad lo que significa traducir un análisis técnico complejo en algo que otra persona pueda usar para decidir. Me llevo de esa experiencia mucho más que conocimiento geológico. Me llevo una forma de trabajar con datos complejos, de organizarme bajo presión y de comunicar con propósito. Cosas que, sin haberlo planeado así, se convirtieron en el centro de lo que hago hoy." }];

const IBA = () => {
  const randomizedExperiences = useMemo(() => {
    return experences
      .filter(exp => exp.name.trim() !== "")
      .sort(() => Math.random() - 0.5);
  }, []);

  return (
    <Layout>
      {/* SECCIÓN HERO */}
      <section className="bg-aapg-gradient mt-20 pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl font-black text-primary-foreground sm:text-5xl">
            IBA
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-lg text-primary-foreground/70">
            Experiencia en competencia
          </motion.p>
        </div>
      </section>

      {/* SECCIÓN INFORMACIÓN GENERAL */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card>
            <CardContent className="p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <Handshake className="h-8 w-8 text-aapg-gold shrink-0 mt-1" />
                <div>
                  <h2 className="font-heading text-2xl font-bold text-primary">Imperial Barrel Award</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    El Programa de Premios Imperial Barrel (IBA) de la AAPG es un programa anual de evaluación de cuencas subterráneas dirigido a estudiantes de geociencias de universidades de todo el mundo. Equipos universitarios compiten para obtener becas para sus departamentos de geociencias y el reconocimiento internacional que conlleva participar o ganar la competencia. El programa es riguroso y contribuye a la misión de la AAPG de promover la formación en geociencias petroleras e impulsar las carreras de los estudiantes de geociencias.
                    En este programa educativo global, equipos universitarios analizan un conjunto de datos (geología, geofísica, terreno, infraestructura de producción y otros materiales relevantes) durante las diez semanas previas a la competencia de su respectiva región. Hay tres disciplinas para elegir: petróleo, energía geotérmica y captura y almacenamiento de carbono. Cada equipo presenta sus resultados en una presentación de 25 minutos ante un panel de expertos de la industria. Los estudiantes tienen la oportunidad de utilizar tecnología de vanguardia en un conjunto de datos real, recibir retroalimentación de un panel de jueces de la industria y ganar premios en efectivo para su universidad. Se valora la calidad técnica, la claridad y la originalidad de la presentación.
                    El IBA ofrece a los estudiantes la oportunidad de experimentar de forma práctica el proceso creativo y la ciencia de alta tecnología que constituyen la base de la industria energética actual.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SECCIÓN PETREL */}
      <section className="py-16">
        <div className="container">
          <Card className="overflow-hidden min-h-[450px]">
            <div className="grid md:grid-cols-2">

              <div className="relative w-full h-full min-h-[380px] bg-[#0c2e63]">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                  }}
                  allowTouchMove={false}
                  simulateTouch={false}
                  className="absolute inset-0 w-full h-full"
                >
                  <SwiperSlide>
                    <img
                      src={ConPetrel}
                      alt="Uso de Petrel vista 1"
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={petrel2}
                      alt="Uso de Petrel vista 2"
                      className="w-full h-full object-cover "
                    />
                  </SwiperSlide>
                            <SwiperSlide>
                    <img
                      src={prentacionIBA2}
                      alt="Uso de Petrel vista 2"
                      className="w-full h-full object-cover "
                    />
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* Columna Derecha: Texto */}
              <div className="bg-aapg-gradient p-8 md:p-10 flex flex-col justify-center relative z-10">
                <Award className="h-10 w-10 text-aapg-gold mb-4" />
                <h3 className="font-heading text-2xl font-bold text-primary-foreground">
                  Experiencia
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
                  Tener acceso y dominio de un software líder en la industria como Petrel de Schlumberger durante la etapa de formación universitaria representa una ventaja competitiva invaluable para cualquier estudiante de geología. Principalmente, esta herramienta permite materializar los conceptos teóricos aprendidos en las aulas mediante la visualización e interpretación tridimensional de datos del subsuelo, transformando abstracciones geológicas complejas en modelos tangibles e interactivos. Al trabajar con mallas de datos sísmicos, registros de pozos, horizontes y mapeo estructural en un entorno totalmente integrado, el estudiante desarrolla un razonamiento espacial mucho más agudo y una comprensión profunda de la arquitectura y el comportamiento de los yacimientos.
                  Además, familiarizarse con este flujo de trabajo simula de manera directa el entorno real al que el futuro geólogo se enfrentará en el sector energético, ya sea en la exploración y producción de hidrocarburos, la evaluación de recursos geotérmicos o los proyectos de almacenamiento geológico de carbono. Esta exposición temprana a plataformas de estándar profesional no solo acelera drásticamente la curva de aprendizaje, sino que también incrementa exponencialmente las oportunidades de empleabilidad. Las empresas del sector valoran enormemente a los recién graduados que ya poseen la autonomía técnica necesaria para integrarse a equipos multidisciplinarios y comenzar a analizar datos desde el primer día, ahorrando meses de capacitación. En definitiva, dominar Petrel transforma al estudiante de un mero receptor de teoría a un analista integral capaz de proponer soluciones concretas ante los desafíos reales de la geociencia aplicada.
                </p>
              </div>

            </div>
          </Card>
        </div>
      </section>

      {/* SECCIÓN EXPERIENCIA PARTICIPANTES (SLIDER) */}
      <section className="py-16 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 font-heading text-3xl font-bold text-center text-primary"
          >
            Experiencia participantes
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative px-12 md:px-16" // Espacio extra a los costados para las flechas
          >
            {/* Botones de navegación personalizados por fuera */}
            <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-aapg-gold hover:text-primary transition-colors flex items-center justify-center bg-white shadow-md rounded-full p-2 h-14 w-14 hover:scale-110 duration-200">
              <ArrowLeft className="w-10 h-10" />
            </div>
            <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-aapg-gold hover:text-primary transition-colors flex items-center justify-center bg-white shadow-md rounded-full p-2 h-14 w-14 hover:scale-110 duration-200">
              <ArrowRight className="w-10 h-10" />
            </div>

            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{ delay: 5000, disableOnInteraction: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-16 pt-4" // pt-4 para darle espacio al hover superior
            >
              {randomizedExperiences.map((member, i) => (
                <SwiperSlide key={i} className="h-auto">
                  {/* Clases actualizadas para un hover mucho más agresivo */}
                  <Card className="h-full bg-white border-transparent shadow-md hover:shadow-2xl hover:-translate-y-3 hover:border-aapg-gold/30 transition-all duration-300">
                    <CardContent className="p-6 h-[450px] flex flex-col">
                      <Quote className="h-8 w-8 text-aapg-gold/40 mb-4 shrink-0" />

                      <div className="flex-grow overflow-y-auto custom-scrollbar">
                        <p className="text-sm text-muted-foreground pr-4 leading-relaxed italic">
                          "{member.review}"
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-border shrink-0">
                        <h3 className="font-heading text-lg font-bold text-primary">{member.name}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
};

export default IBA;