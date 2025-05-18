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
              The Premier Web Showcase
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-heading reveal">
              Discover Excellence: Your Platform for <span className="text-[#30B4D8]">Exceptional Websites</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg reveal">
              Showcasing the web's finest. We connect innovative creators with businesses and individuals seeking top-tier digital experiences and talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 reveal">
              <Button size="lg" variant="default" className="font-medium group">
                Explore Showcased Sites
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="transition-colors"
              >
                List Your Project
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
                  Join a <span className="text-white font-medium">Community of Excellence</span>
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