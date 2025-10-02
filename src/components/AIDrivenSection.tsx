import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BarChart3, Cpu, Zap, MessageSquare } from 'lucide-react';

const aiSolutions = [
  {
    title: 'AI-Powered Analytics',
    description: 'Leverage machine learning to gain deeper insights from your data and make smarter business decisions.',
    icon: BarChart3
  },
  {
    title: 'Intelligent Automation',
    description: 'Automate repetitive tasks and processes with AI to increase efficiency and reduce costs.',
    icon: Cpu
  },
  {
    title: 'Predictive Modeling',
    description: 'Use predictive algorithms to forecast trends, customer behavior, and market opportunities.',
    icon: Zap
  },
  {
    title: 'Natural Language Processing',
    description: 'Implement NLP solutions to understand and generate human language for better customer interactions.',
    icon: MessageSquare
  }
];

export default function AIDrivenSection() {
  return (
    <section className="container mx-auto py-20 md:py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ec1e64]/5 to-purple-400/5 z-0 rounded-3xl"></div>
      <div className="relative z-10 px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
              AI-Driven Solutions & Growth
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Harness the power of artificial intelligence to accelerate your business growth and stay ahead of the competition.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {aiSolutions.map((solution, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full"
              >
                <Card className="p-6 hover-lift transition-all duration-300 glass border border-[#ec1e64]/20 h-full flex flex-col relative group">
                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-full bg-[#ec1e64]/10 transition-all duration-300 group-hover:bg-[#ec1e64]/20"></div>
                  
                  <CardHeader>
                    <div className="text-4xl mb-3">{React.createElement(solution.icon, { className: "w-10 h-10 mx-auto text-[#ec1e64]" })}</div>
                    <CardTitle className="text-xl font-bold expressive-font">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{solution.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={0.4}>
          <div className="text-center max-w-6xl mx-auto mt-24 bg-white">
            <Card className="p-8 md:p-12 hover-lift transition-all duration-300 glass border border-[#ec1e64]/20 relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#ec1e64]/10 blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl animate-pulse"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                  Transform Your Business with AI
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Our AI-driven solutions are designed to unlock new growth opportunities, optimize operations, 
                  and create personalized experiences that drive customer engagement and revenue.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="hover-lift border-2 border-[#ec1e64] text-[#ec1e64] px-8 py-6 text-lg rounded-full">
                    <Link href="/contact">Schedule a Consultation</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
