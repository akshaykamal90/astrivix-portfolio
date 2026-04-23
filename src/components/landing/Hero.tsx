import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Download, MessageCircle, ChevronDown } from "lucide-react";

const WHATSAPP_NUMBER = "1234567890"; // TODO: replace with your number in international format (no +, no spaces)
const WHATSAPP_MESSAGE = "Hi Astrivix, I'd like to discuss a project.";

import Grainient from "@/components/ui/Grainient";

export function Hero() {
  return (
    <>
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20">
      {/* Grainient Animated Background */}
      <div className="absolute inset-0 z-0">
        <Grainient
          color1="#000000"
          color2="#200589"
          color3="#B497CF"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold tracking-[0.15em] text-white/70 uppercase backdrop-blur-md">
          <Sparkles className="h-3 w-3 text-primary" />
          Web Development Studio
        </div>

        {/* Main Header */}
        <h1 className="text-center text-6xl font-bold leading-[0.95] tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="block text-white">Portfolio Of</span>
          <span className="text-gradient italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Astrivix
          </span>
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed tracking-wide text-white/50 sm:text-base">
          Boutique design & development studio crafting high-performance
          websites for startups that want to lead their industry.
        </p>

        {/* CTA Row */}
        <div className="mt-8 flex items-center gap-3">
          <Button
            asChild
            size="lg"
            className="group h-12 rounded-full bg-gradient-primary px-7 text-sm font-bold text-primary-foreground shadow-glow transition-all hover:scale-105 active:scale-95"
          >
            <a href="#work" className="flex items-center gap-2">
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>

          <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-white/10 bg-white/5 px-5 backdrop-blur-xl transition-all hover:bg-white/10">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline text-sm">WhatsApp</span>
            </a>
          </Button>

          <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-white/10 bg-white/5 px-5 backdrop-blur-xl transition-all hover:bg-white/10">
            <a href="/astrivix-brochure.pdf" download="Astrivix-Brochure.pdf">
              <Download className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <a href="#work" className="flex flex-col items-center gap-2 text-muted-foreground/60 transition-colors hover:text-primary">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </a>
      </div>
    </section>

    {/* Stats / Trust Row */}
    <StatsSection />
    </>
  );
}

/* ── Count-up hook ── */
function useCountUp(end: number, duration = 2000, start = false) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!start) {
      setValue(0);
      return;
    }

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo for a snappy feel
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.floor(eased * end));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [end, duration, start]);

  return value;
}

/* ── Stats Section ── */
const STATS = [
  { label: "Projects Delivered", end: 20, suffix: "+" },
  { label: "Clients", end: 30, suffix: "+" },
  { label: "Conversion", end: 45, suffix: "%" },
  { label: "Positive Feedback", end: 98, suffix: "%" },
] as const;

function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-background border-t border-border/10">
      <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-2 gap-y-12 gap-x-6 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <StatItem key={i} {...stat} animate={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({
  label,
  end,
  suffix,
  animate,
}: {
  label: string;
  end: number;
  suffix: string;
  animate: boolean;
}) {
  const count = useCountUp(end, 2000, animate);

  return (
    <div className="text-center">
      <div className="text-5xl font-extrabold tracking-tight text-foreground md:text-6xl">
        {count}
        <span className="text-primary">{suffix}</span>
      </div>
      <div className="mt-2 text-sm font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </div>
    </div>
  );
}
