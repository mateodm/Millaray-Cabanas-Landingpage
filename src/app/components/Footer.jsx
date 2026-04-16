"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, MapPin, Phone, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2a3c39] text-white">
      <div className="h-1 bg-gradient-to-r from-orange-500 via-orange-300 to-orange-500" />

      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/millaray.png"
                alt="Cabañas Millaray"
                className="w-9 h-9 object-contain"
              />
              <h3 className="text-xl font-semibold tracking-wide">
                Cabañas Millaray
              </h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
              Tu refugio perfecto en San Francisco del Monte de Oro, donde la
              naturaleza y el confort se encuentran.
            </p>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.facebook.com/profile.php?id=61576202657423/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 bg-white/10 hover:bg-orange-400 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={17} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/millaray_cabanas1/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-white/10 hover:bg-orange-400 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={17} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xs font-semibold tracking-widest uppercase text-orange-300 mb-5">
              Contacto
            </h4>
            <div className="space-y-4 text-sm text-white/75">
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-orange-300 flex-shrink-0" />
                <span>11 6001-6896</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-orange-300 flex-shrink-0" />
                <span>millaraysanfrancisco@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  size={14}
                  className="text-orange-300 flex-shrink-0 mt-0.5"
                />
                <span>
                  Ruta provincial N 9 s/n, San Francisco del Monte de Oro
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xs font-semibold tracking-widest uppercase text-orange-300 mb-5">
              Habilitación
            </h4>
            <div className="flex items-center gap-4">
              <img
                src="/logo.png"
                alt="Municipalidad de San Francisco del Monte de Oro"
                className="w-14 h-14 object-contain flex-shrink-0 opacity-90"
              />
              <p className="text-sm text-white/70 leading-relaxed">
                Cabañas habilitadas por la municipalidad de San Francisco del
                Monte de Oro
              </p>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center items-center gap-1 text-xs text-white/45 text-center"
          >
            <p>
              © {currentYear} Cabañas Millaray. Todos los derechos reservados.
            </p>
            <span className="hidden sm:inline mx-2">·</span>
            <p>
              Desarrollado con{" "}
              <Heart size={10} className="inline text-orange-400 mx-0.5" /> por{" "}
              <a
                href="https://www.instagram.com/webenuntoque/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors underline underline-offset-2"
              >
                Tu Web En Un Toque
              </a>{" "}
              .
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
