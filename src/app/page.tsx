import Hero from "@/components/sections/Hero";
import Days from "@/components/sections/Days";
import Community from "@/components/sections/Community";
import Sponsors from "@/components/sections/Sponsors";
import SuggestionCta from "@/components/sections/SuggestionCta";
import Faq from "@/components/sections/Faq";
import PastEventsPreview from "@/components/sections/PastEventsPreview";
import RegisterCta from "@/components/sections/RegisterCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Days />
      <Community />
      <Sponsors />
      <SuggestionCta />
      <Faq />
      <PastEventsPreview />
      <RegisterCta />
    </>
  );
}
