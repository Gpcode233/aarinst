"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

/** Shared entrance + scroll-reveal motion for inner pages. Mark sections with `.reveal`. */
export function PageMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    gsap.registerPlugin(ScrollTrigger)
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true })
    let frameId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }
    frameId = requestAnimationFrame(raf)

    const context = gsap.context(() => {
      gsap.from(".site-header", { duration: 0.8, opacity: 0, y: -18, ease: "power3.out" })
      gsap.from(".page-hero-copy > *", {
        duration: 0.8,
        opacity: 0,
        y: 28,
        stagger: 0.1,
        delay: 0.15,
        ease: "power3.out",
      })
      gsap.utils.toArray<HTMLElement>(".reveal, .site-footer").forEach((section) => {
        gsap.from(section, {
          duration: 0.9,
          opacity: 0,
          y: 42,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 85%", once: true },
        })
      })
      gsap.to(".page-hero-image", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: { trigger: ".page-hero", start: "top top", end: "bottom top", scrub: true },
      })
    })

    return () => {
      cancelAnimationFrame(frameId)
      context.revert()
      lenis.destroy()
    }
  }, [])

  return null
}
