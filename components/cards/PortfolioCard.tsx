import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
}

export function PortfolioCard({ title, category, image, description }: PortfolioCardProps) {
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
        <h3 className="font-medium text-lg mb-2 text-white">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full border-gray-700/50 hover:bg-[#222222] hover:text-white group text-gray-300">
          View Project
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
} 