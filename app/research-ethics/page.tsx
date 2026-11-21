import type { Metadata } from "next"
import Link from "next/link"
import { PageMotion } from "@/components/page-motion"
import { SiteFooter, SiteHeader } from "@/components/site-chrome"

export const metadata: Metadata = {
  title: "Research ethics | AARI",
  description:
    "How the African Academic Research Institute protects the dignity, rights and welfare of research participants.",
}

const principles = [
  { number: "01", name: "Beneficence" },
  { number: "02", name: "Justice" },
  { number: "03", name: "Autonomy" },
]

export default function ResearchEthicsPage() {
  return (
    <main>
      <PageMotion />
      <SiteHeader />

      <section className="page-hero page-hero-plain page-hero-narrow" aria-labelledby="ethics-title">
        <div className="page-hero-copy">
          <p className="eyebrow">Research ethics</p>
          <h1 id="ethics-title">
            Dignity, rights and welfare <em>come first.</em>
          </h1>
          <p className="hero-intro">
            Research ethics govern the standards of conduct for scientific researchers. It is
            important to adhere to ethical principles in order to protect the dignity, rights
            and welfare of research participants.
          </p>
        </div>
      </section>

      <section className="principles reveal" aria-labelledby="principles-title">
        <p className="eyebrow" id="principles-title">Central to ethical review</p>
        <div className="principle-grid">
          {principles.map((principle) => (
            <div className="principle" key={principle.name}>
              <span>{principle.number}</span>
              <strong>{principle.name}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="article-shell section-shell reveal">
        <aside className="article-aside">
          <p className="eyebrow">Our standard</p>
        </aside>
        <div className="article-body">
          <p className="article-lede">
            All research involving human beings should be reviewed by an ethics committee to
            ensure that the appropriate ethical standards are being upheld.
          </p>
          <p>
            African Academic Research Institute works with Member States and partners to
            promote ethical standards and appropriate systems of review for any course of
            research involving human subjects.
          </p>
        </div>
      </section>

      <section className="manifesto-band reveal">
        <span className="manifesto-number">The ERC</span>
        <h2>Only research of the highest ethical standard.</h2>
        <p>
          Within AARI, the Research Ethics Review Committee (ERC) reviews all research projects
          involving human participants supported either financially or technically by the
          Institute.
        </p>
      </section>

      <section className="section-shell ethics-cta reveal">
        <p className="eyebrow">Take part with confidence</p>
        <h2>Research involving people is reviewed by our ERC.</h2>
        <Link className="text-link" href="/#participate">
          See how to participate <span aria-hidden="true">→</span>
        </Link>
      </section>

      <SiteFooter />
    </main>
  )
}
