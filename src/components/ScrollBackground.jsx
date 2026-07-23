import { useEffect, useRef } from 'react'
import { gsap, whenLayoutReady } from '../lib/gsap'

const HERO_COLOR = '#faf7f0'

// Each zone spans exactly its own section (top -> bottom of that element in
// document coordinates), so the transition always covers the section's
// full scroll distance regardless of how tall that section renders on a
// given breakpoint (the desktop absolute-canvas layout and the mobile
// stacked-flow layout have very different heights for the same content).
const zones = [
  { selector: '#design-pieces', from: '#faf7f0', to: '#949085' },
  { selector: '#motion-edit', from: '#949085', to: '#141414' },
  { selector: '#infographics', from: '#141414', to: '#ffffff' },
]

function ScrollBackground() {
  const bgRef = useRef(null)

  useEffect(() => {
    let recompute = null

    const cancel = whenLayoutReady(() => {
      const resolved = zones
        .map((zone) => {
          const el = document.querySelector(zone.selector)
          if (!el) return null
          return { ...zone, el, interpolate: gsap.utils.interpolate(zone.from, zone.to) }
        })
        .filter(Boolean)

      recompute = () => {
        const scrollY = window.scrollY
        let color = HERO_COLOR

        resolved.forEach((zone) => {
          const rect = zone.el.getBoundingClientRect()
          const top = scrollY + rect.top
          const bottom = top + rect.height
          if (scrollY <= top) return
          const progress = Math.min(1, (scrollY - top) / (bottom - top))
          color = zone.interpolate(progress)
        })

        bgRef.current.style.backgroundColor = color
      }

      recompute()
      window.addEventListener('scroll', recompute, { passive: true })
      window.addEventListener('resize', recompute)
    })

    return () => {
      cancel()
      if (recompute) {
        window.removeEventListener('scroll', recompute)
        window.removeEventListener('resize', recompute)
      }
    }
  }, [])

  return <div className="scroll-bg" ref={bgRef} />
}

export default ScrollBackground
