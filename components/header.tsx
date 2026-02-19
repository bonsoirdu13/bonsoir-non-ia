"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Book", href: "#book" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-background/80 border-b border-border/50 shadow-[0_4px_30px_oklch(0_0_0/0.3)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 sm:py-5 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 sm:gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/40 sm:h-8 sm:w-8">
            <div className="h-1.5 w-1.5 rounded-full bg-primary sm:h-2 sm:w-2" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif text-lg font-bold tracking-wide text-foreground sm:text-xl lg:text-2xl">
              TimeTravel
            </span>
            <span className="hidden font-sans text-[10px] font-semibold uppercase tracking-[0.35em] text-primary sm:inline">
              Agency
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-sans text-[13px] font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-400 hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-400 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#destinations"
          className="hidden rounded-full border border-primary/40 bg-primary/10 px-7 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-primary transition-all duration-400 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_oklch(0.80_0.13_75/0.25)] md:inline-flex"
        >
          Explore Eras
        </a>

        {/* Mobile burger - larger tap target */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-lg text-foreground transition-colors duration-200 active:bg-secondary md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - fullscreen overlay */}
      <div
        className={`fixed inset-0 top-0 z-40 flex flex-col transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/98 backdrop-blur-2xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <nav
          className="relative z-10 flex flex-1 flex-col items-center justify-center gap-2 px-8"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`w-full max-w-xs rounded-xl px-6 py-4 text-center font-serif text-2xl font-medium tracking-wide text-muted-foreground transition-all duration-500 hover:text-foreground ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? `${i * 80 + 100}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}

          {/* Divider */}
          <div
            className={`my-4 gold-divider transition-all duration-700 ${
              isMobileMenuOpen ? "w-16 opacity-100" : "w-0 opacity-0"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "450ms" : "0ms" }}
          />

          <a
            href="#destinations"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mt-2 inline-flex w-full max-w-xs items-center justify-center rounded-full bg-primary px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-all duration-500 active:scale-95 ${
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "520ms" : "0ms" }}
          >
            Explore Eras
          </a>
        </nav>
      </div>
    </header>
  )
}
