import { Badge } from "@/components/ui/badge";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { RefObject } from "react";

interface TestimonialsSectionProps {
  sectionRef: RefObject<HTMLElement | null>;
}

export function TestimonialsSection({ sectionRef }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-[#222222]">
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
  );
} 