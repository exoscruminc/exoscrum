import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import Link from 'next/link';
import { Globe, Palette, Smartphone, BarChart3, ShoppingCart, Cloud } from 'lucide-react';


// Define the Service type
type Service = {
  title: string;
  description: string;
  icon: any; // Changed to 'any' to accept React components
  details: string;
  keyBenefits: string[];
  technologies: string[];
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  
  const services: Service[] = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      icon: Globe,
      details: 'Our web development services encompass everything from simple landing pages to complex web applications. We use cutting-edge technologies like React, Next.js, and Node.js to build fast, secure, and scalable solutions. Our process includes careful planning, agile development, rigorous testing, and ongoing support to ensure your web presence delivers exceptional results.',
      keyBenefits: [
        'Responsive Design',
        'SEO Optimization',
        'Performance Tuning',
        'Scalability'
      ],
      technologies: [
        'React',
        'Next.js',
        'Node.js',
        'GraphQL',
        'TypeScript'
      ]
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance engagement and drive conversions through intuitive interfaces.',
      icon: Palette,
      details: 'Our UI/UX design team creates beautiful, functional interfaces that delight users and achieve business goals. We conduct thorough research to understand your audience, create wireframes and prototypes, and iterate based on user feedback. Our designs prioritize usability, accessibility, and visual appeal to create memorable digital experiences that convert visitors into customers.',
      keyBenefits: [
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'Usability Testing'
      ],
      technologies: [
        'Figma',
        'Adobe XD',
        'Sketch',
        'InVision',
        'Zeplin'
      ]
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications designed to reach your audience on any device.',
      icon: Smartphone,
      details: 'We develop high-performance mobile applications for iOS and Android platforms. Whether you need a native app for maximum performance or a cross-platform solution for efficiency, our team delivers apps that are intuitive, engaging, and aligned with your brand. Our mobile development process includes strategy, design, development, testing, deployment, and ongoing maintenance.',
      keyBenefits: [
        'Cross-Platform Solutions',
        'Performance Optimization',
        'User-Centric Design',
        'App Store Deployment',
      ],
      technologies: [
        'React Native', 
        'Flutter',
        'Swift',
        'Kotlin',
        'Firebase'
      ]
    },
    {
      title: 'Digital Strategy',
      description: 'Comprehensive digital strategies to help your business thrive in the online landscape.',
      icon: BarChart3,
      details: 'Our digital strategy services help you navigate the complex digital landscape and achieve sustainable growth. We analyze your market, competitors, and audience to identify opportunities, develop a roadmap for digital success, and implement data-driven tactics. From SEO and content marketing to social media and analytics, we create integrated strategies that align with your business objectives.',
      keyBenefits: [
        'Market Analysis',
        'SEO & Content Strategy',
        'Social Media Planning',
        'Performance Analytics'
      ],
      technologies: [
        'Google Analytics',
        'SEMrush',
        'Ahrefs',
        'Hootsuite',
        'HubSpot'
      ]
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete online store setups with payment processing, inventory management, and marketing tools.',
      icon: ShoppingCart,
      details: 'We build powerful e-commerce platforms that drive sales and provide exceptional customer experiences. Our solutions include custom storefronts, secure payment gateways, inventory management systems, and marketing automation tools. We integrate with popular platforms like Shopify, WooCommerce, and Magento, or build custom solutions tailored to your specific needs.',
      keyBenefits: [
        'Custom Storefronts',
        'Secure Payment Integration',
        'Inventory Management',
        'Marketing Automation'
      ],
      technologies: [
        'Shopify',
        'WooCommerce',
        'Magento',
        'Stripe',
        'PayPal'
      ]
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and solutions tailored to your business needs.',
      icon: Cloud,
      details: 'Our cloud services help you leverage the power of cloud computing to improve scalability, reliability, and cost-efficiency. We design and implement cloud architectures on AWS, Azure, and Google Cloud, migrate existing systems to the cloud, and provide ongoing management and optimization. Our services include infrastructure as code, containerization, serverless computing, and DevOps implementation.',
      keyBenefits: [
        'Scalable Infrastructure',
        'Cost Efficiency',
        'Disaster Recovery',
        'DevOps Automation'
      ],
      technologies: [
        'AWS',
        'Azure',
        'Google Cloud',
        'Docker',
        'Kubernetes'
      ]
    }
  ];

return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-12 md:py-16 relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ec1e64]/5 z-0"></div>
        <div className="max-w-6xl mx-auto relative z-10 px-4">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">Our Services</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of digital services to help your business grow and succeed online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Dialog key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full"
                >
                  <Card className="overflow-hidden transition-all duration-300 glass border border-[#ec1e64]/20 p-0 h-full flex flex-col relative group">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#ec1e64]/10 rounded-bl-full transition-all duration-300 group-hover:bg-[#ec1e64]/20"></div>

                    <div className="p-5 md:p-6 flex-grow flex-col">
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
                        {selectedService?.keyBenefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                          <span className="text-[#ec1e64] mr-2">✓</span>
                          <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <h3 className="text-xl font-bold mb-3">Technologies We Use:</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedService?.technologies.map((tech, index) => (
                          <span key={index} className="bg-[#ec1e64]/10 text-[#ec1e64] px-3 py-1 rounded-full text-sm">
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

          <div className="mt-12 md:mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">Ready to get started?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8">
              Contact us today to discuss how our services can help achieve your business goals.
            </p>
            <Button size="lg" className="hover-lift bg-primary-gradient text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
