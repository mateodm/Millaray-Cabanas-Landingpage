"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const [message, setMessage] = useState("");

  const handleWhatsAppClick = () => {
    const whatsappNumber = "116001-6896";
    const whatsappMessage = encodeURIComponent(
      message || "Hola, me gustaría hacer una reserva en Cabañas Millaray.",
    );
    window.open(
      `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`,
      "_blank",
    );
  };

  return (
    <section id="contacto" className="py-20 bg-[#f8f5f0]">
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
            Encontranos
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#394f4b] mb-5"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Ubicación y contacto
          </h2>
          <div className="w-14 h-0.5 bg-orange-400 mx-auto mb-8"></div>
          <p
            className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Nos ubicamos en San Francisco del Monte de Oro, San Luis. Podés
            realizar tus reservas por correo electrónico o WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="min-h-[400px] h-full rounded-xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.7363355677044!2d-66.14450652349254!3d-32.613209355127175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d4936b807c5847%3A0xb0085e4fb7185ec3!2sCaba%C3%B1as%20MILLARAY!5e1!3m2!1ses!2sar!4v1747954222638!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Cabañas Millaray"
              className="rounded-xl"
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-5 sm:p-8 rounded-xl shadow-xl"
          >
            <div className="space-y-8">
              <div>
                <h3
                  className="text-lg font-semibold text-[#394f4b] mb-6"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Información de contacto
                </h3>

                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#394f4b]/10 flex items-center justify-center text-[#394f4b]">
                      <MapPin size={17} />
                    </div>
                    <div>
                      <h4
                        className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5"
                        style={{ fontFamily: '"Inter", sans-serif' }}
                      >
                        Dirección
                      </h4>
                      <p
                        className="text-gray-700 text-sm"
                        style={{ fontFamily: '"Inter", sans-serif' }}
                      >
                        Ruta provincial N 9 sin número, D5703 San Francisco del
                        Monte de Oro, San Luis
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#394f4b]/10 flex items-center justify-center text-[#394f4b]">
                      <Phone size={17} />
                    </div>
                    <div>
                      <h4
                        className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5"
                        style={{ fontFamily: '"Inter", sans-serif' }}
                      >
                        Teléfono
                      </h4>
                      <p
                        className="text-gray-700 text-sm"
                        style={{ fontFamily: '"Inter", sans-serif' }}
                      >
                        11 6001-6896
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#394f4b]/10 flex items-center justify-center text-[#394f4b]">
                      <Mail size={17} />
                    </div>
                    <div>
                      <h4
                        className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5"
                        style={{ fontFamily: '"Inter", sans-serif' }}
                      >
                        Correo electrónico
                      </h4>
                      <p
                        className="text-gray-700 text-sm"
                        style={{ fontFamily: '"Inter", sans-serif' }}
                      >
                        millaraysanfrancisco@gmail.com
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div>
                <div className="space-y-4">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#394f4b]/30 focus:border-[#394f4b] outline-none resize-none h-32 text-sm text-gray-700 placeholder:text-gray-400 transition-colors"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  ></textarea>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleWhatsAppClick}
                    className="w-full py-3.5 bg-[#394f4b] text-white rounded-full hover:bg-[#2a3c39] transition-colors shadow-md flex items-center justify-center gap-2 text-sm font-medium"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    <Send size={16} />
                    <span>Contactanos por WhatsApp</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
