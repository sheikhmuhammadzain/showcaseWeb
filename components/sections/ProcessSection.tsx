import { Briefcase, Code, Laptop, PenTool, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProcessStep } from "@/components/cards/ProcessStep";
import { RefObject } from "react";

interface ProcessSectionProps {
  sectionRef: RefObject<HTMLElement | null>;
}

export function ProcessSection({ sectionRef }: ProcessSectionProps) {
  return (
    <section id="process" ref={sectionRef} className="py-20 bg-[#1a1a1a]">
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
  );
} 