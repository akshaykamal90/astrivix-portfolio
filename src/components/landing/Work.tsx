import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Nebula Analytics",
    category: "SaaS Platform",
    description: "End-to-end product design and Next.js build for a data analytics suite.",
    image: work1,
  },
  {
    title: "Maison Édit",
    category: "E-commerce",
    description: "Editorial Shopify storefront for a luxury fashion label.",
    image: work2,
  },
  {
    title: "Pulse Finance",
    category: "Fintech App",
    description: "React Native mobile banking experience with custom design system.",
    image: work3,
  },
  {
    title: "Studio Orbit",
    category: "Brand Site",
    description: "Award-winning portfolio site for a creative production studio.",
    image: work4,
  },
];

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Selected Work
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Recent projects we're proud of.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            From SaaS dashboards to e-commerce flagships — every build is crafted
            for speed, accessibility, and a measurable impact on growth.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-card transition-spring hover:border-primary/40 hover:shadow-glow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading={i < 2 ? "eager" : "lazy"}
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition-spring group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-primary-glow">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border/60 bg-surface/80 backdrop-blur transition-spring group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
