import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

function Hero() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      tl.from('.hero-eyebrow', { opacity: 0, y: 16, duration: 0.6 })
        .from(
          '.hero-title .word',
          { opacity: 0, y: 60, duration: 0.9, stagger: 0.12 },
          '-=0.3',
        )
        .from('.hero-sub', { opacity: 0, y: 20, duration: 0.7 }, '-=0.4')
        .from('.hero-scroll', { opacity: 0, duration: 0.6 }, '-=0.2')

      gsap.to('.hero-content', {
        yPercent: -35,
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="top" className="hero" ref={rootRef}>
      <div className="hero-content">
        <p className="hero-eyebrow">MOTION GRAPHICS DESIGNER</p>
        <h1 className="hero-title">
          <span className="word">MOVE</span> <span className="word">THE</span>{' '}
          <span className="word">STORY.</span>
        </h1>
        <p className="hero-sub">
          映像とインタラクションで、伝わる体験をつくる。
        </p>
      </div>
      <div className="hero-scroll">
        <span />
        Scroll
      </div>
    </section>
  )
}

export default Hero
