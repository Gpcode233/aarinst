"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { CurrentHero, MapHero, SketchHero, StatementHero } from "@/components/hero-variants"
import { SiteFooter, SiteHeader } from "@/components/site-chrome"
import { programs } from "@/lib/site-content"


const publications = [
  {
    title: "Effects Of Incivility On People",
    category: "Publications",
    date: "30 Nov 2021",
  },
  {
    title: "About African Academic Research Institute",
    category: "AARI Journal",
    date: "30 Nov 2021",
  },
]

export default function Page() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [heroVariant, setHeroVariant] = useState(3)

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reducedMotion) return

    gsap.registerPlugin(ScrollTrigger)
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true })
    let frameId = 0

    const raf = (time: number) => {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }

    frameId = requestAnimationFrame(raf)

    const context = gsap.context(() => {
      gsap.from(".site-header", {
        duration: 0.8,
        opacity: 0,
        y: -18,
        ease: "power3.out",
      })
      gsap.from(".hero-copy > *", {
        duration: 0.8,
        opacity: 0,
        y: 28,
        stagger: 0.1,
        delay: 0.15,
        ease: "power3.out",
      })
      gsap.from(".hero-visual", {
        duration: 1.1,
        opacity: 0,
        scale: 0.96,
        delay: 0.25,
        ease: "power3.out",
      })
      gsap.utils.toArray<HTMLElement>(".manifesto-band, .programs-section, .participate-section, .publications-section, .site-footer").forEach((section) => {
        gsap.from(section, {
          duration: 0.9,
          opacity: 0,
          y: 42,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        })
      })
      gsap.to(".hero-image", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-visual",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    })

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % programs.length)
    }, 5500)

    return () => {
      window.clearInterval(timer)
      cancelAnimationFrame(frameId)
      context.revert()
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    gsap.fromTo(
      ".hero-image-frame",
      { opacity: 0.72 },
      { duration: 0.55, opacity: 1, ease: "power2.out" },
    )
  }, [activeSlide])

  return (
    <main>
      <SiteHeader />

      {heroVariant === 0 && <CurrentHero programs={programs} activeSlide={activeSlide} setActiveSlide={setActiveSlide} />}
      {heroVariant === 1 && <MapHero programs={programs} activeSlide={activeSlide} setActiveSlide={setActiveSlide} />}
      {heroVariant === 2 && <StatementHero />}
      {heroVariant === 3 && <SketchHero programs={programs} activeSlide={activeSlide} setActiveSlide={setActiveSlide} />}
      {process.env.NODE_ENV !== "production" && (
        <div className="hero-variant-switcher" aria-label="Hero prototypes">
          <span>Hero test</span>
          {[["A", "Carousel"], ["B", "Field map"], ["C", "Statement"], ["D", "Sketch"]].map(([label, name], index) => (
            <button type="button" key={label} aria-pressed={heroVariant === index} onClick={() => setHeroVariant(index)}>
              {label} <small>{name}</small>
            </button>
          ))}
        </div>
      )}

      <section className="manifesto-band" id="about">
        <span className="manifesto-number">01 / 03</span>
        <h2>Knowledge that moves communities forward.</h2>
        <p>
          We work across disciplines and borders to turn rigorous research into practical
          insight, better decisions, and lasting change.
        </p>
      </section>

      <section className="programs-section section-shell" id="programs">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The work</p>
            <h2>Research programs</h2>
          </div>
          <p>Six lenses. One shared commitment to evidence that matters.</p>
        </div>
        <div className="program-grid">
          {programs.map((program) => (
            <Link className="program-tile" href={`/programs/${program.slug}`} key={program.number}>
              <Image src={program.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" />
              <span className="tile-overlay" />
              <span className="program-number">{program.number}</span>
              <span className="program-title">{program.title}</span>
              <span className="tile-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="participate-section section-shell" id="participate">
        <div className="participate-mark">
          <Image
            src="/AARI-LOGO.png"
            alt="African Academic Research Institute"
            width={768}
            height={359}
          />
          <span>FIELD NOTES</span>
        </div>
        <div>
          <p className="eyebrow">Your voice is evidence</p>
          <h2>Research is stronger when more people shape it.</h2>
          <p>
            Join our participant community and help researchers understand the questions
            that matter most to people and places across Africa.
          </p>
          <Button asChild variant="outline" size="lg" className="text-foreground hover:text-foreground">
            <Link className="survey-link" href="#contact">See open surveys <span aria-hidden="true">↗</span></Link>
          </Button>
        </div>
      </section>

      <section className="publications-section section-shell" id="publications">
        <div className="section-heading">
          <div>
            <p className="eyebrow">From the institute</p>
            <h2>Recent publications</h2>
          </div>
          <Link className="text-link" href="#publications">View all publications <span aria-hidden="true">→</span></Link>
        </div>
        <div className="publication-list">
          {publications.map((publication, index) => (
            <Link className="publication-row" href="#contact" key={publication.title}>
              <span className="publication-index">0{index + 1}</span>
              <span className="publication-title">{publication.title}</span>
              <span className="publication-meta">{publication.category} · {publication.date}</span>
              <span className="publication-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
