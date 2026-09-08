import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyStandserve from "../components/WhyStandserve";
import RegulatoryContext from "../components/RegulatoryContext";
import HowItWorks from "../components/HowItWorks";
import Stats from "../components/Stats";
import FAQ from "../components/FAQ";
import CTABanner from "../components/CTABanner";


export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <RegulatoryContext />
      
      <WhyStandserve />
      
      <HowItWorks />
      
      <FAQ />
      <CTABanner />
        
    </>
  );
}