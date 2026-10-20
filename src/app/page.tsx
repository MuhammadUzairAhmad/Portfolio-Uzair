import { Hero } from "@/components/home/hero";
import {
  Services,
  SelectedWork,
  ToolsSection,
  ExperienceSection,
  ApproachSection,
  AboutTeaser,
} from "@/components/home/sections";
import { ContactCta } from "@/components/layout/footer";
export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Services />
      <SelectedWork />
      <ToolsSection />
      <ExperienceSection />
      <ApproachSection />
      <AboutTeaser />
      <ContactCta />
    </main>
  );
}
