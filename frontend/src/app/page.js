'use client'
import Hero from "@/components/page/Hero";
import WhoWeAre from "@/components/page/WhoWeAre";
import WhyChooseUs from "@/components/page/WhyChooseUs";
import OurServices from "@/components/page/OurServices";
import SocialProof from "@/components/page/SocialProof";
import Blog from "@/components/page/Blog";
import Faq from "@/components/page/Faq";
import ContactUs from "@/components/page/ContactUs";
import Footer from "@/components/page/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center bg-white">
          <Hero />
          <WhoWeAre />
          <WhyChooseUs />
          <OurServices />
          <SocialProof />
          <Blog />
          <Faq />
          <ContactUs />
          <Footer />
      </div>
    </>
  );
}
