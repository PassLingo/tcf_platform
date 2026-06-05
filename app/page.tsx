import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ExamsSection from "@/components/sections/ExamsSection";
import ResultsSection from "@/components/sections/ResultsSection";
import PricingSection from "@/components/sections/PricingSection";
import BlogSection from "@/components/sections/BlogSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhyUsSection />
        <ExamsSection />
        <ResultsSection />
        <PricingSection />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
