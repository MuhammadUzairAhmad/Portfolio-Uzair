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
import { profile } from "@/content/profile";
import { pageMetadata } from "@/lib/seo";

const title = `${profile.name} — ${profile.role}`;
export const metadata = {
  ...pageMetadata(
    title,
    "Explore projects and experience by Muhammad Uzair Ahmad, a full-stack developer specializing in MERN and Next.js.",
    "/",
  ),
  title: { absolute: title },
};

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Services />
      <SelectedWork />
      <ExperienceSection />
      <ToolsSection />
      <ApproachSection />
      <AboutTeaser />
      <ContactCta />
    </main>
  );
}
