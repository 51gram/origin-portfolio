import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { pxToVw } from '../lib/layout'
import newsTsuisekiLogo01 from '../assets/images/works/news_tsuiseki_logo01.png'
import taiwanLogo from '../assets/images/works/taiwan_logo.png'
import taiwanIcon01 from '../assets/images/works/taiwan_icon01.png'
import taiwanIcon02 from '../assets/images/works/taiwan_icon02.png'
import newsWagamichiLogo from '../assets/images/works/news_wagamichi_logo.png'
import annaDaisenLogo from '../assets/images/works/anna_daisen_logo.png'
import annaGifuLogo from '../assets/images/works/anna_gifu_logo.png'
import newsRunspoLogo01 from '../assets/images/works/news_runspo_logo01.png'
import kiyoLogo from '../assets/images/works/kiyo_logo.png'
import newsRunspoTelop01 from '../assets/images/works/news_runspo_telop01.png'
import newsrunnerTelop04 from '../assets/images/works/newsrunner_telop04.png'
import newsWagamichiTelop02 from '../assets/images/works/news_wagamichi_telop02.png'
import newsrunnerTelop11 from '../assets/images/works/newsrunner_telop11.png'
import newsrunnerTelop09 from '../assets/images/works/newsrunner_telop09.png'
import newsrunnerTelop07 from '../assets/images/works/newsrunner_telop07.png'
import newsWagamichiTelop04 from '../assets/images/works/news_wagamichi_telop04.png'
import newsrunnerTelop12 from '../assets/images/works/newsrunner_telop12.png'
import newsrunnerTelop13 from '../assets/images/works/newsrunner_telop13.png'
import newsrunnerTelop10 from '../assets/images/works/newsrunner_telop10.png'
import newsrunnerTelop01 from '../assets/images/works/newsrunner_telop01.png'
import newsrunnerTelop08 from '../assets/images/works/newsrunner_telop08.png'
import newsWagamichiTelop03 from '../assets/images/works/news_wagamichi_telop03.png'
import newsrunnerTelop05 from '../assets/images/works/newsrunner_telop05.png'
import newsRunspoTelop02 from '../assets/images/works/news_runspo_telop02.png'
import newsWagamichiTelop01 from '../assets/images/works/news_wagamichi_telop01.png'
import hanaippaiTanabeTelop01 from '../assets/images/works/hanaippai_tanabe_telop01.png'
import umimachiLogo from '../assets/images/works/umimachi_logo.png'
import umimachiTelop01 from '../assets/images/works/umimachi_telop01.png'
import umimachiTelop03 from '../assets/images/works/umimachi_telop03.png'
import umimachiTelop02 from '../assets/images/works/umimachi_telop02.png'
import hongkongMap from '../assets/images/works/hongkong_map.png'
import hongkongTelop01 from '../assets/images/works/hongkong_telop01.png'
import hongkongTelop02 from '../assets/images/works/hongkong_telop02.png'
import wakayamaDeKanpaiLogo01 from '../assets/images/works/WakayamaDeKanpai_logo01.png'

const images = [
  { src: newsTsuisekiLogo01, size: 455, x: 158, y: 343 },
  { src: taiwanLogo, size: 414, x: 760, y: 235 },
  { src: taiwanIcon01, size: 124, x: 1245, y: 420 },
  { src: taiwanIcon02, size: 124, x: 1215, y: 280 },
  { src: newsWagamichiLogo, size: 452, x: 290, y: 590 },
  { src: annaDaisenLogo, size: 500, x: 835, y: 640 },
  { src: annaGifuLogo, size: 640, x: 60, y: 705 },
  { src: newsRunspoLogo01, size: 600, x: 760, y: 920 },
  { src: kiyoLogo, size: 170, x: 75, y: 1620 },
  { src: newsRunspoTelop01, size: 220, x: 50, y: 1125 },
  { src: newsrunnerTelop04, size: 220, x: 50, y: 1255 },
  { src: newsWagamichiTelop02, size: 220, x: 50, y: 1370 },
  { src: newsrunnerTelop11, size: 220, x: 50, y: 1475 },
  { src: newsrunnerTelop09, size: 281, x: 300, y: 1155 },
  { src: newsrunnerTelop07, size: 246, x: 300, y: 1265 },
  { src: newsWagamichiTelop04, size: 267, x: 300, y: 1350 },
  { src: newsrunnerTelop12, size: 103, x: 600, y: 1060 },
  { src: newsrunnerTelop13, size: 90, x: 730, y: 1070 },
  { src: newsrunnerTelop10, size: 520, x: 855, y: 1140 },
  { src: newsrunnerTelop01, size: 520, x: 855, y: 1280 },
  { src: newsrunnerTelop08, size: 520, x: 855, y: 1400 },
  { src: newsWagamichiTelop03, size: 520, x: 855, y: 1540 },
  { src: newsrunnerTelop05, size: 520, x: 855, y: 1690 },
  { src: newsRunspoTelop02, size: 520, x: 290, y: 1480 },
  { src: newsWagamichiTelop01, size: 520, x: 290, y: 1580 },
  { src: hanaippaiTanabeTelop01, size: 520, x: 290, y: 1660 },
  { src: umimachiLogo, size: 375, x: 360, y: 1810 },
  { src: umimachiTelop01, size: 310, x: 575, y: 2180 },
  { src: umimachiTelop03, size: 167, x: 330, y: 2225 },
  { src: umimachiTelop02, size: 170, x: 330, y: 2335 },
  { src: hongkongMap, size: 265, x: 835, y: 1840 },
  { src: hongkongTelop01, size: 173, x: 1130, y: 1880 },
  { src: hongkongTelop02, size: 248, x: 1130, y: 1995 },
  { src: wakayamaDeKanpaiLogo01, size: 445, x: 910, y: 2195 },
]

const FRAME_HEIGHT = 2560

function DesignPieces() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.design-pieces-heading, .design-pieces-sub, .design-pieces-line, .view-detail', {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 80%' },
      })

      gsap.from('.design-piece', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.04,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.design-pieces-layers', start: 'top 85%' },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="design-pieces" className="design-pieces" ref={rootRef}>
      <div
        className="design-pieces-layers"
        style={{ height: pxToVw(FRAME_HEIGHT) }}
      >
        <h2
          className="design-pieces-heading"
          style={{ left: pxToVw(77), top: pxToVw(100), fontSize: pxToVw(96) }}
        >
          Design Pieces
        </h2>
        <p
          className="design-pieces-sub"
          style={{ left: pxToVw(77), top: pxToVw(217), fontSize: pxToVw(19) }}
        >
          A collection of logos, titles,
          <br />
          captions, and on-screen graphic elements.
        </p>
        <span
          className="design-pieces-line"
          style={{ left: pxToVw(77), top: pxToVw(200), width: pxToVw(670), height: pxToVw(5) }}
        />
        <span
          className="view-detail"
          style={{ left: pxToVw(58), top: pxToVw(313), fontSize: pxToVw(14) }}
        >
          view detail
        </span>

        {images.map((img, i) => (
          <img
            key={i}
            className="design-piece"
            src={img.src}
            alt=""
            style={{ left: pxToVw(img.x), top: pxToVw(img.y), width: pxToVw(img.size) }}
          />
        ))}
      </div>
    </section>
  )
}

export default DesignPieces
