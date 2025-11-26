import Banner from "@/components/Banner";
import Expert from "@/components/Expert";
import FeatureSection from "@/components/FeatureSection";
import HeroBanner from "@/components/HeroBanner";
import News from "@/components/News";
import Image from "next/image";
//

export default function Home() {
  return (
    <div className=" min-h-screen bg-zinc-50 font-sans px-5">
      <Banner></Banner>
      <FeatureSection></FeatureSection>
      <HeroBanner></HeroBanner>
      <Expert></Expert>
      <News></News>
    </div>
  );
}
