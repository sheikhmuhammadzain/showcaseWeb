"use client"

import { useEffect, useRef, useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ScrollToTopButton } from "@/components/ScrollToTopButton"
import { HeroSection } from "@/components/sections/HeroSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { PortfolioSection } from "@/components/sections/PortfolioSection"
import { ProcessSection } from "@/components/sections/ProcessSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { ContactSection } from "@/components/sections/ContactSection"

export default function Home() {
  const [activeSection, setActiveSection] = useState("")
  const [scrollY, setScrollY] = useState(0)

  // Refs for each section for intersection observer
  const sectionRefs = {
    services: useRef<HTMLElement>(null),
    portfolio: useRef<HTMLElement>(null),
    process: useRef<HTMLElement>(null),
    testimonials: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  }

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Set up intersection observer to detect which section is in view
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    // Observe all section refs
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  // Add animation to elements when they come into view
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal")

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    revealElements.forEach((el) => {
      revealObserver.observe(el)
    })

    return () => {
      revealObserver.disconnect()
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-[#222222] text-white">
      <Navbar activeSection={activeSection} scrollY={scrollY} />
      
      <main className="flex-1 pt-[73px]">
        <HeroSection />
        <ServicesSection sectionRef={sectionRefs.services} />
        <PortfolioSection sectionRef={sectionRefs.portfolio} />
        <ProcessSection sectionRef={sectionRefs.process} />
        <TestimonialsSection sectionRef={sectionRefs.testimonials} />
        <ContactSection sectionRef={sectionRefs.contact} />
      </main>

      <Footer />
      <ScrollToTopButton scrollY={scrollY} />
    </div>
  )
}
