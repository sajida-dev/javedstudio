import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Team from "./components/Team";
import Services from "./components/Services";
import Videography from "./components/Videography";
import InfoCards from "./components/InfoCards";
import Testimonials from "./components/testimonials/Testimonials";
import SocialMediaSection from "./components/social-icons/SocialIconsList";
import HireNow from "./components/HireNow";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <Features />
        <Services />
        <Videography />
        <InfoCards />
        <HireNow />
        <Testimonials />
        <SocialMediaSection />
      </main>
    </>
  );
}
