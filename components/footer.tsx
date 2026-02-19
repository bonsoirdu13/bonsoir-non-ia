export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border/40 py-12 sm:py-16">
      {/* Subtle top glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 10%, oklch(0.80 0.13 75 / 0.3) 50%, transparent 90%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo recap */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-lg font-bold tracking-wide text-foreground">
                TimeTravel
              </span>
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
                Agency
              </span>
            </div>
            <p className="font-sans text-xs text-muted-foreground/60">
              Premium journeys through time since 2026
            </p>
          </div>

          {/* Links - stack on mobile */}
          <nav
            className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8"
            aria-label="Footer navigation"
          >
            <a
              href="#"
              className="font-sans text-sm font-medium uppercase tracking-[0.1em] text-muted-foreground transition-colors duration-300 hover:text-foreground active:text-foreground sm:text-xs"
            >
              Legal Notice
            </a>
            <a
              href="#"
              className="font-sans text-sm font-medium uppercase tracking-[0.1em] text-muted-foreground transition-colors duration-300 hover:text-foreground active:text-foreground sm:text-xs"
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-sans text-sm font-medium uppercase tracking-[0.1em] text-muted-foreground transition-colors duration-300 hover:text-foreground active:text-foreground sm:text-xs"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent sm:mt-10" />

        <p className="mt-6 text-center font-sans text-[11px] tracking-wide text-muted-foreground/40 sm:mt-8">
          TimeTravel Agency &copy; 2026. All temporal rights reserved.
        </p>
      </div>
    </footer>
  )
}
