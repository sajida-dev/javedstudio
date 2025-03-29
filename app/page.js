import AnimiCard from "./components/AnimiCard";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import CosmosBackground from "./components/hero";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <Features />
        <AnimiCard />
        <Features />
      </main>
    </>
  );
}
