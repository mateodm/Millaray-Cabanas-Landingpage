"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, Bed, Bath, Users, Car } from "lucide-react";

export default function SectionImages() {
  const [activeImage, setActiveImage] = useState(0);

  const cabinImages = ["/exterior.jpg", "/frente-cochera.jpg", "/terraza.jpg"];

  const features = [
    {
      icon: <Bed size={20} />,
      text: "Habitación principal con cama matrimonial",
    },
    { icon: <Bed size={20} />, text: "Living con dos camas individuales" },
    { icon: <Bath size={20} />, text: "Baño privado" },
    { icon: <Car size={20} />, text: "Cochera" },
    { icon: <Users size={20} />, text: "Capacidad para 4 personas" },
  ];

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % cabinImages.length);
  };

  const prevImage = () => {
    setActiveImage(
      (prev) => (prev - 1 + cabinImages.length) % cabinImages.length,
    );
  };

  return (
    <section id="cabanas" className="py-24 bg-[#f8f5f0]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-500 mb-3"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Alojamiento
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#394f4b] mb-5"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Nuestras Cabañas
          </h2>
          <div className="w-14 h-0.5 bg-orange-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-w-4 aspect-h-3 relative h-[300px] sm:h-[420px] lg:h-[550px]">
              <img
                src={cabinImages[activeImage]}
                alt={`Cabaña Millaray - Vista ${activeImage + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 transform hover:scale-105"
              />

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 text-[#394f4b] shadow-md transition-all"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 text-[#394f4b] shadow-md transition-all"
              >
                <ChevronRight size={24} />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {cabinImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === activeImage
                        ? "w-5 h-2 bg-white"
                        : "w-2 h-2 bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-2 sm:p-6"
          >
            <h3
              className="text-2xl md:text-3xl font-semibold text-[#394f4b] mb-4"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Cabaña para 4 personas
            </h3>

            <p
              className="text-gray-500 text-sm mb-8 leading-relaxed"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Espaciosa y acogedora, esta cabaña cuenta con una habitación
              principal, un living con dos camas individuales y un baño privado.
              Perfecta para familias o grupos que quieran desconectar del ruido,
              descansar y disfrutar de la naturaleza en un entorno tranquilo y
              seguro.
            </p>

            <div className="space-y-3 mb-9">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 py-2.5 border-b border-gray-100"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#394f4b]/10 flex items-center justify-center text-[#394f4b]">
                    {feature.icon}
                  </div>
                  <span
                    className="text-gray-600 text-sm"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=541160016896&text&type=phone_number&app_absent=0"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#394f4b] text-white text-sm font-medium rounded-full hover:bg-[#2a3c39] transition-colors shadow-md"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Contactanos por WhatsApp
              <ChevronRight size={16} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
