const brands = ["Nebula", "Vertex", "Lumen", "Quanta", "Orbital", "Northwind", "Helix"];

export function TrustedBy() {
  return (
    <section className="border-y border-border/40 bg-surface/30 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by teams at
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-7">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex items-center justify-center text-xl font-semibold tracking-tight text-muted-foreground/70 transition-smooth hover:text-foreground"
              style={{ fontFamily: "ui-serif, Georgia, serif" }}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
