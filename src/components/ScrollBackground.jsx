import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap'

const stops = [
  { selector: '#design-pieces', from: '#0a0a0b', to: '#9c9488' },
  { selector: '#motion-edit', from: '#9c9488', to: '#141414' },
  { selector: '#infographics', from: '#141414', to: '#ffffff' },
]

function ScrollBackground() {
  const bgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      stops.forEach(({ selector, from, to }) => {
        const target = document.querySelector(selector)
        if (!target) return

        const interpolate = gsap.utils.interpolate(from, to)

        ScrollTrigger.create({
          trigger: target,
          start: 'top 90%',
          end: 'top 25%',
          onUpdate: (self) => {
            gsap.set(bgRef.current, { backgroundColor: interpolate(self.progress) })
          },
          onLeave: () => gsap.set(bgRef.current, { backgroundColor: to }),
          onLeaveBack: () => gsap.set(bgRef.current, { backgroundColor: from }),
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return <div className="scroll-bg" ref={bgRef} />
}

export default ScrollBackground
