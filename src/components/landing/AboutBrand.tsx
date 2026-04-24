import astrivixImg from "@/assets/astrivix.png";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function AboutBrand() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Our Official Brand
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Meet the Agency Behind the Magic.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We create digital designs that help brands move faster and convert better. Your business deserves more than just a website. It needs results.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <a
            href="https://astrivix.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-[2.5rem] border border-border/50 bg-gradient-card p-2 sm:p-4 transition-spring hover:border-primary/40 hover:shadow-glow"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl">
              <img
                src={astrivixImg}
                alt="Astrivix Official Website"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12 flex flex-col sm:flex-row items-end justify-between gap-6">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Astrivix.in
                  </h3>
                  <p className="mt-2 text-white/70 max-w-md">
                    Explore our full suite of services, brand identity design, UI/UX, and app development.
                  </p>
                </div>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow transition-spring group-hover:scale-110">
                  <ArrowUpRight className="h-6 w-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
