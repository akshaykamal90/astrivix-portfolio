import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
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
            We build{" "}
            <span className="text-gradient">digital experiences</span>{" "}
            that convert.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            Astrivix is a web development agency crafting fast, beautiful
            websites and products for ambitious brands and startups.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary text-primary-foreground shadow-glow transition-spring hover:scale-105"
            >
              <a href="#cta">
                Start a Project <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border/60 bg-surface/40 backdrop-blur">
              <a href="#work">View Our Work</a>
            </Button>
          </div>

          <dl className="mt-16 grid grid-cols-3 gap-8 border-t border-border/40 pt-10 text-left">
            {[
              { v: "120+", l: "Projects shipped" },
              { v: "40+", l: "Happy clients" },
              { v: "5★", l: "Avg. rating" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="text-2xl font-semibold sm:text-3xl">{s.v}</dt>
                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
