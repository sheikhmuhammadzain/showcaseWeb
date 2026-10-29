import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
  image: string;
}

export function TestimonialCard({ quote, name, company, image }: TestimonialCardProps) {
  return (
    <Card className="bg-[#1a1a1a] border-gray-800/50 transition-all duration-300 hover:border-gray-700">
      <CardContent className="pt-6">
        <p className="text-gray-300 mb-6">{quote}</p>
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <Image src={image || "/placeholder.svg"} alt={name} width={40} height={40} className="object-cover" />
          </div>
          <div>
            <h4 className="font-medium text-white">{name}</h4>
            <p className="text-gray-400 text-sm">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 