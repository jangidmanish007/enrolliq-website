'use client';
import ServicesHero from './ServicesHero';
import ServicesTabs from './ServicesTabs';
import FAQSection from '@/components/Home/FAQSection';

export default function MainServices() {
  return (
    <>
      <ServicesHero />
      <ServicesTabs />
      <FAQSection />
    </>
  );
}
