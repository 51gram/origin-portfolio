import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap'
import { projects } from '../data/projects'
import WorkCard from './WorkCard'

function Works({ onOpen }) {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.section-heading', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 80%' },
      })

      gsap.from('.work-card', {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.work-grid', start: 'top 85%' },
      })

      gsap.utils.toArray('.work-card').forEach((card) => {
        const inner = card.querySelector('.work-card-thumb-inner')
        gsap.fromTo(
          inner,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        )
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="works" className="works" ref={rootRef}>
      <h2 className="section-heading">Works</h2>
      <div className="work-grid">
        {projects.map((project) => (
          <WorkCard key={project.id} project={project} onOpen={onOpen} />
        ))}
      </div>
    </section>
  )
}

export default Works
