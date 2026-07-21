import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, whenLayoutReady } from '../lib/gsap'

const HERO_COLOR = '#faf7f0'

const zones = [
  {
    selector: '#design-pieces',
    endSelector: '#motion-edit',
    from: '#faf7f0',
    to: '#949085',
    start: 'top top',
    end: 'top 80%',
  },
  { selector: '#motion-edit', from: '#949085', to: '#141414', start: 'top 80%', end: 'top 15%' },
  { selector: '#infographics', from: '#141414', to: '#ffffff', start: 'top 90%', end: 'top 25%' },
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
            const endEl = zone.endSelector ? document.querySelector(zone.endSelector) : null
            return { ...zone, el, endEl, interpolate: gsap.utils.interpolate(zone.from, zone.to) }
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
              endTrigger: zone.endEl || zone.el,
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
      ctx && ctx.revert()
    }
  }, [])

  return <div className="scroll-bg" ref={bgRef} />
}

export default ScrollBackground
