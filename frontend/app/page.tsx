import HeroSection from "@/components/hero-section";
import { getHomePage } from "@/lib/strapi";

import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  // fetch data for meta
  const strapiData = await getHomePage();
  return {
    title: strapiData?.title || "Home",
    description: strapiData?.description || "Welcome to our website",
  };
}

export default async function Home() {
  const strapiData = await getHomePage();
  // const { title, description } = strapiData || {};
  const [heroSection] = strapiData?.sections || [];

  return (
    <main className="container mx-auto py-6">
      <HeroSection data={{ ...heroSection }} />
    </main>
  );
}
