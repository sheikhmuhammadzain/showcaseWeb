import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: ReactNode;
  buttonText: string;
  buttonLink?: string;
  highlighted?: boolean;
}

export function ServiceCard({ 
  title, 
  description, 
  features, 
  icon, 
  buttonText,
  highlighted = false 
}: ServiceCardProps) {
  return (
    <Card
      className={`h-full flex flex-col transition-all duration-300 ${
        highlighted ? "border-[#30B4D8] bg-[#222222]" : "bg-[#1a1a1a] border-gray-700/50 hover:border-gray-600"
      }`}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className={`p-3 rounded-lg ${highlighted ? "bg-[#30B4D8]/10" : "bg-[#222222]"}`}>{icon}</div>
          {highlighted && <Badge className="bg-[#30B4D8] text-black hover:bg-[#30B4D8]">Featured</Badge>}
        </div>
        <CardTitle className="mt-4 text-white">{title}</CardTitle>
        <CardDescription className={`mt-2 ${highlighted ? "text-gray-300" : "text-gray-400"}`}>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 flex-grow">
        <div>
          <h4 className="text-sm font-medium mb-2 text-white">Key Benefits</h4>
          <ul className="space-y-2">
            {features.map((feature: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-[#30B4D8] shrink-0 mt-0.5" />
                <span className={`text-sm ${highlighted ? "text-gray-300" : "text-gray-400"}`}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant={highlighted ? "default" : "secondary"}
          className="w-full group"
        >
          {buttonText}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
} 