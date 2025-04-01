import Features from "./components/home/Features";
import HeroSection from "./components/home/HeroSection";
import Team from "./components/about/Team";
import Services from "./components/services/Services";
import Videography from "./components/home/Videography";
import InfoCards from "./components/InfoCards";
import Testimonials from "./components/testimonials/Testimonials";
import SocialMediaSection from "./components/social-icons/SocialIconsList";
import HireNow from "./components/home/HireNow";

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
