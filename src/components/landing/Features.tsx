import { Code2, Palette, Rocket, Search, Smartphone, Zap } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Design that converts",
    description: "Brand-led interfaces engineered around user psychology and your business goals.",
  },
  {
    icon: Code2,
    title: "Production-grade code",
    description: "Hand-crafted React, Next.js, and TypeScript — typed, tested, and built to scale.",
  },
  {
    icon: Zap,
    title: "Blazing performance",
    description: "Lighthouse 95+ by default. Edge rendering, smart caching, zero bloat.",
  },
  {
    icon: Smartphone,
    title: "Responsive by default",
    description: "Pixel-perfect on every device — phones, tablets, desktops, and beyond.",
  },
  {
    icon: Search,
    title: "SEO-first foundation",
    description: "Semantic markup, structured data, and metadata that ranks from day one.",
  },
  {
    icon: Rocket,
    title: "Launch in weeks",
    description: "Sprint-based delivery with weekly demos. From kickoff to live in 4–8 weeks.",
  },
];

export function Features() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-40" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            What we do
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Everything you need to ship.
          </h2>
          <p className="mt-4 text-muted-foreground">
            A full-service web studio — strategy, design, engineering, and growth
            under one roof.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border/50 bg-gradient-card p-8 transition-spring hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
