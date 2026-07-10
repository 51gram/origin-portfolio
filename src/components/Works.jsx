import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { projects } from '../data/projects'
import { workLayout } from '../data/workLayout'
import WorkCard from './WorkCard'

function Works({ onOpen }) {
  const rootRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.section-heading', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 80%' },
      })

      const isDesktop = window.matchMedia('(min-width: 769px)').matches

      cardRefs.current.forEach((card, i) => {
        if (!card) return
        const layout = workLayout[i % workLayout.length]

        if (isDesktop) {
          gsap.set(card, { rotate: layout.rotate, transformOrigin: '50% 50%' })

          gsap.to(card, {
            y: layout.speed,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          })
        }

        gsap.from(card, {
          opacity: 0,
          yPercent: 15,
          scale: 0.92,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 92%' },
        })
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="works" className="works" ref={rootRef}>
      <h2 className="section-heading">Works</h2>
      <div className="work-layers">
        {projects.map((project, i) => (
          <WorkCard
            key={project.id}
            project={project}
            layout={workLayout[i % workLayout.length]}
            onOpen={onOpen}
            cardRef={(el) => (cardRefs.current[i] = el)}
          />
        ))}
      </div>
    </section>
  )
}

export default Works
