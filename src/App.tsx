import { Hero } from "@/components/landing/Hero";
import { Work } from "@/components/landing/Work";
import { AboutBrand } from "@/components/landing/AboutBrand";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Work />
        <AboutBrand />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
