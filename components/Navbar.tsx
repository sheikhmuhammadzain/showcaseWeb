import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  scrollY: number;
}

export function Navbar({ activeSection, scrollY }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-gray-800/50 backdrop-blur supports-[backdrop-filter]:bg-[#222222]/60 transition-all duration-300 ${
        scrollY > 50 ? "py-2" : "py-4"
      }`}
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
  );
} 