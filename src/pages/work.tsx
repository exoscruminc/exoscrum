import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Work() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A complete online shopping experience with payment processing and inventory management.',
      category: 'Web Development',
      image: '/placeholder-project.jpg',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Mobile Banking App',
      description: 'A secure and intuitive mobile banking application for iOS and Android.',
      category: 'Mobile Development',
      image: '/placeholder-project.jpg',
      technologies: ['React Native', 'Firebase', 'Redux']
    },
    {
      title: 'Brand Identity Design',
      description: 'Complete visual identity and user experience design for a tech startup.',
      category: 'UI/UX Design',
      image: '/placeholder-project.jpg',
      technologies: ['Figma', 'Illustrator', 'Photoshop']
    },
    {
      title: 'Enterprise Dashboard',
      description: 'Analytics dashboard for tracking business metrics and KPIs.',
      category: 'Web Development',
      image: '/placeholder-project.jpg',
      technologies: ['Vue.js', 'D3.js', 'Python']
    },
    {
      title: 'Health & Wellness Platform',
      description: 'A comprehensive platform connecting users with health professionals.',
      category: 'Full Stack',
      image: '/placeholder-project.jpg',
      technologies: ['Next.js', 'GraphQL', 'PostgreSQL']
    },
    {
      title: 'SaaS Product',
      description: 'Subscription-based software solution for project management.',
      category: 'Product Design',
      image: '/placeholder-project.jpg',
      technologies: ['Angular', 'Express', 'MySQL']
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">Our Work</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of innovative digital solutions that have transformed businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full"
              >
                <Card className="overflow-hidden transition-all duration-300 glass border border-[#ec1e64]/20 p-0 h-full flex flex-col relative group">
                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#ec1e64]/10 rounded-bl-full transition-all duration-300 group-hover:bg-[#ec1e64]/20"></div>
                  
                  <div className="p-5 md:p-6 flex-grow flex flex-col">
                    <div className="bg-gradient-to-br from-[#ec1e64]/20 to-purple-400/20 aspect-video flex items-center justify-center rounded-lg mb-4">
                      <Image 
                        src={project.image} 
                        alt={`${project.title} project screenshot`} 
                        width={400} 
                        height={300} 
                        className="object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="flex-grow flex flex-col">
                      <span className="text-xs md:text-sm font-medium text-[#ec1e64] mb-1">{project.category}</span>
                      <h3 className="text-lg md:text-xl font-bold mb-2 expressive-font">{project.title}</h3>
                      <p className="text-muted-foreground text-sm md:text-base flex-grow mb-4">{project.description}</p>
                      
                      {/* Technologies badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="px-2 py-1 text-xs rounded-full bg-[#ec1e64]/10 text-[#ec1e64] border border-[#ec1e64]/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <Button className="mt-auto hover-lift bg-gradient-to-r from-[#d01a58] to-[#e05a5a] text-white w-full text-sm md:text-base">
                        View Case Study
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">Ready to start your project?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8">
              Let&apos;s discuss how we can bring your vision to life with our expertise.
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
