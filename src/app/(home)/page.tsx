import { AboutSection } from "@/components/AboutSection";
import { FavoriteProjects } from "@/components/FavoriteProjects";
import { Hero } from "@/components/Hero";
import SectionTwo from "@/components/SectionTwo";
import { Metadata } from "next";
("@/components/Hero");

export const metadata: Metadata = {
  title: "Ahmad hanki",
  description: "Explore my world",
};

export default function Home() {
  return (
    <div className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <Hero />
      <SectionTwo />
      <AboutSection />
      <FavoriteProjects />
    </div>
  );
}
