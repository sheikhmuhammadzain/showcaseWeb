import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { RefObject } from "react";

interface PortfolioSectionProps {
  sectionRef: RefObject<HTMLElement | null>;
}

export function PortfolioSection({ sectionRef }: PortfolioSectionProps) {
  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-[#222222]">
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
          <Button variant="outline" className="border-gray-700 hover:bg-gray-800/50 hover:text-white group text-gray-300">
            View All Projects
            <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
} 