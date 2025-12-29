import Hero from "@/components/sections/Hero";
import WhoWeAre from "@/components/sections/WhoWeAre";
import ChooseYourJourney from "@/components/sections/ChooseYourJourney";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Testimonials from "@/components/sections/Testimonials";
import StartYourJourney from "@/components/sections/StartYourJourney";
import BlogPreview from "@/components/sections/BlogPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <ChooseYourJourney />
      <FeaturedProjects />
      <Testimonials />
      <StartYourJourney />
      <BlogPreview />
    </>
  );
}
