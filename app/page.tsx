'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Hero from '@/components/Hero';
import StatsStrip from '@/components/StatsStrip';
import TrustStrip from '@/components/TrustStrip';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CtaBand from '@/components/CtaBand';
import Contact from '@/components/Contact';

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <StatsStrip />
      <TrustStrip />
      <WhyChooseUs />
      <Services />
      <HowItWorks />
      <Testimonials />
      <CtaBand />
      <Contact />
    </>
  );
}
