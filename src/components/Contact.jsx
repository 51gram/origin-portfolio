import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

function Contact() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-inner > *', {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 85%' },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" className="contact" ref={rootRef}>
      <div className="contact-inner">
        <h2 className="section-heading">Contact</h2>
        <p className="contact-text">お仕事のご相談はお気軽にどうぞ。</p>
        <a className="contact-mail" href="mailto:you@example.com">
          you@example.com
        </a>
        <ul className="social-list">
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              X (Twitter)
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              Vimeo
            </a>
          </li>
        </ul>
      </div>
      <footer className="site-footer">
        &copy; {new Date().getFullYear()} NAME. All rights reserved.
      </footer>
    </section>
  )
}

export default Contact
