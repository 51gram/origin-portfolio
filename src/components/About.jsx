import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

const skills = ['After Effects', 'Cinema 4D', 'GSAP', 'Figma', 'Premiere Pro']

function About() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.section-heading, .about-text, .skill-tag', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.06,
        ease: 'power3.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 80%' },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="about" ref={rootRef}>
      <h2 className="section-heading">About</h2>
      <p className="about-text">
        自己紹介文をここに書き換えてください。得意分野、これまでの実績、制作に対するスタンスなどを簡潔にまとめると効果的です。
      </p>
      <ul className="skill-list">
        {skills.map((skill) => (
          <li key={skill} className="skill-tag">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default About
