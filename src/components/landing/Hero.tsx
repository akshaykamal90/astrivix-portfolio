import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Download, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "1234567890"; // TODO: replace with your number in international format (no +, no spaces)
const WHATSAPP_MESSAGE = "Hi Astrivix, I'd like to discuss a project.";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-24 pb-24 md:pt-32 md:pb-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Web design & development studio
          </div>

          <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
            Portfolio of{" "}
            <span className="text-gradient">Astrivix</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            A selection of fast, beautiful websites and digital products we've
            crafted for ambitious brands and startups.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary text-primary-foreground shadow-glow transition-spring hover:scale-105"
            >
              <a href="#work">
                View Our Work <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border/60 bg-surface/40 backdrop-blur">
              <a
                href="/astrivix-brochure.pdf"
                download="Astrivix-Brochure.pdf"
              >
                <Download className="h-4 w-4" /> Download Brochure
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border/60 bg-surface/40 backdrop-blur"
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
