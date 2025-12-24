import { AboutSection } from "@/components/sections/about";
import { BlogSection } from "@/components/sections/blog-section";
import { CaseStudies } from "@/components/sections/case-studies";
import { ClientLogos } from "@/components/sections/client-logos";
import { FAQ } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Newsletter } from "@/components/ui/newsletter";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <Services />
      <Process />
      <CaseStudies />
      <Testimonials />
      <BlogSection limit={3} />
      <FAQ />
      <Newsletter />
      <AboutSection />
    </>
  );
}
