import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary shadow-glow">
                <span className="flex h-full w-full items-center justify-center text-sm font-bold text-primary-foreground">
                  A
                </span>
              </div>
              <span className="text-lg font-semibold tracking-tight">Astrivix</span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A web development studio building beautiful, fast, and conversion-focused
              digital products for ambitious brands.
            </p>
            <div className="mt-6 flex gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-surface/60 text-muted-foreground transition-smooth hover:border-primary/40 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Studio</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><a href="#work" className="hover:text-foreground">Work</a></li>
              <li><a href="#services" className="hover:text-foreground">Services</a></li>
              <li><a href="#testimonials" className="hover:text-foreground">Testimonials</a></li>
              <li><a href="#cta" className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><a href="mailto:hello@astrivix.com" className="hover:text-foreground">hello@astrivix.com</a></li>
              <li>Remote · Worldwide</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Astrivix Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
