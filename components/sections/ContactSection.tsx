import { ArrowRight, Clock, MessageSquare, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RefObject } from "react";

interface ContactSectionProps {
  sectionRef: RefObject<HTMLElement | null>;
}

export function ContactSection({ sectionRef }: ContactSectionProps) {
  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-[#1a1a1a]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal">
            <Badge className="mb-4 bg-[#30B4D8]/10 text-[#30B4D8] hover:bg-[#30B4D8]/10">Get In Touch</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Ready to Start Your Project?</h2>
            <p className="text-gray-400 mb-8">
              Fill out the form and one of our web development experts will get back to you within 24 hours.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#222222] p-3 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-[#30B4D8]" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email Us</h4>
                  <p className="text-gray-400">info@showcaseweb.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#222222] p-3 rounded-lg">
                  <Clock className="h-5 w-5 text-[#30B4D8]" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Business Hours</h4>
                  <p className="text-gray-400">Monday-Friday: 9am-6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#222222] p-3 rounded-lg">
                  <Zap className="h-5 w-5 text-[#30B4D8]" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Response Time</h4>
                  <p className="text-gray-400">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="bg-[#222222] p-6 md:p-8 rounded-lg border border-gray-800/50">
              <h3 className="text-xl font-medium mb-6">Contact Form</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#30B4D8] focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#30B4D8] focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#30B4D8] focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="starter">Starter Package</option>
                    <option value="standard">Standard Package</option>
                    <option value="premium">Premium Package</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#30B4D8] focus:border-transparent transition-all"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <Button className="w-full bg-[#30B4D8] hover:bg-[#2A9FBF] text-black font-medium group">
                  Submit Request
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 