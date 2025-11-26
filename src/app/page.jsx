import Banner from "@/components/Banner";
import FeatureSection from "@/components/FeatureSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen bg-zinc-50 font-sans px-5">
      <Banner></Banner>
      <FeatureSection></FeatureSection>
    </div>
  );
}
