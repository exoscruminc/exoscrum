import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TermsOfUse() {
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
                Terms of Use
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
                      Agreement to Terms
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;) and exoscrum (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the &quot;Site&quot;).
                    </p>
                    <p className="text-muted-foreground">
                      You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                      Intellectual Property Rights
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions.
                    </p>
                    <p className="text-muted-foreground">
                      The Content and the Marks are provided on the Site &quot;AS IS&quot; for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                      User Representations
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      By using the Site, you represent and warrant that:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                      <li>All registration information you submit will be true, accurate, current, and complete</li>
                      <li>You have the legal capacity and you agree to comply with these Terms of Use</li>
                      <li>You are not a minor in the jurisdiction in which you reside</li>
                      <li>You will not access the Site through automated or non-human means</li>
                      <li>You will not use the Site for any illegal or unauthorized purpose</li>
                      <li>Your use of the Site will not violate any applicable law or regulation</li>
                    </ul>
                    <p className="text-muted-foreground">
                      If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                      Prohibited Activities
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      As a user of the Site, you agree not to:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us</li>
                      <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information</li>
                      <li>Circumvent, disable, or otherwise interfere with security-related features of the Site</li>
                      <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site</li>
                      <li>Use any information obtained from the Site in order to harass, abuse, or harm another person</li>
                      <li>Make improper use of our support services or submit false reports of abuse or misconduct</li>
                      <li>Use the Site in a manner inconsistent with any applicable laws or regulations</li>
                    </ul>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                      User Generated Contributions
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      The Site may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, &quot;Contributions&quot;).
                    </p>
                    <p className="text-muted-foreground">
                      Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                      <li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party</li>
                      <li>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms of Use</li>
                      <li>Your Contributions are not false, inaccurate, or misleading</li>
                      <li>Your Contributions do not violate any applicable law, regulation, or rule</li>
                    </ul>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                      Contribution License
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      By posting your Contributions to any part of the Site, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                      Submissions
                    </h2>
                    <p className="text-muted-foreground">
                      You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site (&quot;Submissions&quot;) provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                      Third-Party Websites and Content
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      The Site may contain (or you may be sent via the Site) links to other websites (&quot;Third-Party Websites&quot;) as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties (&quot;Third-Party Content&quot;).
                    </p>
                    <p className="text-muted-foreground">
                      These Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Site or any Third-Party Content, including without limitation any link contained in a Third-Party Website, or any changes or updates to a Third-Party Website. We are not responsible for any form of transmission received from any Third-Party Websites. We are providing these links to Third-Party Websites to you only as a convenience, and the inclusion of any link does not imply endorsement by us.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                      Site Management
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      We reserve the right, but not the obligation, to:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Monitor the Site for violations of these Terms of Use</li>
                      <li>Take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use</li>
                      <li>In our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof</li>
                      <li>In our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems</li>
                      <li>Otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site</li>
                    </ul>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                      Term and Termination
                    </h2>
                    <p className="text-muted-foreground">
                      These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE TO YOU, TERMINATE YOUR ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), AT ANY TIME FOR ANY REASON OR NO REASON, INCLUDING WITHOUT LIMITATION, IF WE BELIEVE THAT YOU HAVE VIOLATED ANY PROVISION OF THESE TERMS OF USE. WE MAY TERMINATE YOUR ACCESS TO THE SITE OR DELETE ANY ACCOUNT YOU MAY HAVE AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                      Modifications and Interruptions
                    </h2>
                    <p className="text-muted-foreground">
                      We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                      Governing Law
                    </h2>
                    <p className="text-muted-foreground">
                      These Terms of Use and your use of the Site are governed by and construed in accordance with the laws of the Province of Ontario and applicable federal laws of Canada applicable to agreements made and to be entirely performed within the Province of Ontario, without regard to its conflict of law principles.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                      Dispute Resolution
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">Informal Negotiations</h3>
                        <p className="text-muted-foreground">
                          To expedite resolution and control the cost of any dispute, controversy, or claim related to these Terms of Use (&quot;Dispute&quot;), you and we agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one party to the other party.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold mb-2">Binding Arbitration</h3>
                        <p className="text-muted-foreground">
                          If the parties are unable to resolve a Dispute through informal negotiations, the Dispute (except those Disputes expressly excluded below) will be finally and exclusively resolved by binding arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association (&quot;AAA&quot;) and, where appropriate, the AAA&apos;s Supplementary Procedures for Consumer Related Disputes (&quot;AAA Consumer Rules&quot;), both of which are available at the AAA website.
                        </p>
                      </div>
                    </div>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                      Corrections
                    </h2>
                    <p className="text-muted-foreground">
                      There may be information on the Site that contains typographical errors, inaccuracies, or omissions that may relate to the Site, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                      Disclaimer
                    </h2>
                    <p className="text-muted-foreground">
                      THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE&apos;S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                      Limitations of Liability
                    </h2>
                    <p className="text-muted-foreground">
                      IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 expressive-font bg-clip-text text-transparent bg-gradient-to-r from-[#ec1e64] to-[#ff6b6b]">
                      Contact Us
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>Email: 
                        <Link href="mailto:legal@exoscrum.com" className="text-[#ec1e64] hover:underline"> legal@exoscrum.com</Link>
                      </li>
                      <li>By visiting this page on our website: 
                        <Link href="/contact" className="text-[#ec1e64] hover:underline"> Contact Page</Link>
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
