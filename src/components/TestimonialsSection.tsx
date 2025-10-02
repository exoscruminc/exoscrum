import { Card, CardTitle } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';

const testimonials = [
 {
    name: "Sarah Johnson",
    role: "CEO, TechNova",
    content: "exoscrum transformed our digital presence completely. Their team delivered beyond our expectations.",
    avatar: "/placeholder-avatar.jpg"
 },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthLabs",
    content: "The website they built for us increased our conversion rate by 45% in just three months.",
    avatar: "/placeholder-avatar.jpg"
 },
  {
    name: "Emma Rodriguez",
    role: "Founder, InnovateX",
    content: "Working with exoscrum was a game-changer for our startup. Professional, creative, and results-driven.",
    avatar: "/placeholder-avatar.jpg"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="container mx-auto py-16 md:py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ec1e64]/5 to-transparent z-0"></div>
      <div className="relative z-10 px-4">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Do not just take our word for it. Here is what our clients have to say about working with us.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="p-5 md:p-6 hover-lift transition-all duration-300 glass h-full flex flex-col border-[#ec1e64]/20">
              <div className="flex items-start space-x-3 md:space-x-4 flex-grow">
                <p className="text-muted-foreground mb-3 md:mb-4 italic text-sm md:text-base flex-grow">&quot;{testimonial.content}&quot;</p>
              </div>
              <div className="mt-auto">
                <CardTitle className="text-base font-bold">{testimonial.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
 );
}
