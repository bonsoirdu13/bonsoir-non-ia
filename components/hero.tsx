"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover scale-105"
          priority
          quality={90}
        />
        {/* Multi-layer cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/50 to-background sm:from-background/90 sm:via-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70 sm:from-background/60 sm:to-background/60" />
        {/* Subtle radial glow behind text area */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 45%, oklch(0.80 0.13 75 / 0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-6">
        {/* Decorative line above tagline */}
        <div
          className={`mx-auto mb-6 sm:mb-8 transition-all duration-1000 ${
            isVisible ? "w-16 opacity-100" : "w-0 opacity-0"
          }`}
        >
          <div className="gold-divider mx-auto" />
        </div>

        <p
          className={`mb-6 font-sans text-[10px] font-semibold uppercase tracking-[0.35em] text-primary transition-all duration-1000 sm:mb-8 sm:text-xs sm:tracking-[0.45em] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          Premium Time Travel Experiences
        </p>

        <h1
          className={`font-serif text-[2.5rem] font-bold leading-[1.08] tracking-tight text-foreground transition-all duration-1000 delay-200 sm:text-5xl md:text-7xl lg:text-8xl ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <span className="text-balance">
            Travel Through Time
            <br />
            <span className="text-gold-shimmer">With Elegance</span>
          </span>
        </h1>

        <p
          className={`mx-auto mt-6 max-w-md font-sans text-[15px] leading-relaxed text-muted-foreground transition-all duration-1000 delay-400 sm:mt-8 sm:max-w-xl sm:text-base md:mt-10 md:text-xl ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          Discover the most fascinating eras in history with a premium and
          secure experience.
        </p>

        <div
          className={`mt-10 flex flex-col items-stretch gap-3 sm:mt-12 sm:flex-row sm:items-center sm:justify-center sm:gap-4 transition-all duration-1000 delay-600 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <a
            href="#destinations"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-sans text-[15px] font-semibold tracking-wide text-primary-foreground transition-all duration-400 active:scale-95 sm:px-10 sm:py-4 sm:text-sm hover:shadow-[0_0_50px_oklch(0.80_0.13_75/0.35)] hover:scale-[1.02]"
          >
            Discover Destinations
          </a>
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 font-sans text-[15px] font-medium tracking-wide text-muted-foreground transition-all duration-400 active:scale-95 sm:px-10 sm:py-4 sm:text-sm hover:border-primary/50 hover:text-foreground"
          >
            How It Works
          </a>
        </div>
      </div>

      {/* Scroll indicator - hidden on very small screens */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-10">
        <a
          href="#destinations"
          aria-label="Scroll to destinations"
          className="hidden flex-col items-center gap-3 text-muted-foreground/60 transition-colors duration-400 hover:text-primary sm:flex"
        >
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.4em]">
            Explore
          </span>
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
