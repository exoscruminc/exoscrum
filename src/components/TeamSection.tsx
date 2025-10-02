import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Globe } from 'lucide-react';

const teamMembers = [
 {
    name: "Amaninder Singh",
    role: "Founder & CEO",
    bio: "The architect of success at ExoScrum. Trying to build a strong foundation with clear vision and unwavering drive for the best result.",
    avatar: "/placeholder-avatar.jpg",
    skills: ["Leadership", "Strategy", "Innovation"],
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#"
    }
 },
  {
    name: "Aanvinder Singh",
    role: "CFO & Partner",
    bio: "A numbers whisperer to translate financial complexity into clear insights for growth. Keeps our numbers sharp and our strategies brilliant.",
    avatar: "/placeholder-avatar.jpg",
    skills: ["Finance", "Analytics", "Planning"],
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#"
    }
 },
  {
    name: "Gursheen Kaur",
    role: "Director of Support",
    bio: "The steady hand at the helm: Gursheen leads our support team with expertise and empathy. Your champion for success!",
    avatar: "/placeholder-avatar.jpg",
    skills: ["Customer Service", "Problem-Solving"],
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#"
    } 
  },
  {
    name: "Banvinder Singh",
    role: "Strategic Advisor",
    bio: "Growth hacker focused on data-driven marketing strategies. Helping not only ExoScrum but also our clients to scale new heights.",
    avatar: "/placeholder-avatar.jpg",
    skills: ["Marketing", "Growth Hacking"],
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#"
    }
  }
];

export default function TeamSection() {
  return (
    <section className="container mx-auto py-16 md:py-20 relative mt-12 md:mt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0"></div>
      <div className="relative z-10 px-4">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse team of creative professionals passionate about delivering exceptional results.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full"
              >
                <Card className="overflow-hidden text-center transition-all duration-300 glass border-[#ec1e64]/20 p-0 h-full flex flex-col relative group">
                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#ec1e64]/10 rounded-bl-full transition-all duration-300 group-hover:bg-[#ec1e64]/20"></div>
                  
                  <div className="p-6 flex-grow flex flex-col items-center relative z-10">
                    {/* Avatar with ring */}
                    <div className="relative mb-4">
                      <motion.div 
                        className="absolute inset-0 rounded-full bg-[#ec1e64] opacity-20"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      ></motion.div>
                      <Avatar className="w-24 h-24 mx-auto relative z-10 border-4 border-white dark:border-[#1a1a1a]">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                    </div>
                    
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-[#ec1e64] font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground flex-grow mb-4">{member.bio}</p>
                    
                    {/* Skills badges */}
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {member.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="px-2 py-1 text-xs rounded-full bg-[#ec1e64]/10 text-[#ec1e64] border border-[#ec1e64]/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Social links */}
                    <div className="flex gap-3">
                        {Object.entries(member.social).map(([platform, url], i) => (
                        <motion.a
                          key={i}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-[#ec1e64]/10 flex items-center justify-center text-[#ec1e64] hover:bg-[#ec1e64] hover:text-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {platform === "linkedin" ? <Linkedin className="w-4 h-4" /> : platform === "twitter" ? <Twitter className="w-4 h-4" /> : <Globe className="w-4 h-4" />}
                        </motion.a>
                        ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
 );
}
