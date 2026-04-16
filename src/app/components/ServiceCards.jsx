"use client";

import { motion } from "framer-motion";
import { Car, Wifi, Tv, Sofa, Flame, Mountain } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Car size={40} />,
      title: "Cochera",
      description:
        "Contamos con cocheras para que tengas una mayor comodidad durante tu estadía.",
    },
    {
      icon: <Wifi size={40} />,
      title: "Wifi",
      description: "Conexión WiFi disponible para los inquilinos.",
    },
    {
      icon: <Tv size={40} />,
      title: "DirecTV",
      description:
        "Las cabañas incluyen TV con DirecTV para disfrutar tus programas y películas favoritas.",
    },
    {
      icon: <Sofa size={40} />,
      title: "Living exterior",
      description:
        "Un living al aire libre con vista. Disfruta de la tranquilidad del patio en esta sala elevada de madera, perfecta para compartir charlas y mateadas.",
    },
    {
      icon: <Flame size={40} />,
      title: "Parrilla",
      description:
        "Parrilla disponible para que puedas disfrutar de tus mejores asados al aire libre.",
    },
    {
      icon: <Mountain size={40} />,
      title: "Hermosas vistas",
      description:
        "Rodeado de naturaleza, el lugar te regala paisajes únicos y la calma del entorno serrano. Ideal para relajarte y conectar con lo esencial.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="servicios" className="py-20 bg-[#394f4b]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-300 mb-3"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Lo que ofrecemos
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Servicios
          </h2>
          <div className="w-14 h-0.5 bg-white/50 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="relative group"
            >
              <div className="h-full p-6 sm:p-7 border border-white/15 rounded-2xl bg-white/5 hover:bg-white/10 hover:border-orange-400/30 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-orange-400/20 transition-colors"
                >
                  <div className="text-white">{service.icon}</div>
                </motion.div>

                <h3
                  className="text-base font-semibold text-white text-center mb-3"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-white/65 text-center text-sm leading-relaxed"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  {service.description}
                </p>

                <motion.div
                  className="absolute inset-0 border-2 border-white/20 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ pointerEvents: "none" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
