import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustedBy } from "@/components/landing/TrustedBy";
import { Work } from "@/components/landing/Work";
import { Features } from "@/components/landing/Features";
import { Testimonials } from "@/components/landing/Testimonials";
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
          "Astrivix is a web development agency designing and building fast, beautiful websites and digital products for startups and brands.",
      },
      { property: "og:title", content: "Astrivix — Web Development Studio" },
      {
        property: "og:description",
        content:
          "Web design and development for ambitious brands. SaaS platforms, e-commerce, and brand sites that convert.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Work />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
