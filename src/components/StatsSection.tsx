import AnimatedSection from '@/components/AnimatedSection';

export default function StatsSection() {
  const stats = [
    { value: "200+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "8+", label: "Years Experience" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="py-16 md:py-20 relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ec1e64]/10 to-purple-400/10 z-0"></div>
      <div className="container mx-auto relative z-10 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="space-y-2 p-4 md:p-6 glass rounded-xl border border-[#ec1e64]/20">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">{stat.value}</h3>
                <p className="text-muted-foreground font-medium text-sm md:text-base">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
