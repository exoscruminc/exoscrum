import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Coffee, Gamepad2, Baby, Heart, Sparkles, Trophy, Users, MapPin } from 'lucide-react';

export default function Careers() {
  const benefits = [
    {
      title: "Flexible Hours",
      description: "Work when you are most productive. We trust you to manage your time.",
      icon: Coffee
    },
    {
      title: "Online Game Rooms",
      description: "Unwind with colleagues in our virtual game rooms.",
      icon: Gamepad2
    },
    {
      title: "Open Contracts",
      description: "No long-term commitments. Work on projects that excite you.",
      icon: Baby
    },
    {
      title: "Wellness Programs",
      description: "Mental health days, meditation sessions, and fitness perks.",
      icon: Heart
    },
    {
      title: "Learning Budget",
      description: "Continuous learning with a dedicated budget for courses and books.",
      icon: Sparkles
    },
    {
      title: "Recognition",
      description: "We celebrate your achievements with awards and shout-outs.",
      icon: Trophy
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-12 md:py-16 relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ec1e64]/5 z-0"></div>
        <div className="max-w-6xl mx-auto relative z-10 px-4">
          
          {/* Why work with us section */}
          <motion.div 
            className="mb-12 md:mb-16"
            id="culture"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                Why You&apos;ll Love Working Here
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                But we are always looking for talented individuals who want to create awesome digital experiences!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="h-full"
                >
                  <Card className="p-6 hover-lift transition-all duration-300 glass border border-[#ec1e64]/20 h-full flex flex-col">
                    <div className="text-4xl mb-4 text-[#ec1e64]">
                      {React.createElement(benefit.icon)}
                    </div>
                    <CardHeader className="p-0 mb-2">
                      <CardTitle className="text-xl font-bold">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Fun illustration section */}
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-8 md:p-12 hover-lift transition-all duration-300 glass border border-[#ec1e64]/20 relative overflow-hidden">
              <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#ec1e64]/10 blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="text-8xl mb-6">🚀</div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                  No Openings Right Now
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  But we are always looking for talented individuals who want to create awesome digital experiences!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button size="lg" className="hover-lift bg-primary-gradient text-white px-8 py-6 text-lg rounded-full">
                    <Link href="/contact">Send Us a Message</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
