import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="border-t py-12 md:py-16 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#ec1e64]/5 to-purple-400/5 z-0"></div>
      <div className="container mx-auto relative z-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h3 className="text-lg font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">exoscrum</h3>
            <p className="text-muted-foreground">
              Creating innovative digital solutions that transform businesses and drive growth.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-[#ec1e64] transition-colors">About</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-[#ec1e64] transition-colors">Services</Link></li>
              <li><Link href="/work" className="text-muted-foreground hover:text-[#ec1e64] transition-colors">Work</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-[#ec1e64] transition-colors">Terms of Use</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-[#ec1e64] transition-colors">Privacy Policy</Link></li> 
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="/careers" className="text-muted-foreground hover:text-[#ec1e64] transition-colors">Careers</Link></li>
              <li><Link href="#" className='text-muted-foreground hover:text-[#ec1e64] transition-colors'>Twitter</Link></li>
              <li><Link href="#" className='text-muted-foreground hover:text-[#ec1e64] transition-colors'>LinkedIn</Link></li>
              <li><Link href="#" className='text-muted-foreground hover:text-[#ec1e64] transition-colors'>GitHub</Link></li>
              <li><Link href="#" className='text-muted-foreground hover:text-[#ec1e64] transition-colors'>Dribbble</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">Contact</h3>
            <p className="text-muted-foreground mb-4">
              Have a project in mind? Let&apos;s talk.
            </p>
            <Button asChild className="hover-lift bg-primary-gradient text-white">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} exoscrum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
