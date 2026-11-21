import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { EmailSignup } from "@/components/email-signup"
import { contactEmail } from "@/lib/site-content"

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="AARI home">
        <Image
          src="/AARI-LOGO.png"
          alt="African Academic Research Institute"
          width={768}
          height={359}
          priority
        />
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link href="/about">About us</Link>
        <Link href="/#programs">Our programs</Link>
        <Link href="/research-ethics">Research ethics</Link>
        <Link href="/#publications">Publications</Link>
        <Link href="#contact">Contact</Link>
      </nav>
      <div className="header-actions">
        <Link className="quiet-link" href="/#participate">
          Participate
        </Link>
        <Button asChild size="sm">
          <Link href="#contact">Work with us</Link>
        </Button>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main">
        <div>
          <p className="eyebrow">Start a conversation</p>
          <h2>Let&apos;s make the next question count.</h2>
        </div>
        <div className="footer-cta">
          <EmailSignup className="email-signup-dark" label="Subscribe to research updates" />
          <a className="footer-email" href={`mailto:${contactEmail}`}>
            {contactEmail} <span>↗</span>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} African Academic Research Institute</span>
        <div className="footer-links">
          <Link href="#contact">Instagram</Link>
          <Link href="#contact">LinkedIn</Link>
          <Link href="#contact">X / Twitter</Link>
        </div>
        <span>Rigor, innovation & adaptation.</span>
      </div>
    </footer>
  )
}
