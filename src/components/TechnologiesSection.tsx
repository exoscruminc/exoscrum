import React from 'react';
import { Card } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Zap, 
  Code, 
  Cpu, 
  Palette, 
  Search, 
  Cloud, 
  Container, 
  Ship, 
  Database, 
  Globe, 
  FileText, 
  Shield, 
  Brain, 
  Play
} from 'lucide-react';

const technologies = [
  { name: "React", icon: Atom, size: "md" },
  { name: "Next.js", icon: Zap, size: "lg" },
  { name: "TypeScript", icon: Code, size: "sm" },
  { name: "Node.js", icon: Cpu, size: "md" },
  { name: "Tailwind CSS", icon: Palette, size: "md" },
  { name: "GraphQL", icon: Search, size: "sm" },
  { name: "AWS", icon: Cloud, size: "lg" },
  { name: "Docker", icon: Container, size: "sm" },
  { name: "Kubernetes", icon: Ship, size: "md" },
  { name: "Python", icon: FileText, size: "md" },
  { name: "Django", icon: Globe, size: "sm" },
  { name: "PostgreSQL", icon: Database, size: "md" },
  { name: "MongoDB", icon: Play, size: "md" }, // Using Play as a leaf-like icon
  { name: "Redis", icon: Brain, size: "sm" },
  { name: "Convex", icon: Search, size: "md" }, // Using Search as a crystal-like icon
  { name: "Clerk", icon: Shield, size: "sm" }
];

export default function TechnologiesSection() {
  return (
    <section className="container mx-auto py-16 md:py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ec1e64]/5 to-purple-400/5 z-0"></div>
      <div className="relative z-10 px-4">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-12 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b] leading-relaxed">Technologies We Use</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We leverage the latest tools and technologies to build cutting-edge digital solutions.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6 auto-rows-[150px]">
          {technologies.map((tech, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <motion.div
                className={`h-full ${tech.size === 'lg' ? 'sm:col-span-2 sm:row-span-2' : tech.size === 'sm' ? 'sm:col-span-1 sm:row-span-1' : 'sm:col-span-1 sm:row-span-1'}`}
                whileHover={{ y: -8, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className={`p-4 text-center hover-lift transition-all duration-300 glass flex-col items-center border-[#ec1e64]/20 h-full flex justify-center ${tech.size === 'lg' ? 'p-6' : tech.size === 'sm' ? 'p-3' : 'p-4'}`}>
                  <div className={`mb-2 ${tech.size === 'lg' ? 'text-4xl' : tech.size === 'sm' ? 'text-xl' : 'text-3xl'}`}>
                    {React.createElement(tech.icon, { className: `${tech.size === 'lg' ? 'w-10 h-10' : tech.size === 'sm' ? 'w-6 h-6' : 'w-8 h-8'}` })}
                  </div>
                  <h3 className={`font-semibold ${tech.size === 'lg' ? 'text-base' : tech.size === 'sm' ? 'text-xs' : 'text-sm'}`}>{tech.name}</h3>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
 );
}
