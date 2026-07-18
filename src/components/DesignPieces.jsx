import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import annaGifuTitle from '../assets/images/works/anna_gifu_title.png'
import hongkongTitle from '../assets/images/works/hongkong_title.png'
import kounoikeTitle from '../assets/images/works/kounoike_title.png'
import newsrunnerTitle from '../assets/images/works/newsrunner_title.png'
import newsWagamichiTitle from '../assets/images/works/news_wagamichi_title.png'
import taiwanTitle from '../assets/images/works/taiwan_title.png'
import newsRunspoLogo from '../assets/images/works/news_runspo_logo01.png'
import newsTsuisekiLogo from '../assets/images/works/news_tsuiseki_logo01.png'
import umimachiLogo from '../assets/images/works/umimachi_logo.png'
import kiyoLogo from '../assets/images/works/kiyo_logo.png'
import taiwanLogo from '../assets/images/works/taiwan_logo.png'
import annaGifuLogo from '../assets/images/works/anna_gifu_logo.png'
import hongkongTelop01 from '../assets/images/works/hongkong_telop01.png'
import hongkongTelop02 from '../assets/images/works/hongkong_telop02.png'
import umimachiTelop01 from '../assets/images/works/umimachi_telop01.png'
import taiwanIcon01 from '../assets/images/works/taiwan_icon01.png'
import taiwanIcon02 from '../assets/images/works/taiwan_icon02.png'
import newsWagamichiLogo from '../assets/images/works/news_wagamichi_logo.png'

const pieces = [
  { src: annaGifuTitle, top: '0%', left: '4%', width: '34%', rotate: -3, z: 3 },
  { src: taiwanTitle, top: '4%', left: '46%', width: '30%', rotate: 2, z: 2 },
  { src: newsRunspoLogo, top: '20%', left: '78%', width: '16%', rotate: -4, z: 4 },
  { src: hongkongTitle, top: '26%', left: '10%', width: '30%', rotate: 3, z: 1 },
  { src: umimachiLogo, top: '24%', left: '58%', width: '14%', rotate: -6, z: 3 },
  { src: hongkongTelop01, top: '38%', left: '38%', width: '20%', rotate: 4, z: 2 },
  { src: kounoikeTitle, top: '46%', left: '68%', width: '26%', rotate: -2, z: 3 },
  { src: taiwanIcon01, top: '48%', left: '4%', width: '10%', rotate: 8, z: 4 },
  { src: taiwanIcon02, top: '55%', left: '16%', width: '10%', rotate: -8, z: 4 },
  { src: newsWagamichiTitle, top: '58%', left: '32%', width: '32%', rotate: -3, z: 1 },
  { src: kiyoLogo, top: '62%', left: '68%', width: '13%', rotate: 5, z: 2 },
  { src: umimachiTelop01, top: '70%', left: '6%', width: '22%', rotate: 2, z: 3 },
  { src: newsrunnerTitle, top: '74%', left: '48%', width: '30%', rotate: -4, z: 2 },
  { src: newsTsuisekiLogo, top: '82%', left: '78%', width: '16%', rotate: 6, z: 4 },
  { src: hongkongTelop02, top: '86%', left: '20%', width: '18%', rotate: -3, z: 1 },
  { src: taiwanLogo, top: '90%', left: '58%', width: '14%', rotate: 4, z: 3 },
  { src: annaGifuLogo, top: '94%', left: '4%', width: '13%', rotate: -5, z: 2 },
  { src: newsWagamichiLogo, top: '96%', left: '38%', width: '16%', rotate: 3, z: 4 },
]

function DesignPieces() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.section-heading', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 80%' },
      })

      const isDesktop = window.matchMedia('(min-width: 769px)').matches

      gsap.utils.toArray('.design-piece').forEach((el) => {
        if (isDesktop) {
          gsap.set(el, { rotate: el.dataset.rotate, transformOrigin: '50% 50%' })
        }

        gsap.from(el, {
          opacity: 0,
          yPercent: 15,
          scale: 0.92,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 92%' },
        })
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="design-pieces" className="design-pieces" ref={rootRef}>
      <h2 className="section-heading">Design Pieces</h2>
      <p className="section-sub">
        ロゴ、タイトル、キャプションなど、画面上のグラフィック要素を集めたコレクションです。
      </p>
      <div className="design-pieces-layers">
        {pieces.map((piece, i) => (
          <img
            key={i}
            src={piece.src}
            alt=""
            className="design-piece"
            data-rotate={piece.rotate}
            style={{
              top: piece.top,
              left: piece.left,
              width: piece.width,
              zIndex: piece.z,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default DesignPieces
