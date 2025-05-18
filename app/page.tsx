"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Code,
  Laptop,
  Zap,
  Clock,
  MessageSquare,
  Star,
  ArrowRight,
  ChevronRight,
  Briefcase,
  PenTool,
  Database,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrollY, setScrollY] = useState(0)

  // Refs for each section for intersection observer
  const sectionRefs = {
    services: useRef(null),
    portfolio: useRef(null),
    process: useRef(null),
    testimonials: useRef(null),
    contact: useRef(null),
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
      {/* Navigation */}
      <header
        className={`sticky top-0 z-50 w-full border-b border-gray-800/50 backdrop-blur supports-[backdrop-filter]:bg-[#222222]/60 transition-all duration-300 ${scrollY > 50 ? "py-2" : "py-4"}`}
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="ShowcaseWeb Solutions Logo"
              width={36}
              height={36}
              className="h-9 w-auto"
            />
            <span className="text-xl font-bold font-heading">
              <span className="text-white">Showcase</span>
              <span className="text-[#30B4D8]">WEB</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {["services", "portfolio", "process", "testimonials", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className={`text-base relative py-2 transition-colors ${
                  activeSection === item ? "text-white font-medium" : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="capitalize">{item}</span>
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#30B4D8] transform scale-x-0 transition-transform duration-300 ${
                    activeSection === item ? "scale-x-100" : ""
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button className="bg-[#30B4D8] hover:bg-[#2A9FBF] text-black font-medium hidden md:flex">
              Free Consultation
            </Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute w-full bg-[#222222]/95 backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-[400px] border-b border-gray-800/50" : "max-h-0"
          }`}
        >
          <nav className="container py-4 flex flex-col gap-4">
            {["services", "portfolio", "process", "testimonials", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className={`text-lg py-2 ${activeSection === item ? "text-[#30B4D8] font-medium" : "text-gray-300"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="capitalize">{item}</span>
              </Link>
            ))}
            <Button className="bg-[#30B4D8] hover:bg-[#2A9FBF] text-black font-medium mt-2 w-full">
              Free Consultation
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-[#30B4D8]/10 text-[#30B4D8] hover:bg-[#30B4D8]/10 reveal">
                  Professional Web Development
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-heading reveal">
                  Transforming Ideas Into <span className="text-[#30B4D8]">Digital Excellence</span>
                </h1>
                <p className="text-lg text-gray-300 mb-8 max-w-lg reveal">
                  Custom web solutions designed to elevate your brand, engage your audience, and drive business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 reveal">
                  <Button size="lg" className="bg-[#30B4D8] hover:bg-[#2A9FBF] text-black font-medium group">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-700 hover:bg-gray-800/50 transition-colors"
                  >
                    View Our Work
                  </Button>
                </div>
                <div className="flex items-center mt-8 gap-4 reveal">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full bg-gray-700 border-2 border-[#222222] flex items-center justify-center text-xs"
                      >
                        <Star className="h-4 w-4 text-[#30B4D8]" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">
                      Trusted by <span className="text-white font-medium">100+</span> businesses
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative hidden md:block reveal">
                <div className="relative bg-[#1a1a1a] rounded-lg p-1">
                  <Image
                    src="/images/hero-mockup.jpg"
                    alt="Web Design Mockup"
                    width={600}
                    height={400}
                    className="rounded-lg w-full h-auto"
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" ref={sectionRefs.services} className="py-20 bg-[#1a1a1a]">
          <div className="container">
            <div className="text-center mb-16 reveal">
              <Badge className="mb-4 bg-[#30B4D8]/10 text-[#30B4D8] hover:bg-[#30B4D8]/10">Our Services</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Web Development Packages</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Tailored solutions to meet your specific needs, from simple landing pages to complex web applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
              <ServiceCard
                title="Starter Package"
                price="$1,499"
                description="Perfect for small businesses looking to establish an online presence."
                features={[
                  "5-page responsive website",
                  "Basic SEO optimization",
                  "Contact form integration",
                  "Social media links",
                  "Google Analytics setup",
                ]}
                turnaround="2-3 weeks"
                maintenance="Optional monthly maintenance"
                icon={<Laptop className="h-10 w-10 text-[#30B4D8]" />}
              />
              <ServiceCard
                title="Standard Package"
                price="$3,499"
                description="Comprehensive solution for growing businesses with more complex needs."
                features={[
                  "10-15 page responsive website",
                  "Advanced SEO optimization",
                  "Content management system",
                  "Blog integration",
                  "Email newsletter setup",
                  "Basic e-commerce functionality",
                  "3 rounds of revisions",
                ]}
                turnaround="4-6 weeks"
                maintenance="First 3 months maintenance included"
                icon={<Code className="h-10 w-10 text-[#30B4D8]" />}
                highlighted={true}
              />
              <ServiceCard
                title="Premium Package"
                price="$7,999+"
                description="Enterprise-grade solution with advanced features and custom functionality."
                features={[
                  "Custom web application",
                  "Full e-commerce capabilities",
                  "User authentication system",
                  "Custom database integration",
                  "Advanced analytics dashboard",
                  "API development & integration",
                  "Comprehensive testing",
                  "Priority support",
                ]}
                turnaround="8-12 weeks"
                maintenance="12 months maintenance included"
                icon={<Database className="h-10 w-10 text-[#30B4D8]" />}
              />
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" ref={sectionRefs.portfolio} className="py-20 bg-[#222222]">
          <div className="container">
            <div className="text-center mb-16 reveal">
              <Badge className="mb-4 bg-[#30B4D8]/10 text-[#30B4D8] hover:bg-[#30B4D8]/10">Our Work</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Featured Projects</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore our diverse portfolio of successful web projects across various industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
              <PortfolioCard
                title="Luxury Real Estate Platform"
                category="Real Estate"
                image="/images/portfolio-1.jpg"
                description="A premium property listing platform with virtual tours and advanced filtering."
              />
              <PortfolioCard
                title="E-Commerce Fashion Store"
                category="E-Commerce"
                image="/images/portfolio-2.jpg"
                description="A high-converting fashion store with AR try-on features and personalized recommendations."
              />
              <PortfolioCard
                title="Health & Wellness Booking"
                category="Healthcare"
                image="/images/portfolio-3.jpg"
                description="An appointment booking system for a chain of wellness centers."
              />
              <PortfolioCard
                title="Financial Services Dashboard"
                category="Finance"
                image="/images/portfolio-4.jpg"
                description="A comprehensive financial analytics dashboard for investment tracking."
              />
              <PortfolioCard
                title="Restaurant Ordering System"
                category="Food & Beverage"
                image="/images/portfolio-5.jpg"
                description="An online ordering system with real-time kitchen integration."
              />
              <PortfolioCard
                title="Educational Learning Platform"
                category="Education"
                image="/images/portfolio-6.jpg"
                description="An interactive learning management system with progress tracking."
              />
            </div>

            <div className="text-center mt-12 reveal">
              <Button variant="outline" className="border-gray-700 hover:bg-gray-800/50 group">
                View All Projects
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" ref={sectionRefs.process} className="py-20 bg-[#1a1a1a]">
          <div className="container">
            <div className="text-center mb-16 reveal">
              <Badge className="mb-4 bg-[#30B4D8]/10 text-[#30B4D8] hover:bg-[#30B4D8]/10">Our Process</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">How We Work</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our proven development process ensures clear communication and exceptional results.
              </p>
            </div>

            <div className="space-y-12 relative">
              <ProcessStep
                number="01"
                title="Discovery & Planning"
                description="We start by understanding your business goals, target audience, and project requirements."
                deliverables={["Project brief", "Sitemap", "Feature list"]}
                icon={<Briefcase />}
              />

              <ProcessStep
                number="02"
                title="Design & Prototyping"
                description="We create wireframes and visual designs that align with your brand identity."
                deliverables={["Wireframes", "UI mockups", "Interactive prototype"]}
                icon={<PenTool />}
              />

              <ProcessStep
                number="03"
                title="Development"
                description="Our developers bring the designs to life with clean, efficient code."
                deliverables={["Development environment", "Frontend implementation", "Backend functionality"]}
                icon={<Code />}
              />

              <ProcessStep
                number="04"
                title="Testing & Quality Assurance"
                description="Rigorous testing ensures your website works flawlessly across all devices."
                deliverables={["QA test reports", "Performance optimization", "Cross-browser compatibility"]}
                icon={<Laptop />}
              />

              <ProcessStep
                number="05"
                title="Launch & Support"
                description="We handle the deployment and provide ongoing support to ensure continued success."
                deliverables={["Live website", "Documentation", "Training session"]}
                icon={<Zap />}
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" ref={sectionRefs.testimonials} className="py-20 bg-[#222222]">
          <div className="container">
            <div className="text-center mb-16 reveal">
              <Badge className="mb-4 bg-[#30B4D8]/10 text-[#30B4D8] hover:bg-[#30B4D8]/10">Client Testimonials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">What Our Clients Say</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
              <TestimonialCard
                quote="ShowcaseWeb transformed our outdated website into a modern, user-friendly platform that has significantly increased our online conversions."
                name="Sarah Johnson"
                company="Horizon Realty"
                image="/images/testimonial-1.jpg"
              />
              <TestimonialCard
                quote="The team's attention to detail and technical expertise helped us create an e-commerce site that has boosted our sales by 45% in just three months."
                name="Michael Chen"
                company="Urban Apparel Co."
                image="/images/testimonial-2.jpg"
              />
              <TestimonialCard
                quote="Working with ShowcaseWeb was seamless from start to finish. They delivered our project on time and exceeded our expectations in every way."
                name="Emily Rodriguez"
                company="Wellness Collective"
                image="/images/testimonial-3.jpg"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={sectionRefs.contact} className="py-20 bg-[#1a1a1a]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="reveal">
                <Badge className="mb-4 bg-[#30B4D8]/10 text-[#30B4D8] hover:bg-[#30B4D8]/10">Get In Touch</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Ready to Start Your Project?</h2>
                <p className="text-gray-400 mb-8">
                  Fill out the form and one of our web development experts will get back to you within 24 hours.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#222222] p-3 rounded-lg">
                      <MessageSquare className="h-5 w-5 text-[#30B4D8]" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email Us</h4>
                      <p className="text-gray-400">info@showcaseweb.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#222222] p-3 rounded-lg">
                      <Clock className="h-5 w-5 text-[#30B4D8]" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Business Hours</h4>
                      <p className="text-gray-400">Monday-Friday: 9am-6pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#222222] p-3 rounded-lg">
                      <Zap className="h-5 w-5 text-[#30B4D8]" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Response Time</h4>
                      <p className="text-gray-400">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="reveal">
                <div className="bg-[#222222] p-6 md:p-8 rounded-lg border border-gray-800/50">
                  <h3 className="text-xl font-medium mb-6">Contact Form</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#30B4D8] focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#30B4D8] focus:border-transparent transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#30B4D8] focus:border-transparent transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="starter">Starter Package</option>
                        <option value="standard">Standard Package</option>
                        <option value="premium">Premium Package</option>
                        <option value="custom">Custom Solution</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#30B4D8] focus:border-transparent transition-all"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>

                    <Button className="w-full bg-[#30B4D8] hover:bg-[#2A9FBF] text-black font-medium group">
                      Submit Request
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#222222] border-t border-gray-800/50 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="ShowcaseWeb Solutions Logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <span className="text-lg font-bold font-heading">
                  <span className="text-white">Showcase</span>
                  <span className="text-[#30B4D8]">WEB</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Creating exceptional web experiences that drive business growth.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-[#30B4D8] transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#30B4D8] transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#30B4D8] transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-[#30B4D8] transition-colors">
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#30B4D8] transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#30B4D8] transition-colors">
                    E-Commerce
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#30B4D8] transition-colors">
                    Web Applications
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-[#30B4D8] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#30B4D8] transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#30B4D8] transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#30B4D8] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to our newsletter for web development tips and industry insights.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#30B4D8] focus:border-transparent transition-all"
                />
                <Button className="bg-[#30B4D8] hover:bg-[#2A9FBF] text-black">Subscribe</Button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ShowcaseWeb Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 text-sm hover:text-[#30B4D8] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 text-sm hover:text-[#30B4D8] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-[#30B4D8] text-black transition-all duration-300 ${
          scrollY > 300 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  )
}

// Component for Service Cards
function ServiceCard({ title, price, description, features, turnaround, maintenance, icon, highlighted = false }) {
  return (
    <Card
      className={`h-full transition-all duration-300 ${
        highlighted ? "border-[#30B4D8] bg-[#222222]" : "bg-[#222222] border-gray-800/50 hover:border-gray-700"
      }`}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className={`p-3 rounded-lg ${highlighted ? "bg-[#30B4D8]/10" : "bg-[#1a1a1a]"}`}>{icon}</div>
          {highlighted && <Badge className="bg-[#30B4D8] text-black hover:bg-[#30B4D8]">Popular</Badge>}
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
        <div className="mt-2">
          <span className="text-3xl font-bold">{price}</span>
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2">Key Features</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-[#30B4D8] shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-4 border-t border-gray-800/50">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-4 w-4 text-[#30B4D8]" />
            <span className="text-sm font-medium">Turnaround Time</span>
          </div>
          <p className="text-gray-400 text-sm">{turnaround}</p>
        </div>
        <div className="pt-2">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="h-4 w-4 text-[#30B4D8]" />
            <span className="text-sm font-medium">Maintenance</span>
          </div>
          <p className="text-gray-400 text-sm">{maintenance}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className={`w-full ${
            highlighted ? "bg-[#30B4D8] hover:bg-[#2A9FBF] text-black" : "bg-[#1a1a1a] hover:bg-gray-800"
          } group`}
        >
          Get Started
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  )
}

// Component for Portfolio Cards
function PortfolioCard({ title, category, image, description }) {
  return (
    <Card className="bg-[#1a1a1a] border-gray-800/50 overflow-hidden group transition-all duration-300 hover:border-gray-700">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
          <Badge className="bg-[#30B4D8]/80 text-white hover:bg-[#30B4D8]/80">{category}</Badge>
        </div>
      </div>
      <CardContent className="pt-4">
        <h3 className="font-medium text-lg mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full border-gray-700/50 hover:bg-[#222222] group">
          View Project
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  )
}

// Component for Process Steps
function ProcessStep({ number, title, description, deliverables, icon }) {
  return (
    <div className="bg-[#222222] p-6 rounded-lg border border-gray-800/50 transition-all duration-300 hover:border-gray-700 reveal">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-[#30B4D8]/10 p-3 rounded-lg">{icon}</div>
        <div>
          <span className="text-[#30B4D8] text-sm font-medium">Step {number}</span>
          <h3 className="text-xl font-medium">{title}</h3>
        </div>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <div>
        <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-[#30B4D8]" />
          Deliverables
        </h4>
        <ul className="space-y-1 pl-6 text-gray-400 text-sm list-disc">
          {deliverables.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// Component for Testimonial Cards
function TestimonialCard({ quote, name, company, image }) {
  return (
    <Card className="bg-[#1a1a1a] border-gray-800/50 transition-all duration-300 hover:border-gray-700">
      <CardContent className="pt-6">
        <p className="text-gray-300 mb-6">{quote}</p>
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <Image src={image || "/placeholder.svg"} alt={name} width={40} height={40} className="object-cover" />
          </div>
          <div>
            <h4 className="font-medium">{name}</h4>
            <p className="text-gray-400 text-sm">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
