"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Facebook, Instagram } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "INICIO", href: "#inicio" },
    { name: "CABAÑAS", href: "#cabanas" },
    { name: "SERVICIOS", href: "#servicios" },
    { name: "CONTACTO", href: "#contacto" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                className="w-7 h-7 object-contain"
                src="/millaray.png"
                alt="Cabañas Millaray Logo"
              />
            </div>
            <span
              className={`text-xl font-semibold transition-colors ${isScrolled ? "text-gray-800" : "text-white"}`}
            >
              Cabañas Millaray
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  href={item.href}
                  className={`font-medium transition-colors relative group text-xs tracking-wider ${
                    isScrolled
                      ? "text-gray-700 hover:text-orange-500"
                      : "text-white hover:text-orange-300"
                  } ${index === 0 ? "active" : ""}`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all ${
                      index === 0
                        ? `w-full ${isScrolled ? "bg-gray-700" : "bg-white"}`
                        : `w-0 group-hover:w-full ${isScrolled ? "bg-orange-500" : "bg-white"}`
                    }`}
                  ></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.facebook.com/profile.php?id=61576202657423/"
              target="_blank"
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-white hover:bg-[#394f4b] transition-colors"
              rel="noreferrer"
            >
              <Facebook
                className=" text-[#394f4b] hover:text-white"
                size={16}
              />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/millaray_cabanas1/"
              target="_blank"
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-white hover:bg-[#394f4b]  transition-colors"
              rel="noreferrer"
            >
              <Instagram
                size={16}
                className=" text-[#394f4b] hover:text-white"
              />
            </motion.a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? "text-gray-800" : "text-white"}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-white/20"
          >
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    isScrolled || isMenuOpen
                      ? "text-gray-700 hover:text-orange-500"
                      : "text-white hover:text-orange-300"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4 mt-4">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61576202657423/"
                className="w-8 h-8 bg-[#394f4b] rounded-full flex items-center justify-center text-white"
                rel="noreferrer"
              >
                <Facebook size={16} />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/millaray_cabanas1/"
                className="w-8 h-8 bg-[#394f4b] rounded-full flex items-center justify-center text-white"
                rel="noreferrer"
              >
                <Instagram size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
