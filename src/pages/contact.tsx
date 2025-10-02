import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [state, handleSubmit] = useForm("xanpjepn"); // Replace with your Formspree form ID (e.g., "xyz123")
  const [honeypotValue, setHoneypotValue] = useState("");

  // Redirect to home after successful submission (in a real scenario, you might want to use router.push)
  useEffect(() => {
    if (state.succeeded) {
      // Auto-redirect after 3 seconds
      const timer = setTimeout(() => {
        window.location.href = "/";
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);
  
  if (state.succeeded) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto py-12 md:py-16 relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ec1e64]/5 z-0"></div>
          <div className="max-w-4xl mx-auto relative z-10 px-4 flex items-center justify-center min-h-[60vh]">
            <Card className="w-full p-8 md:p-12 text-center hover-lift transition-all duration-300 glass border border-[#ec1e64]/20">
              <div className="text-5xl mb-4 text-green-50">✓</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">Message Sent Successfully!</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Thank you for contacting us. We will get back to you as soon as possible.
              </p>
              <p className="text-muted-foreground mb-6">Redirecting to home page...</p>
              <Button asChild className="hover-lift bg-primary-gradient text-white mx-auto w-full max-w-xs">
                <Link href="/">Back to Home</Link>
              </Button>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-12 md:py-16 relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ec1e64]/5 z-0"></div>
        <div className="max-w-4xl mx-auto relative z-10 px-4">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">
              Have a project in mind? We would love to hear about it.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <Card className="p-5 md:p-6 hover-lift transition-all duration-300 glass border border-[#ec1e64]/20">
              <CardHeader>
                <CardTitle className="font-bold text-[#ec1e64] text-lg md:text-xl">Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form and our team will get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  {/* Honeypot field - hidden from users but visible to bots */}
                  <div style={{ display: 'none' }}>
                    <label htmlFor="honeypot">Do not fill this in if you are human:</label>
                    <input
                      id="honeypot"
                      type="text"
                      name="_honeypot"
                      value={honeypotValue}
                      onChange={(e) => setHoneypotValue(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Input id="name" name="name" placeholder="Your Name" className="bg-white/80 border-[#ec1e64]/20 w-full" required />
                    <ValidationError 
                      prefix="Name" 
                      field="name"
                      errors={state.errors}
                    />
                  </div>
                  <div className="space-y-2">
                    <Input id="email" type="email" name="email" placeholder="Your Email" className="bg-white/80 border-[#ec1e64]/20 w-full" required />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                  <div className="space-y-2">
                    <Input id="subject" name="subject" placeholder="Subject" className="bg-white/80 border-[#ec1e64]/20 w-full" required />
                    <ValidationError 
                      prefix="Subject" 
                      field="subject"
                      errors={state.errors}
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea id="message" name="message" placeholder="Your Message" rows={4} className="bg-white/80 border-[#ec1e64]/20 w-full" required />
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                  
                  <Button type="submit" disabled={state.submitting} className="w-full hover-lift bg-primary-gradient text-white">
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </Button>
                  
                  {/* Show error message if submission failed */}
                  {state.errors && Object.keys(state.errors).length > 0 && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                      <p className="font-medium mb-1">Submission failed</p>
                      <p>Please try again or contact us directly at <a href="mailto:hello@exoscrum.com" className="underline">hello@exoscrum.com</a></p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-6 md:space-y-8">
              <Card className="p-5 md:p-6 hover-lift transition-all duration-300 glass border border-[#ec1e64]/20">
                <CardHeader>
                  <CardTitle className="font-bold text-[#ec1e64] text-lg md:text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 md:space-y-4">
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">hello@exoscrum.com</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Ottawa, ON, Canada</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-5 md:p-6 hover-lift transition-all duration-300 glass border border-[#ec1e64]/20">
                <CardHeader>
                  <CardTitle className="font-bold text-[#ec1e64] text-lg md:text-xl">Office Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-muted-foreground">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
