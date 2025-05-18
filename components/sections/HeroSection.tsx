import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";

export function HeroSection() {
  return (
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
              <Button size="lg" variant="default" className="font-medium group">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="transition-colors"
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
  );
} 