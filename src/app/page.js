"use client"

import Header from "./components/Header"
import Slider from "./components/Slider"
import SectionImages from "./components/Section-Images"
import ServiceCards from "./components/ServiceCards.jsx"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

export default function Page() {
  return (
    <main>
      <Header />
      <Slider />
      <SectionImages></SectionImages>
      <ServiceCards/>
      <ContactSection/>
      <Footer/>
    </main>
  )
}
