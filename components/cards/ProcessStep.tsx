import { ReactNode } from "react";
import { CheckCircle } from "lucide-react";

export interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: ReactNode;
}

export function ProcessStep({ number, title, description, deliverables, icon }: ProcessStepProps) {
  return (
    <div className="bg-[#222222] p-6 rounded-lg border border-gray-800/50 transition-all duration-300 hover:border-gray-700 reveal">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-[#30B4D8]/10 p-3 rounded-lg">{icon}</div>
        <div>
          <span className="text-[#30B4D8] text-sm font-medium">Step {number}</span>
          <h3 className="text-xl font-medium text-white">{title}</h3>
        </div>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <div>
        <h4 className="text-sm font-medium mb-2 flex items-center gap-2 text-white">
          <CheckCircle className="h-4 w-4 text-[#30B4D8]" />
          Deliverables
        </h4>
        <ul className="space-y-1 pl-6 text-gray-400 text-sm list-disc">
          {deliverables.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
} 