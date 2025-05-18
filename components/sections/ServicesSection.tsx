import { Search, Zap, Award } from "lucide-react";
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
          <Badge className="mb-4 bg-[#30B4D8]/10 text-[#30B4D8] hover:bg-[#30B4D8]/10">Platform Benefits</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Connect, Showcase, Discover</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            ShowcaseWeb Solutions is the premier platform connecting web creators with businesses looking for exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto reveal">
          <ServiceCard
            title="For Designers & Agencies"
            icon={<Award className="h-10 w-10 text-[#30B4D8]" />}
            description="Gain visibility, build credibility, and connect with clients. Showcase your best work on a platform dedicated to quality."
            features={[
              "Curated Exposure: Feature your high-quality, live projects.",
              "Credibility Badges: Highlight performance metrics and testimonials.",
              "Direct Lead Generation: Connect with businesses seeking your skills.",
              "Marketing & Spotlight: Benefit from featured placements and co-marketing."
            ]}
            buttonText="Showcase Your Work"
            highlighted={true}
          />
          <ServiceCard
            title="For Businesses & Hirers"
            icon={<Search className="h-10 w-10 text-[#30B4D8]" />}
            description="Discover top web design and development professionals. Browse verified, live websites and find the perfect partner for your project."
            features={[
              "One-Stop Discovery: Explore real websites by industry, tech, and budget.",
              "Verified Reviews & Case Studies: Make informed decisions with documented ROI.",
              "Save Time & Effort: Quickly find vetted professionals.",
              "Transparent Insights: Understand project scopes and potential costs."
            ]}
            buttonText="Find a Professional"
          />
        </div>
      </div>
    </section>
  );
} 