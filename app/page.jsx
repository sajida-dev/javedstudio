import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import TeamSection from "./components/T";
import Team from "./components/Team";
import Services from "./components/Services";
import Videography from "./components/Videography";
import InfoCards from "./components/InfoCards";
import BookNow from "./components/BookNow";
import Testimonials from "./components/testimonials/Testimonials";
import SocialMediaSection from "./components/social-icons/SocialIconsList";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <Features />
        <Services />
        <Videography />
        <InfoCards />
        <BookNow />
        <Testimonials />
        <SocialMediaSection />
      </main>
    </>
  );
}
