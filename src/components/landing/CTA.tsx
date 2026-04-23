import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="px-6 py-24 md:py-32 lg:px-8">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border/60 bg-gradient-card p-10 text-center shadow-elegant md:p-20">
        <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-80" />
        <div className="absolute -left-32 -top-32 -z-10 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 -z-10 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />

        <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Have a project in mind?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-muted-foreground">
          Let's build something memorable. Tell us about your goals and we'll
          send back a proposal within 48 hours.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-gradient-primary text-primary-foreground shadow-glow transition-spring hover:scale-105"
          >
            <a href="mailto:hello@astrivix.com">
              Start a Project <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-border/60 bg-surface/40 backdrop-blur">
            <a href="#work">See more work</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
