import { Star } from "lucide-react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

const testimonials = [
  {
    quote:
      "Astrivix rebuilt our marketing site in six weeks and conversions jumped 64%. The team is sharp, fast, and genuinely cares about the craft.",
    name: "Elena Marquez",
    role: "Head of Growth, Nebula",
    avatar: avatar1,
  },
  {
    quote:
      "Best agency we've worked with. The handoff was so clean our engineers had nothing to fix — and the design speaks for itself.",
    name: "Marcus Bello",
    role: "CTO, Pulse Finance",
    avatar: avatar2,
  },
  {
    quote:
      "From strategy to launch, Astrivix felt like an extension of our team. Our new platform finally matches the ambition of the brand.",
    name: "Kenji Tanaka",
    role: "Founder, Studio Orbit",
    avatar: avatar3,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Loved by founders and teams.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border/50 bg-gradient-card p-8 transition-spring hover:border-primary/40 hover:shadow-glow"
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 flex-1 text-pretty text-base leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-border/40 pt-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
