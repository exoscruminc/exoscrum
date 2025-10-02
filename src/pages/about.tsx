import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-12 md:py-16 relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ec1e64]/5 z-0"></div>
        <div className="max-w-4xl mx-auto relative z-10 px-4">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">About exoscrum</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are a team of passionate designers, developers, and strategists creating digital experiences that matter.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            <Card className="p-6 md:p-8 hover-lift transition-all duration-300 glass border border-[#ec1e64]/20">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">Our Mission</h2>
              <p className="text-muted-foreground text-sm md:text-base">
                We believe in the power of technology to transform businesses and create meaningful connections between brands and their audiences. Our mission is to craft digital experiences that not only look beautiful but also drive real results for our clients.
              </p>
            </Card>
            
            <Card className="p-6 md:p-8 hover-lift transition-all duration-300 glass border border-[#ec1e64]/20">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">Our Vision</h2>
              <p className="text-muted-foreground text-sm md:text-base">
                To be the leading digital agency that bridges the gap between innovative technology and human-centered design, creating solutions that inspire and engage while delivering measurable business value.
              </p>
            </Card>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">Why Choose exoscrum?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: "Innovation", desc: "We stay ahead of trends to deliver cutting-edge solutions" },
                { title: "Quality", desc: "We maintain the highest standards in everything we create" },
                { title: "Partnership", desc: "We work closely with clients as trusted advisors" }
              ].map((item, index) => (
                <Card key={index} className="p-5 md:p-6 hover-lift transition-all duration-300 glass border border-[#ec1e64]/20">
                  <h3 className="text-lg md:text-xl font-bold mb-2 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">{item.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
