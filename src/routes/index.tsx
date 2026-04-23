import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { Work } from "@/components/landing/Work";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Astrivix — Web Development Studio for Ambitious Brands" },
      {
        name: "description",
        content:
          "Astrivix is a web development studio showcasing fast, beautiful websites and digital products built for ambitious brands.",
      },
      { property: "og:title", content: "Astrivix — Web Development Studio" },
      {
        property: "og:description",
        content:
          "Selected work from Astrivix — SaaS platforms, e-commerce, and brand sites that convert.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <Work />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
