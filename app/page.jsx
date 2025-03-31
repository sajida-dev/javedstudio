import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import TeamSection from "./components/T";
import Team from "./components/Team";
import Services from "./components/Services";
import Videography from "./components/Videography";
import SocialMediaSection from "./components/Social";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <Features />
        <Services />
        <TeamSection />
        <Team />
        <Videography />
        <SocialMediaSection />
      </main>
    </>
  );
}
