import takeoffImg from "@/assets/takeoff-holidayz.png";
import nretImg from "@/assets/nret.png";
import omniblendImg from "@/assets/omniblend.png";
import portfolioImg from "@/assets/portfolio-website.png";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Takeoff Holidayz",
    category: "Travel • UI/UX • Responsive",
    description: "A modern travel website crafted to simplify the booking journey and enhance user experience.",
    image: takeoffImg,
    link: "https://www.takeoffholidayz.in",
  },
  {
    title: "NRET Institute",
    category: "LMS • Web Design • UI/UX",
    description: "A structured LMS platform crafted to simplify online course delivery and enhance student engagement.",
    image: nretImg,
    link: "https://nret.vercel.app",
  },
  {
    title: "OmniBlend – Randall Harvest",
    category: "E-commerce • Web Design • UI/UX",
    description: "A refined e-commerce experience built for a luxury spice brand with a seamless buying journey.",
    image: omniblendImg,
    link: "https://omniblend-v2-1.vercel.app",
  },
  {
    title: "Personal Branding Portfolio",
    category: "Personal Branding • UI/UX",
    description: "A refined portfolio experience built to position individuals as strong personal brands.",
    image: portfolioImg,
    link: "https://nithin-surendran-menon.vercel.app",
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
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col md:block overflow-hidden rounded-3xl border border-border/50 bg-gradient-card transition-spring hover:border-primary/40 hover:shadow-glow"
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
                <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6 md:absolute md:inset-x-0 md:bottom-0 md:p-8">
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
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
