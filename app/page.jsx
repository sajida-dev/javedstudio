import Features from "./components/home/Features";
import HeroSection from "./components/home/HeroSection";
import Services from "./components/home/Services";
import Videography from "./components/home/Videography";
import Testimonials from "./components/testimonials/Testimonials";
import SocialMediaSection from "./components/social-icons/SocialIconsList";
import HireNow from "./components/home/HireNow";
import LatestWorks from "./components/home/LatestWorks";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <Features />
        <Services />
        <Videography />
        <LatestWorks />
        <HireNow />
        <Testimonials />
        <SocialMediaSection />
      </main>
    </>
  );
}
