import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { ProofBar } from '@/components/sections/ProofBar';
import { Problem } from '@/components/sections/Problem';
import { WhyGigMax } from '@/components/sections/WhyGigMax';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Comparison } from '@/components/sections/Comparison';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Founder } from '@/components/sections/Founder';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProofBar />
        <Problem />
        <WhyGigMax />
        <HowItWorks />
        <Comparison />
        <CaseStudies />
        <Founder />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
