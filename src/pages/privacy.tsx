import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-12 md:py-16 relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ec1e64]/5 z-0"></div>
        <div className="max-w-4xl mx-auto relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            
            <Card className="p-6 md:p-8 hover-lift transition-all duration-300 glass border border-[#ec1e64]/20">
              <CardContent className="prose prose-lg max-w-none">
                <div className="space-y-6 md:space-y-8">
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                      Introduction
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      At exoscrum (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                    </p>
                    <p className="text-muted-foreground">
                      Please read this Privacy Policy carefully. By accessing or using our website and services, you agree to be bound by the terms of this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                      Information We Collect
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">Personal Information</h3>
                        <p className="text-muted-foreground mb-2">
                          We may collect personally identifiable information that you voluntarily provide to us when you:
                        </p>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                          <li>Register on our website</li>
                          <li>Subscribe to our newsletter</li>
                          <li>Fill out a form</li>
                          <li>Contact us</li>
                          <li>Request information</li>
                        </ul>
                        <p className="text-muted-foreground mt-2">
                          This information may include your name, email address, phone number, company name, job title, and any other information you choose to provide.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold mb-2">Automatically Collected Information</h3>
                        <p className="text-muted-foreground mb-2">
                          When you visit our website, we automatically collect certain information about your device, including:
                        </p>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                          <li>IP address</li>
                          <li>Browser type</li>
                          <li>Operating system</li>
                          <li>Referring/exit pages</li>
                          <li>Date and time stamps</li>
                          <li>Clickstream data</li>
                        </ul>
                        <p className="text-muted-foreground mt-2">
                          We collect this information using cookies and similar tracking technologies.
                        </p>
                      </div>
                    </div>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                      How We Use Your Information
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      We use the information we collect for various purposes, including:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>To provide, operate, and maintain our website and services</li>
                      <li>To improve, personalize, and expand our website and services</li>
                      <li>To understand and analyze how you use our website</li>
                      <li>To develop new products, services, features, and functionality</li>
                      <li>To communicate with you, either directly or through one of our partners</li>
                      <li>To send you emails and other communications</li>
                      <li>To find and prevent fraud</li>
                      <li>To comply with legal obligations</li>
                    </ul>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                      Cookies and Tracking Technologies
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                    </p>
                    <div className="bg-[#ec1e64]/5 p-4 rounded-lg border border-[#ec1e64]/20">
                      <h3 className="text-lg font-bold mb-2">Types of Cookies We Use:</h3>
                      <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                        <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                        <li><strong>Statistics Cookies:</strong> Help us understand how visitors interact with our website</li>
                        <li><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant advertisements</li>
                      </ul>
                    </div>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                      Third-Party Services
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      We may employ third-party companies and individuals due to the following reasons:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                      <li>To facilitate our service</li>
                      <li>To provide the service on our behalf</li>
                      <li>To perform service-related services</li>
                      <li>To assist us in analyzing how our service is used</li>
                    </ul>
                    <p className="text-muted-foreground">
                      These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                      Data Security
                    </h2>
                    <p className="text-muted-foreground">
                      We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                      Your Rights
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Depending on your location, you may have the following rights regarding your personal information:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>The right to access, update, or delete the information we have on you</li>
                      <li>The right of rectification</li>
                      <li>The right to object</li>
                      <li>The right of restriction</li>
                      <li>The right to data portability</li>
                      <li>The right to withdraw consent</li>
                    </ul>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                      Changes to This Privacy Policy
                    </h2>
                    <p className="text-muted-foreground">
                      We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this Privacy Policy.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                      Contact Us
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>By email: 
                        <Link href="mailto:privacy@exoscrum.com" className="text-[#ec1e64] hover:underline">privacy@exoscrum.commence</Link> 
                        </li>
                      <li>By visiting this page on our website: 
                        <Link href="/contact" className="text-[#ec1e64] hover:underline">Contact Page</Link>
                      </li>
                    </ul>
                  </section>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
