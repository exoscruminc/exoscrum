import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import StatsSection from '@/components/StatsSection';
import ProcessSection from '@/components/ProcessSection';
import TechnologiesSection from '@/components/TechnologiesSection';
import AIDrivenSection from '@/components/AIDrivenSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <ProcessSection />
        <AIDrivenSection />
        <TechnologiesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
 );
}
