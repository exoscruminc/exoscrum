import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Smartphone, Code, Palette, TrendingUp } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-1/2 -left-1/4 w-[150vh] h-[150vh] rounded-full bg-[#ec1e64]/5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
        <motion.div 
          className="absolute -bottom-1/2 -right-1/4 w-[150vh] h-[150vh] rounded-full bg-purple-500/5 blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-8 max-w-2xl font-display leading-[1.3]">
              <span className="block text-outline">Crafting</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b] my-6">Digital Excellence</span>
              <span className="block text-outline">for Modern Brands</span>
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-muted-foreground mb-10 font-body">
              We create cutting-edge digital experiences that drive growth and transform businesses. 
              Blending creativity with technology to deliver results that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="hover-lift bg-primary-gradient text-white px-8 py-6 text-lg rounded-full">
                <Link href="/work">Explore Our Projects</Link>
              </Button>
              <Button asChild size="lg" className="hover-lift border-2 border-[#ec1e64] text-[#ec1e64] px-8 py-6 text-lg rounded-full">
                <Link href="/contact">Start a Conversation</Link>
              </Button>
            </div>
          </div>
          
          {/* Visual element */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-[#ec1e64]/20 blur-2xl md:block hidden"
                animate={{
                  y: [-20, 20, -20],
                  x: [-20, -20],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-purple-500/20 blur-2xl md:block hidden"
                animate={{
                  y: [20, -20, 20],
                  x: [20, -20, 20],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              ></motion.div>
              
              {/* Main visual */}
              <div className="relative glass rounded-3xl p-6 md:p-8 border border-[#ec1e64]/30 backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {/* Updated corner elements */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      className="bg-white/20 rounded-xl md:rounded-2xl p-3 md:p-4 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <motion.div 
                        className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#ec1e64]/30 mb-2 md:mb-3 flex items-center justify-center"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 0.5
                        }}
                      >
                        {i % 4 === 0 ? <Smartphone className="w-6 h-6 text-[#ec1e64]" /> : 
                         i % 4 === 1 ? <Code className="w-6 h-6 text-[#ec1e64]" /> : 
                         i % 4 === 2 ? <Palette className="w-6 h-6 text-[#ec1e64]" /> : 
                         <TrendingUp className="w-6 h-6 text-[#ec1e64]" />}
                      </motion.div>
                      <div className="h-2 md:h-3 bg-white/30 rounded-full mb-1 md:mb-2 w-full"></div>
                      <div className="h-2 md:h-3 bg-white/20 rounded-full w-3/4"></div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Updated central element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b] flex items-center justify-center shadow-2xl relative overflow-hidden"
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    {/* Animated pulse effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.8, 0, 0.8]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    ></motion.div>
                    
                    {/* Core element */}
                    <motion.div 
                      className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 flex items-center justify-center shadow-lg"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="grid grid-cols-2 gap-1">
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [1, 0.7, 1]
                            }}
                            transition={{
                              duration: 1.2,
                              repeat: Infinity,
                              delay: i * 0.2,
                              ease: "easeInOut"
                            }}
                          ></motion.div>
                        ))}
                      </div>
                    </motion.div>
                    
                    {/* Orbiting elements */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full bg-white"
                        animate={{
                          rotate: 360 * (i + 1),
                          x: [0, 10, -10, 0],
                          y: [0, -10, 10, 0]
                        }}
                        transition={{
                          rotate: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                          },
                          x: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          },
                          y: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                          }
                        }}
                        style={{
                          originX: "50%",
                          originY: "50%",
                          left: "50%",
                          top: "50%",
                          marginLeft: "-0.5rem",
                          marginTop: "-0.5rem"
                        }}
                      ></motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 );
}
