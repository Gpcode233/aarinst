"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { EmailSignup } from "@/components/email-signup"

export type ResearchProgram = {
  title: string
  image: string
  number: string
}

type HeroProps = {
  programs: ResearchProgram[]
  activeSlide: number
  setActiveSlide: (slide: number) => void
}

function Actions() {
  return (
    <div className="hero-actions">
      <Button asChild size="lg">
        <Link href="#programs">Explore our work <span aria-hidden="true">↗</span></Link>
      </Button>
      <Link className="text-link" href="#participate">
        Take part in a survey <span aria-hidden="true">→</span>
      </Link>
    </div>
  )
}

export function CurrentHero({ programs, activeSlide, setActiveSlide }: HeroProps) {
  const activeProgram = programs[activeSlide]

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          Incisive questions.
          <br />
          <em>Empirical answers.</em>
        </h1>
        <p className="hero-intro">
          African Academic Research Institute is a hub for multidisciplinary and
          translational research focused on understanding Africa and finding innovative
          solutions to improve the population.
        </p>
        <Actions />
        <EmailSignup className="hero-signup" />
        <div className="hero-footnote">
          <span className="signal-dot" />
          <span>Research with rigor, innovation & adaptation</span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-image-frame">
          <Image
            src={activeProgram.image}
            alt={activeProgram.title}
            fill
            priority
            className="hero-image"
            sizes="(max-width: 800px) 100vw, 55vw"
          />
          <div className="hero-image-shade" />
          <div className="hero-image-caption">
            <strong>{activeProgram.title}</strong>
          </div>
        </div>
        <div className="carousel-controls">
          <button type="button" aria-label="Previous research program" onClick={() => setActiveSlide((activeSlide - 1 + programs.length) % programs.length)}>←</button>
          <div className="carousel-dots" aria-label="Research program slides">
            {programs.map((program, index) => (
              <button type="button" key={program.number} aria-label={`Show ${program.title}`} aria-current={index === activeSlide} onClick={() => setActiveSlide(index)} />
            ))}
          </div>
          <button type="button" aria-label="Next research program" onClick={() => setActiveSlide((activeSlide + 1) % programs.length)}>→</button>
        </div>
      </div>
    </section>
  )
}

export function SketchHero({ programs, activeSlide, setActiveSlide }: HeroProps) {
  const activeProgram = programs[activeSlide]

  return (
    <section className="hero-variant hero-sketch" aria-labelledby="sketch-hero-title">
      <Image
        src={activeProgram.image}
        alt=""
        fill
        priority
        className="sketch-background"
        sizes="100vw"
      />
      <div className="sketch-overlay" />
      <div className="sketch-content">
        {/* <p className="eyebrow">Independent research from Africa, for the world</p> */}
        <h1 id="sketch-hero-title">
          Incisive questions.
          <br />
          <em>Empirical answers.</em>
        </h1>
        <p className="hero-intro">
          African Academic Research Institute is a hub for multidisciplinary and
          translational research focused on understanding Africa and finding innovative
          solutions to improve the population.
        </p>
        <Actions />
        <EmailSignup className="hero-signup email-signup-dark" />
      </div>
      {/* <div className="sketch-rail">
        <div className="sketch-rail-label">
          <span>Explore our research</span>
          <strong>{activeProgram.title}</strong>
        </div>
        <div className="sketch-thumbnails">
          {programs.map((program, index) => (
            <button
              type="button"
              className={`sketch-thumbnail ${index === activeSlide ? "is-active" : ""}`}
              key={program.number}
              aria-label={`Show ${program.title}`}
              aria-current={index === activeSlide}
              onClick={() => setActiveSlide(index)}
            >
              <Image src={program.image} alt="" fill sizes="10rem" />
              <span>{program.number}</span>
            </button>
          ))}
        </div>
        <div className="sketch-arrows">
          <button type="button" aria-label="Previous research image" onClick={() => setActiveSlide((activeSlide - 1 + programs.length) % programs.length)}>←</button>
          <button type="button" aria-label="Next research image" onClick={() => setActiveSlide((activeSlide + 1) % programs.length)}>→</button>
        </div>
      </div> */}
    </section>
  )
}

export function MapHero({ programs }: HeroProps) {
  return (
    <section className="hero-variant hero-map" aria-labelledby="map-hero-title">
      <div className="hero-map-copy">
        <p className="eyebrow">African evidence, made useful</p>
        <h1 id="map-hero-title">A closer look at <em>what moves us.</em></h1>
        <p className="hero-intro">We study the systems, stories, and decisions shaping life across Africa — then turn what we learn into action.</p>
        <Actions />
      </div>
      <div className="hero-map-programs">
        {programs.slice(0, 4).map((program, index) => (
          <Link className={`map-program map-program-${index + 1}`} href="#programs" key={program.number}>
            <Image src={program.image} alt="" fill sizes="(max-width: 800px) 50vw, 25vw" />
            <span>{program.title}</span>
          </Link>
        ))}
        <div className="map-stamp">AARI<br /><span>Field intelligence</span></div>
      </div>
    </section>
  )
}

export function StatementHero() {
  return (
    <section className="hero-variant hero-statement" aria-labelledby="statement-hero-title">
      <div className="statement-kicker">01 — Independent research from Africa, for the world</div>
      <div className="statement-content">
        <h1 id="statement-hero-title">The future is not waiting to be <em>understood.</em></h1>
        <div className="statement-side">
          <p>It is being shaped every day. AARI brings the disciplines, people, and persistence needed to ask better questions about it.</p>
          <Actions />
        </div>
      </div>
      <div className="statement-ribbon">
        <span>Ethnography</span><span>Governance</span><span>Health</span><span>Economy</span><span>Science</span>
      </div>
    </section>
  )
}

const studioSlug = (program: ResearchProgram) =>
  "slug" in program && typeof program.slug === "string" ? `/programs/${program.slug}` : "#programs"

export function StudioHero({ programs, activeSlide, setActiveSlide }: HeroProps) {
  const activeProgram = programs[activeSlide]

  return (
    <>
      <section className="hero-studio" aria-labelledby="studio-hero-title">
        <div className="studio-copy hero-copy">
          <p className="studio-eyebrow">
            <span className="signal-dot" />
            Independent African research · Est. 2020
          </p>
          <h1 id="studio-hero-title">
            Incisive questions.
            <br />
            <em>Empirical answers.</em>
          </h1>
          <p className="hero-intro">
            African Academic Research Institute is a hub for multidisciplinary and
            translational research focused on understanding Africa and finding innovative
            solutions to improve the population.
          </p>
          <div className="studio-actions">
            <Link className="studio-pill studio-pill-dark" href="#programs">
              Explore our work
            </Link>
            <Link className="studio-pill studio-pill-outline" href="#participate">
              Take part in a survey
              <span className="studio-pill-icon" aria-hidden="true">→</span>
            </Link>
          </div>
          <EmailSignup className="hero-signup" />
        </div>

        <div className="studio-visual hero-visual">
          <Link className="studio-specimen" href={studioSlug(activeProgram)}>
            <span className="studio-specimen-image hero-image-frame">
              <Image
                src={activeProgram.image}
                alt=""
                fill
                priority
                className="hero-image"
                sizes="(max-width: 800px) 80vw, 34vw"
              />
            </span>
            <span className="studio-specimen-label">
              <span className="studio-specimen-brand">AARI · Program {activeProgram.number}</span>
              <strong>{activeProgram.title}</strong>
              <span className="studio-specimen-meta">Multidisciplinary · Translational</span>
            </span>
          </Link>

          <div className="studio-dots" aria-label="Research program slides">
            {programs.map((program, index) => (
              <button
                type="button"
                key={program.number}
                aria-label={`Show ${program.title}`}
                aria-current={index === activeSlide}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="studio-marquee" aria-label="Research programs">
        <div className="studio-marquee-track">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1}>
              {programs.map((program) => (
                <li key={program.number}>
                  <Link href={studioSlug(program)} tabIndex={copy === 1 ? -1 : undefined}>
                    {program.title}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  )
}
