import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* Dark gradient background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff] via-[#f7f7f7] to-[#ec1e64]/10 z-0 animate-gradient"></div>

      <div className="container mx-auto px-4 relative z-10">
        <Card className="bg-gradient-to-br from-[#ec1e64]/10 to-[#ff6b6b]/10 backdrop-blur-xl border border-[#ec1e64]/30 p-8 md:p-12 text-center shadow-xl rounded-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b] animate-text-gradient">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg md:text-xl text-dark mb-8 max-w-2xl mx-auto">
              Lets discuss how our innovative solutions can help achieve your business goals and drive growth. 
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="hover-lift bg-primary-gradient text-white px-8 py-5 text-lg rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Add subtle floating animations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500 rounded-full opacity-20 blur-xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-500 rounded-full opacity-20 blur-xl animate-float-reverse"></div>
    </section>
  );
}
