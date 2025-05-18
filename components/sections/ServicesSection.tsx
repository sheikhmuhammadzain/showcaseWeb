import { Code, Database, Laptop } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { RefObject } from "react";

interface ServicesSectionProps {
  sectionRef: RefObject<HTMLElement | null>;
}

export function ServicesSection({ sectionRef }: ServicesSectionProps) {
  return (
    <section id="services" ref={sectionRef} className="py-20 bg-[#1a1a1a]">
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
  );
} 