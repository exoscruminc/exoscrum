import { Card, CardContent } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We start by understanding your business goals, target audience, and unique challenges to shape our approach."
  },
 {
    step: "02", 
    title: "Strategy",
    description: "Based on our findings, we develop a comprehensive digital strategy tailored to your specific needs."
  },
  {
    step: "03",
    title: "Design",
    description: "Our designers create intuitive and engaging interfaces that align with your brand identity."
  },
  {
    step: "04",
    title: "Development",
    description: "Our developers bring the design to life with clean code and cutting-edge technologies."
  },
  {
    step: "05",
    title: "Testing",
    description: "We rigorously test all functionality to ensure quality, performance, and user experience."
  },
  {
    step: "06",
    title: "Launch",
    description: "We deploy your solution and provide ongoing support to ensure success."
  }
];

export default function ProcessSection() {
  return (
    <section className="container mx-auto py-16 md:py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ec1e64]/5 to-transparent z-0"></div>
      <div className="relative z-10 px-4">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to deliver exceptional results for our clients.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {processSteps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="p-5 md:p-6 hover-lift transition-all duration-300 glass h-full flex flex-col border-[#ec1e64]/20">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="text-2xl md:text-3xl font-bold text-[#ec1e64] mr-3 md:mr-4 expressive-font">{step.step}</div>
                  <h3 className="text-lg md:text-xl font-bold expressive-font">{step.title}</h3>
                </div>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm md:text-base">{step.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
