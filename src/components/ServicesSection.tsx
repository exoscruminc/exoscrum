import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Code, 
  Palette, 
  Smartphone, 
  BarChart3, 
  Monitor,
  Globe,
  SmartphoneIcon,
  Search
} from 'lucide-react';

// Define the Service type
type Service = {
  title: string;
  description: string;
  icon: any; // Changed to 'any' to accept React components
  details: string;
  keyBenefits?: string[]; // Optional property for key benefits
  technologies?: string[]; // Optional property for technologies
};

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  
  const services: Service[] = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      icon: Code,
      details: 'Our web development services encompass everything from simple landing pages to complex web applications. We use cutting-edge technologies like React, Next.js, and Node.js to build fast, secure, and scalable solutions. Our process includes careful planning, agile development, rigorous testing, and ongoing support to ensure your web presence delivers exceptional results.',
      keyBenefits: ['Responsive Design', 'SEO Optimization', 'Scalability', 'Performance'],
      technologies: ['React', 'Next.js', 'Node.js', 'Tailwind CSS']
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance engagement and drive conversions through intuitive interfaces.',
      icon: Palette,
      details: 'Our UI/UX design team creates beautiful, functional interfaces that delight users and achieve business goals. We conduct thorough research to understand your audience, create wireframes and prototypes, and iterate based on user feedback. Our designs prioritize usability, accessibility, and visual appeal to create memorable digital experiences that convert visitors into customers.',
      keyBenefits: ['User-Centered Design', 'Prototyping', 'Accessibility', 'Brand Consistency'],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision']
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications designed to reach your audience on any device.',
      icon: Smartphone,
      details: 'We develop high-performance mobile applications for iOS and Android platforms. Whether you need a native app for maximum performance or a cross-platform solution for efficiency, our team delivers apps that are intuitive, engaging, and aligned with your brand. Our mobile development process includes strategy, design, development, testing, deployment, and ongoing maintenance.',
      keyBenefits: ['Cross-Platform', 'Performance Optimization', 'User Engagement', 'App Store Deployment'],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
      title: 'Digital Strategy',
      description: 'Comprehensive digital strategies to help your business thrive in the online landscape.',
      icon: BarChart3,
      details: 'Our digital strategy services help you navigate the complex digital landscape and achieve sustainable growth. We analyze your market, competitors, and audience to identify opportunities, develop a roadmap for digital success, and implement data-driven tactics. From SEO and content marketing to social media and analytics, we create integrated strategies that align with your business objectives.',
      keyBenefits: ['Market Analysis', 'Content Strategy', 'SEO', 'Performance Tracking'],
      technologies: ['Google Analytics', 'SEMrush', 'HubSpot', 'Hootsuite']
    }
  ];

 return (
    <section className="container mx-auto py-16 md:py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ec1e64]/5 z-0"></div>
      <div className="relative z-10 px-4">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">Our Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a range of services to help your business succeed in the digital world. Explore our expertise and discover how we can partner with you to achieve your goals.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Dialog key={index}>
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full"
                >
                  <Card className="overflow-hidden transition-all duration-300 glass border border-[#ec1e64]/20 p-0 h-full flex flex-col relative group">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#ec1e64]/10 rounded-bl-full transition-all duration-300 group-hover:bg-[#ec1e64]/20"></div>

                    <div className="p-5 md:p-6 flex-grow flex flex-col">
                      <div className="bg-gradient-to-br from-[#ec1e64]/20 to-purple-400/20 aspect-video flex items-center justify-center rounded-lg mb-4">
                        {React.createElement(service.icon, { className: "w-10 h-10 md:w-12 md:h-12 text-[#ec1e64]" })}
                      </div>

                      <div className="flex-grow flex flex-col">
                        <h3 className="text-lg md:text-xl font-bold mb-2 expressive-font">{service.title}</h3>
                        <p className="text-muted-foreground text-sm md:text-base flex-grow mb-4">{service.description}</p>

                        <DialogTrigger asChild>
                          <Button
                            className="mt-auto hover-lift bg-gradient-to-r from-[#d01a58] to-[#e05a5a] text-white w-full text-sm md:text-base"
                            onClick={() => setSelectedService(service)}
                          >
                            Learn More
                          </Button>
                        </DialogTrigger>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </AnimatedSection>

              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl md:text-3xl font-bold expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                    {selectedService?.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-muted-foreground">{selectedService?.details}</p>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold mb-3">Key Benefits:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {selectedService?.keyBenefits?.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#ec1e64] mr-2">✓</span>
                          <span>{benefit}</span>
                        </li>
                        ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold mb-3">Technologies We Use:</h3>
                    <div className="flex flex-wrap gap-2">
                        {selectedService?.technologies?.map((tech, i) => (
                        <span key={i} className="bg-[#ec1e64]/10 text-[#ec1e64] px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                        ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
 );
}
