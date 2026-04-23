import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#cta" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-smooth",
        scrolled
          ? "border-b border-border/50 bg-background/70 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative h-8 w-8 rounded-lg bg-gradient-primary shadow-glow transition-spring group-hover:scale-110">
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-primary-foreground">
              A
            </span>
          </div>
          <span className="text-lg font-semibold tracking-tight">Astrivix</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-smooth hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
            <a href="#cta">Start a Project</a>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="bg-gradient-primary text-primary-foreground">
              <a href="#cta" onClick={() => setOpen(false)}>Start a Project</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
