import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { pxToVw } from '../lib/layout'
import annaGifuTitle from '../assets/images/works/anna_gifu_title.png'
import taiwanTitle from '../assets/images/works/taiwan_title.png'
import newsrunnerTitle from '../assets/images/works/newsrunner_title.png'
import umimachiCut01 from '../assets/images/works/umimachi_cut01.png'
import hongkongTitle from '../assets/images/works/hongkong_title.png'
import kaoCut02 from '../assets/images/works/kao_cut02.png'
import savagameCut01 from '../assets/images/works/savagame_cut01.png'
import kounoikeTitle from '../assets/images/works/kounoike_title.png'
import newsWagamichiTitle from '../assets/images/works/news_wagamichi_title.png'
import vpdsLogoanime from '../assets/images/works/Vpds_logoanime.png'
import oeCut01 from '../assets/images/works/oe_cut01.png'
import knotLogoanime from '../assets/images/works/knot_logoanime.png'
import annaHoshinoTomamuCut01 from '../assets/images/works/anna_hoshino_tomamu_cut01.png'
import annaJtbYamaguchiCut01 from '../assets/images/works/anna_jtb_yamaguchi_cut01.png'
import annaJtbToyamaishikawaCut01 from '../assets/images/works/anna_jtb_toyamaishikawa_cut01.png'
import annaJtbKinosakiCut01 from '../assets/images/works/anna_jtb_kinosaki_cut01.png'
import annaHoshinoKohamaCut01 from '../assets/images/works/anna_hoshino_kohama_cut01.png'

const thumbs169 = [
  { src: annaGifuTitle, x: 80, y: 370 },
  { src: taiwanTitle, x: 518, y: 370 },
  { src: newsrunnerTitle, x: 955, y: 370 },
  { src: umimachiCut01, x: 80, y: 630 },
  { src: hongkongTitle, x: 518, y: 630 },
  { src: kaoCut02, x: 955, y: 630 },
  { src: savagameCut01, x: 80, y: 890 },
  { src: kounoikeTitle, x: 518, y: 890 },
  { src: newsWagamichiTitle, x: 955, y: 890 },
  { src: vpdsLogoanime, x: 80, y: 1150 },
  { src: oeCut01, x: 518, y: 1150 },
  { src: knotLogoanime, x: 955, y: 1150 },
]

const thumbs916 = [
  { src: annaHoshinoTomamuCut01, x: 80, y: 1442 },
  { src: annaJtbYamaguchiCut01, x: 341, y: 1442 },
  { src: annaJtbToyamaishikawaCut01, x: 601, y: 1442 },
  { src: annaJtbKinosakiCut01, x: 862, y: 1442 },
  { src: annaHoshinoKohamaCut01, x: 1123, y: 1442 },
]

const FRAME_HEIGHT = 1900

function MotionEdit() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.motion-edit-heading, .motion-edit-sub, .motion-edit-line', {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 80%' },
      })

      gsap.from('.motion-thumb', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.04,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.motion-edit-grid', start: 'top 85%' },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="motion-edit" className="motion-edit" ref={rootRef}>
      <div className="motion-edit-grid" style={{ height: pxToVw(FRAME_HEIGHT) }}>
        <h2
          className="motion-edit-heading"
          style={{ left: pxToVw(710), top: pxToVw(140), fontSize: pxToVw(96) }}
        >
          Motion & Edit
        </h2>
        <p
          className="motion-edit-sub"
          style={{ left: pxToVw(710), top: pxToVw(250), fontSize: pxToVw(19) }}
        >
          Motion graphics and video editing
          <br />
          shaped through rhythm, timing, and visual flow.
        </p>
        <span
          className="motion-edit-line"
          style={{ left: pxToVw(704), top: pxToVw(230), width: pxToVw(614), height: pxToVw(5) }}
        />

        {thumbs169.map((t, i) => (
          <span
            key={`169-${i}`}
            className="motion-thumb motion-thumb-169"
            style={{ left: pxToVw(t.x), top: pxToVw(t.y), width: pxToVw(405) }}
          >
            <img src={t.src} alt="" />
          </span>
        ))}

        {thumbs916.map((t, i) => (
          <span
            key={`916-${i}`}
            className="motion-thumb motion-thumb-916"
            style={{ left: pxToVw(t.x), top: pxToVw(t.y), width: pxToVw(237) }}
          >
            <img src={t.src} alt="" />
          </span>
        ))}
      </div>
    </section>
  )
}

export default MotionEdit
