import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap'

const stops = [
  { selector: '#design-pieces', from: '#949085', to: '#faf7f0', start: 'top 95%', end: 'top 15%' },
  { selector: '#motion-edit', from: '#faf7f0', to: '#141414', start: 'top 95%', end: 'top 15%' },
  { selector: '#infographics', from: '#141414', to: '#ffffff', start: 'top 90%', end: 'top 25%' },
]

function ScrollBackground() {
  const bgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      stops.forEach(({ selector, from, to, start, end }) => {
        const target = document.querySelector(selector)
        if (!target) return

        const interpolate = gsap.utils.interpolate(from, to)

        ScrollTrigger.create({
          trigger: target,
          start,
          end,
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
