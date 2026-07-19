import { useEffect, useRef } from 'react'
import { gsap, whenLayoutReady } from '../lib/gsap'
import { pxToVw } from '../lib/layout'
import infoBgPattern from '../assets/icons/InfoBgPattern.svg'
import umimachiInfo01 from '../assets/images/works/umimachi_info01.png'
import umimachiInfo02 from '../assets/images/works/umimachi_info02.png'
import kurobeCut01 from '../assets/images/works/kurobe_cut01.png'
import kurobeCut02 from '../assets/images/works/kurobe_cut02.png'
import kariuchiCut03 from '../assets/images/works/kariuchi_cut03.png'
import kariuchiCut02 from '../assets/images/works/kariuchi_cut02.png'
import kariuchiCut01 from '../assets/images/works/kariuchi_cut01.png'
import evergreenCut01 from '../assets/images/works/evergreen_cut01.png'
import kansaidaigakuCut02 from '../assets/images/works/kansaidaigaku_cut02.png'
import kansaidaigakuCut01 from '../assets/images/works/kansaidaigaku_cut01.png'
import kaoCut01 from '../assets/images/works/kao_cut01.png'
import kaoCut03 from '../assets/images/works/kao_cut03.png'
import theOuenStudioCut02 from '../assets/images/works/the_ouen_studio_cut02.png'
import theOuenStudioCut01 from '../assets/images/works/the_ouen_studio_cut01.png'
import mitubishiCut02 from '../assets/images/works/mitubishi_cut02.png'
import mitubishiCut01 from '../assets/images/works/mitubishi_cut01.png'

const thumbnails = [
  { src: umimachiInfo01, x: 80, y: 319 },
  { src: umimachiInfo02, x: 408, y: 319 },
  { src: kurobeCut01, x: 736, y: 319 },
  { src: kurobeCut02, x: 1064, y: 319 },
  { src: kariuchiCut03, x: 80, y: 517 },
  { src: kariuchiCut02, x: 408, y: 517 },
  { src: kariuchiCut01, x: 736, y: 517 },
  { src: evergreenCut01, x: 1064, y: 517 },
  { src: kansaidaigakuCut02, x: 80, y: 716 },
  { src: kansaidaigakuCut01, x: 408, y: 716 },
  { src: kaoCut01, x: 736, y: 716 },
  { src: kaoCut03, x: 1064, y: 716 },
  { src: theOuenStudioCut02, x: 80, y: 914 },
  { src: theOuenStudioCut01, x: 408, y: 914 },
  { src: mitubishiCut02, x: 736, y: 914 },
  { src: mitubishiCut01, x: 1064, y: 914 },
]

const FRAME_HEIGHT = 1450

function Infographics() {
  const rootRef = useRef(null)

  useEffect(() => {
    let ctx
    const cancel = whenLayoutReady(() => {
      ctx = gsap.context(() => {
        gsap.from('.infographics-heading, .infographics-sub, .infographics-line', {
          opacity: 0,
          y: 20,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: rootRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        })

        gsap.from('.infographic-item', {
          opacity: 0,
          y: 40,
          duration: 0.7,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.infographics-grid', start: 'top 85%', toggleActions: 'play none none reverse' },
        })
      }, rootRef)
    })

    return () => {
      cancel()
      ctx && ctx.revert()
    }
  }, [])

  return (
    <section id="infographics" className="infographics" ref={rootRef}>
      <div className="infographics-grid" style={{ height: pxToVw(FRAME_HEIGHT) }}>
        <div
          className="infographics-bg-pattern"
          aria-hidden="true"
          style={{
            left: pxToVw(34),
            top: pxToVw(270),
            width: pxToVw(1350),
            height: pxToVw(1150),
            backgroundImage: `url(${infoBgPattern})`,
            backgroundSize: `${pxToVw(50)} ${pxToVw(50)}`,
          }}
        />
        <h2
          className="infographics-heading"
          style={{ left: pxToVw(88), top: pxToVw(82), fontSize: pxToVw(96) }}
        >
          Infographics
        </h2>
        <p
          className="infographics-sub"
          style={{ left: pxToVw(88), top: pxToVw(192), fontSize: pxToVw(19) }}
        >
          Information graphics, diagrams, and maps designed to
          <br />
          make complex content easier to understand.
        </p>
        <span
          className="infographics-line"
          style={{ left: pxToVw(87), top: pxToVw(171), width: pxToVw(556), height: pxToVw(5) }}
        />

        {thumbnails.map((t, i) => (
          <span
            key={i}
            className="infographic-item"
            style={{ left: pxToVw(t.x), top: pxToVw(t.y), width: pxToVw(296) }}
          >
            <img src={t.src} alt="" />
          </span>
        ))}
      </div>
    </section>
  )
}

export default Infographics
