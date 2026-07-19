import { useEffect, useRef, useState } from 'react'
import { gsap, whenLayoutReady } from '../lib/gsap'
import { pxToVw } from '../lib/layout'
import leftNaviBase from '../assets/icons/leftNaviBase.svg'
import leftNaviCircle from '../assets/icons/leftNaviCircle.svg'
import btn01n from '../assets/icons/leftNaviBtn01n.svg'
import btn01f from '../assets/icons/leftNaviBtn01f.svg'
import btn02n from '../assets/icons/leftNaviBtn02n.svg'
import btn02f from '../assets/icons/leftNaviBtn02f.svg'
import btn03n from '../assets/icons/leftNaviBtn03n.svg'
import btn03f from '../assets/icons/leftNaviBtn03f.svg'
import btn04n from '../assets/icons/leftNaviBtn04n.svg'
import btn04f from '../assets/icons/leftNaviBtn04f.svg'

const buttons = [
  { n: btn01n, f: btn01f, x: 0, y: 0, href: '#top', circleX: 1, circleY: 1 },
  { n: btn02n, f: btn02f, x: 0, y: 68, href: '#design-pieces', circleX: 1, circleY: 69 },
  { n: btn03n, f: btn03f, x: 0, y: 137, href: '#motion-edit', circleX: 1, circleY: 137 },
  { n: btn04n, f: btn04f, x: 0, y: 204, href: '#infographics', circleX: 1, circleY: 205 },
]

function LeftNav() {
  const navRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    let ctx
    const cancel = whenLayoutReady(() => {
      ctx = gsap.context(() => {
        gsap.to(navRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#design-pieces',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    })
    return () => {
      cancel()
      ctx && ctx.revert()
    }
  }, [])

  const active = buttons[activeIndex]

  return (
    <nav className="left-nav" ref={navRef} style={{ left: pxToVw(6) }}>
      <img src={leftNaviBase} className="left-nav-base" alt="" style={{ width: pxToVw(46) }} />
      <span
        className="left-nav-circle"
        style={{ left: pxToVw(active.circleX), top: pxToVw(active.circleY), width: pxToVw(44) }}
      >
        <img src={leftNaviCircle} alt="" />
      </span>
      {buttons.map((btn, i) => (
        <a
          key={i}
          href={btn.href}
          className="left-nav-btn"
          style={{ left: pxToVw(btn.x), top: pxToVw(btn.y), width: pxToVw(46) }}
          onClick={() => setActiveIndex(i)}
          aria-label={btn.href.replace('#', '')}
        >
          <img src={btn.n} className="n" alt="" />
          <img src={btn.f} className="f" alt="" />
        </a>
      ))}
    </nav>
  )
}

export default LeftNav
