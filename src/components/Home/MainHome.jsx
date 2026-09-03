'use client';
import HeroSection from './HeroSection';
import HowItWorksSection from './HowItWorksSection';
import FeaturesSection from './FeaturesSection';
import CRMSpotlightSection from './CRMSpotlightSection';
import IntegrationEcosystemSection from './IntegrationEcosystemSection';
import TestimonialsSection from './TestimonialsSection';
import PartnersSection from './PartnersSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';

export default function MainHome() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <CRMSpotlightSection />
      <IntegrationEcosystemSection />
      <TestimonialsSection />
      <PartnersSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
