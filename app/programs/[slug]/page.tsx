import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { PageMotion } from "@/components/page-motion"
import { SiteFooter, SiteHeader } from "@/components/site-chrome"
import { contactEmail, getProgram, programs } from "@/lib/site-content"

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageProps<"/programs/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const program = getProgram(slug)
  if (!program) return {}
  return {
    title: `${program.title} | AARI`,
    description: program.tagline,
  }
}

export default async function ProgramPage({ params }: PageProps<"/programs/[slug]">) {
  const { slug } = await params
  const program = getProgram(slug)
  if (!program) notFound()

  const index = programs.indexOf(program)
  const next = programs[(index + 1) % programs.length]
  const others = programs.filter((item) => item.slug !== program.slug)
  const [lede, ...rest] = program.paragraphs

  return (
    <main>
      <PageMotion />
      <SiteHeader />

      <section className="page-hero page-hero-image-variant" aria-labelledby="program-title">
        <Image
          src={program.image}
          alt=""
          fill
          priority
          className="page-hero-image"
          sizes="100vw"
        />
        <div className="sketch-overlay" />
        <div className="page-hero-copy">
          <p className="eyebrow">
            Research program {program.number} / {String(programs.length).padStart(2, "0")}
          </p>
          <h1 id="program-title">{program.title}</h1>
          <p className="hero-intro">{program.tagline}</p>
        </div>
      </section>

      <section className="article-shell section-shell reveal">
        <aside className="article-aside">
          <span className="article-number">{program.number}</span>
          <p className="eyebrow">Focus areas</p>
          <ul className="focus-list">
            {program.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
        <div className="article-body">
          <p className="article-lede">{lede}</p>
          {rest.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="plan-band reveal">
        <div>
          <p className="eyebrow">Strategic plan</p>
          <h2>Read where this program is headed next.</h2>
        </div>
        <Button asChild variant="outline" size="lg" className="plan-button">
          <a href={`mailto:${contactEmail}?subject=${encodeURIComponent(`Strategic plan: ${program.title}`)}`}>
            Request the strategic plan <span aria-hidden="true">↗</span>
          </a>
        </Button>
      </section>

      <section className="section-shell reveal" aria-labelledby="other-programs">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Keep exploring</p>
            <h2 id="other-programs">Other programs</h2>
          </div>
          <Link className="text-link" href={`/programs/${next.slug}`}>
            Next: {next.shortTitle} <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="publication-list">
          {others.map((item) => (
            <Link className="publication-row program-row" href={`/programs/${item.slug}`} key={item.slug}>
              <span className="publication-index">{item.number}</span>
              <span className="publication-title">{item.title}</span>
              <span className="program-row-thumb">
                <Image src={item.image} alt="" fill sizes="13rem" />
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
