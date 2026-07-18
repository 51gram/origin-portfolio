import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

function ScrollBackground() {
  const bgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: '#design-pieces',
          endTrigger: '#infographics',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      })

      tl.to(bgRef.current, { backgroundColor: '#f3eee6', duration: 0.05 }, 0)
        .to(bgRef.current, { backgroundColor: '#9c9488', duration: 0.35 }, 0.05)
        .to(bgRef.current, { backgroundColor: '#141414', duration: 0.1 }, 0.4)
        .to(bgRef.current, { backgroundColor: '#ffffff', duration: 0.05 }, 0.68)
        .to(bgRef.current, { backgroundColor: '#ffffff', duration: 0.27 }, 0.73)
    })

    return () => ctx.revert()
  }, [])

  return <div className="scroll-bg" ref={bgRef} />
}

export default ScrollBackground
