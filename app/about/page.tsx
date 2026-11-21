import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageMotion } from "@/components/page-motion"
import { SiteFooter, SiteHeader } from "@/components/site-chrome"
import { programs } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "About us | AARI",
  description:
    "The African Academic Research Institute is a hub for multidisciplinary and translational research focused on improving every aspect of African society.",
}

const facts = [
  { value: "2020", label: "Founded by Dr. Edward Ezenwafor" },
  { value: "06", label: "Multidisciplinary research programs" },
  { value: "5-yr", label: "Strategic plan, beginning 2020" },
]

export default function AboutPage() {
  return (
    <main>
      <PageMotion />
      <SiteHeader />

      <section className="page-hero page-hero-plain" aria-labelledby="about-title">
        <div className="page-hero-copy">
          <p className="eyebrow">About us</p>
          <h1 id="about-title">
            Research for every part of <em>African society.</em>
          </h1>
          <p className="hero-intro">
            The African Academic Research Institute is a hub for multidisciplinary and
            translational research focused on improving every aspect of African society.
          </p>
        </div>
        <div className="about-mosaic" aria-hidden="true">
          {programs.slice(0, 3).map((program) => (
            <span className="about-mosaic-tile" key={program.slug}>
              <Image src={program.image} alt="" fill sizes="(max-width: 800px) 33vw, 18vw" priority />
            </span>
          ))}
        </div>
      </section>

      <section className="fact-strip reveal" aria-label="Institute at a glance">
        {facts.map((fact) => (
          <div className="fact" key={fact.value}>
            <strong>{fact.value}</strong>
            <span>{fact.label}</span>
          </div>
        ))}
      </section>

      <section className="article-shell section-shell reveal">
        <aside className="article-aside">
          <p className="eyebrow">Our story</p>
        </aside>
        <div className="article-body">
          <p className="article-lede">
            Since its 2020 founding by Dr. Edward Ezenwafor, the Institute has become
            nationally renowned for meaningful and impactful work in this essential area of
            research.
          </p>
          <p>
            Under his leadership the Institute aims to build on a legacy of preserving the
            multidisciplinary structure and dynamic that makes it truly unique.
          </p>
          <p>
            The Institute fosters rigorous theory-based research and innovative training, and
            supports collaborative opportunities for investigators across Africa and beyond.
            The Institute is focused on advancing the translation of knowledge to impact
            policy and practice, with an emphasis on sustainable engagement and reciprocal
            relationships with community partners in order to better understand the
            ubiquitous issues that affect Africa.
          </p>
        </div>
      </section>

      <section className="manifesto-band reveal">
        <span className="manifesto-number">Looking ahead</span>
        <h2>A five-year plan for Africa&apos;s most salient challenges.</h2>
        <p>
          Beginning in 2020, our strategic plan actively addresses timely challenges in science
          & technology, ethnography & languages, behavioral health, population health, legal
          systems and trade & finance.
        </p>
      </section>

      <section className="section-shell reveal" aria-labelledby="about-programs">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The work</p>
            <h2 id="about-programs">Our programs</h2>
          </div>
          <Link className="text-link" href="/research-ethics">
            How we hold ourselves accountable <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="publication-list">
          {programs.map((program) => (
            <Link className="publication-row program-row" href={`/programs/${program.slug}`} key={program.slug}>
              <span className="publication-index">{program.number}</span>
              <span className="publication-title">{program.title}</span>
              <span className="program-row-thumb">
                <Image src={program.image} alt="" fill sizes="13rem" />
              </span>
              <span className="publication-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
