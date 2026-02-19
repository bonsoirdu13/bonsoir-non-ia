"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, Clock, Shield } from "lucide-react"

const destinations = [
  {
    title: "Paris 1889",
    era: "Belle Epoque",
    description:
      "Experience the Universal Exposition and witness the birth of the Eiffel Tower in the golden age of Parisian grandeur.",
    price: "4,500",
    duration: "3 days",
    image: "/images/paris-1889.jpg",
    highlight: "Most Popular",
  },
  {
    title: "Cretaceous -65M",
    era: "Prehistoric Era",
    description:
      "Explore a prehistoric world filled with majestic dinosaurs in a secure guided expedition through ancient landscapes.",
    price: "9,900",
    duration: "2 days",
    image: "/images/cretaceous.jpg",
    highlight: "Adventure",
  },
  {
    title: "Florence 1504",
    era: "Renaissance",
    description:
      "Discover Renaissance Florence at the time of Michelangelo and witness the artistic revolution that shaped the world.",
    price: "5,800",
    duration: "3 days",
    image: "/images/florence-1504.jpg",
    highlight: "Cultural",
  },
]

function DestinationCard({
  destination,
  index,
}: {
  destination: (typeof destinations)[number]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "40px" }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-700 hover:border-primary/30 hover:shadow-[0_8px_60px_oklch(0.80_0.13_75/0.10),0_2px_20px_oklch(0_0_0/0.4)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/10]">
        <Image
          src={destination.image}
          alt={`${destination.title} - ${destination.era}`}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Stronger overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-card/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Era badge */}
        <span className="absolute top-4 left-4 rounded-full border border-primary/20 bg-background/70 px-3 py-1.5 font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-primary backdrop-blur-md sm:top-5 sm:left-5 sm:px-4 sm:tracking-[0.2em]">
          {destination.era}
        </span>

        {/* Highlight badge */}
        <span className="absolute top-4 right-4 rounded-full bg-primary/90 px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-primary-foreground sm:top-5 sm:right-5 sm:tracking-[0.15em]">
          {destination.highlight}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-5 sm:gap-5 sm:p-7">
        <div>
          <h3 className="font-serif text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
            {destination.title}
          </h3>
          <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground line-clamp-2 sm:mt-3">
            {destination.description}
          </p>
        </div>

        {/* Meta row */}
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock size={14} className="text-primary/70" />
            <span className="font-sans text-xs font-medium">{destination.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Shield size={14} className="text-primary/70" />
            <span className="font-sans text-xs font-medium">Fully insured</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Price & CTA */}
        <div className="flex items-end justify-between gap-4">
          <div className="shrink-0">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Starting from
            </p>
            <p className="mt-1 font-serif text-2xl font-bold text-primary sm:text-3xl">
              {"$"}{destination.price}
            </p>
          </div>
          <button
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-primary transition-all duration-400 active:scale-95 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_oklch(0.80_0.13_75/0.2)] sm:px-6 sm:tracking-[0.1em]"
            aria-label={`Book ${destination.title}`}
          >
            <span className="hidden sm:inline">Book Now</span>
            <span className="sm:hidden">Book</span>
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export function Destinations() {
  const headingRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (headingRef.current) observer.observe(headingRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="destinations" className="relative py-20 sm:py-28 md:py-40">
      {/* Subtle background radial */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.80 0.13 75 / 0.03) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div
          ref={headingRef}
          className={`mx-auto mb-12 max-w-2xl text-center transition-all duration-1000 sm:mb-20 md:mb-24 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-4 font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-primary sm:mb-6 sm:text-xs sm:tracking-[0.5em]">
            Our Destinations
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-balance">Choose Your Era</span>
          </h2>
          <div className="mx-auto mt-5 gold-divider sm:mt-6" />
          <p className="mt-6 font-sans text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:text-base md:text-lg">
            Handpicked moments in time, curated for the most discerning
            travelers.
          </p>
        </div>

        {/* Cards - single column on mobile, grid on larger */}
        <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
          {destinations.map((dest, i) => (
            <DestinationCard key={dest.title} destination={dest} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-14 text-center transition-all duration-1000 delay-600 sm:mt-20 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-5 font-sans text-sm text-muted-foreground sm:mb-6">
            More destinations coming soon
          </p>
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-sans text-sm font-semibold text-primary transition-all duration-300 active:scale-95 hover:border-primary/50 hover:gap-3 sm:border-0 sm:px-0 sm:py-0"
          >
            View all eras
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
