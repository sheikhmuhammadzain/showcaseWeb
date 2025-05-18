import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, Zap } from "lucide-react";

export interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  turnaround: string;
  maintenance: string;
  icon: ReactNode;
  highlighted?: boolean;
}

export function ServiceCard({ 
  title, 
  price, 
  description, 
  features, 
  turnaround, 
  maintenance, 
  icon, 
  highlighted = false 
}: ServiceCardProps) {
  return (
    <Card
      className={`h-full transition-all duration-300 ${
        highlighted ? "border-[#30B4D8] bg-[#222222]" : "bg-[#1a1a1a] border-gray-700/50 hover:border-gray-600"
      }`}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className={`p-3 rounded-lg ${highlighted ? "bg-[#30B4D8]/10" : "bg-[#222222]"}`}>{icon}</div>
          {highlighted && <Badge className="bg-[#30B4D8] text-black hover:bg-[#30B4D8]">Popular</Badge>}
        </div>
        <CardTitle className="mt-4 text-white">{title}</CardTitle>
        <div className="mt-2">
          <span className="text-3xl font-bold text-white">{price}</span>
        </div>
        <CardDescription className={`mt-2 ${highlighted ? "text-gray-300" : "text-gray-400"}`}>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2 text-white">Key Features</h4>
          <ul className="space-y-2">
            {features.map((feature: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-[#30B4D8] shrink-0 mt-0.5" />
                <span className={`text-sm ${highlighted ? "text-gray-300" : "text-gray-400"}`}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-4 border-t border-gray-800/50">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-4 w-4 text-[#30B4D8]" />
            <span className="text-sm font-medium text-white">Turnaround Time</span>
          </div>
          <p className={`text-sm ${highlighted ? "text-gray-300" : "text-gray-400"}`}>{turnaround}</p>
        </div>
        <div className="pt-2">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="h-4 w-4 text-[#30B4D8]" />
            <span className="text-sm font-medium text-white">Maintenance</span>
          </div>
          <p className={`text-sm ${highlighted ? "text-gray-300" : "text-gray-400"}`}>{maintenance}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className={`w-full group ${
            highlighted ? "bg-[#30B4D8] hover:bg-[#2A9FBF] text-black" : "bg-[#222222] hover:bg-[#2f2f2f] text-white"
          }`}
        >
          Get Started
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
} 