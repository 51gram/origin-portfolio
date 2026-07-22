import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, whenLayoutReady } from '../lib/gsap'

const HERO_COLOR = '#faf7f0'

// Each zone spans exactly its own section (top top -> bottom top), so the
// transition always covers the section's full scroll distance regardless
// of how tall that section renders on a given breakpoint (the desktop
// absolute-canvas layout and the mobile stacked-flow layout have very
// different heights for the same content).
const zones = [
  { selector: '#design-pieces', from: '#faf7f0', to: '#949085', start: 'top top', end: 'bottom top' },
  { selector: '#motion-edit', from: '#949085', to: '#141414', start: 'top top', end: 'bottom top' },
  { selector: '#infographics', from: '#141414', to: '#ffffff', start: 'top top', end: 'bottom top' },
]

function ScrollBackground() {
  const bgRef = useRef(null)

  useEffect(() => {
    let ctx
    const cancel = whenLayoutReady(() => {
      ctx = gsap.context(() => {
        const resolved = zones
          .map((zone) => {
            const el = document.querySelector(zone.selector)
            if (!el) return null
            return { ...zone, el, interpolate: gsap.utils.interpolate(zone.from, zone.to) }
          })
          .filter(Boolean)

        const triggers = []

        function recompute() {
          let color = HERO_COLOR

          resolved.forEach((zone, i) => {
            const trigger = triggers[i]
            if (!trigger) return
            const progress = trigger.progress
            if (progress > 0) {
              color = zone.interpolate(progress)
            }
          })

          gsap.set(bgRef.current, { backgroundColor: color })
        }

        resolved.forEach((zone) => {
          triggers.push(
            ScrollTrigger.create({
              trigger: zone.el,
              start: zone.start,
              end: zone.end,
              onUpdate: recompute,
              onEnter: recompute,
              onLeave: recompute,
              onEnterBack: recompute,
              onLeaveBack: recompute,
            }),
          )
        })

        recompute()
      })
    })

    return () => {
      cancel()
      if (ctx) ctx.revert()
    }
  }, [])

  return <div className="scroll-bg" ref={bgRef} />
}

export default ScrollBackground
