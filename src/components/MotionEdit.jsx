import { useEffect, useRef, useState } from 'react'
import { gsap, whenLayoutReady } from '../lib/gsap'
import { pxToVw } from '../lib/layout'
import playIcon from '../assets/icons/ThumbPlayBtn.png'
import btnCloseN from '../assets/icons/BtnClosen.svg'
import btnCloseF from '../assets/icons/BtnClosef.svg'
import btnReplayN from '../assets/icons/BtnReplayn.svg'
import btnReplayF from '../assets/icons/BtnReplayf.svg'
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
import motionedit01Mp4 from '../assets/movie/works/motionedit01.mp4'
import motionedit01Webm from '../assets/movie/works/motionedit01.webm'
import motionedit02Mp4 from '../assets/movie/works/motionedit02.mp4'
import motionedit02Webm from '../assets/movie/works/motionedit02.webm'
import motionedit03Mp4 from '../assets/movie/works/motionedit03.mp4'
import motionedit03Webm from '../assets/movie/works/motionedit03.webm'
import motionedit04Mp4 from '../assets/movie/works/motionedit04.mp4'
import motionedit04Webm from '../assets/movie/works/motionedit04.webm'
import motionedit05Mp4 from '../assets/movie/works/motionedit05.mp4'
import motionedit05Webm from '../assets/movie/works/motionedit05.webm'
import motionedit06Mp4 from '../assets/movie/works/motionedit06.mp4'
import motionedit06Webm from '../assets/movie/works/motionedit06.webm'
import motionedit07Mp4 from '../assets/movie/works/motionedit07.mp4'
import motionedit07Webm from '../assets/movie/works/motionedit07.webm'
import motionedit08Mp4 from '../assets/movie/works/motionedit08.mp4'
import motionedit08Webm from '../assets/movie/works/motionedit08.webm'
import motionedit09Mp4 from '../assets/movie/works/motionedit09.mp4'
import motionedit09Webm from '../assets/movie/works/motionedit09.webm'

const videos = {
  motionedit01: { mp4: motionedit01Mp4, webm: motionedit01Webm },
  motionedit02: { mp4: motionedit02Mp4, webm: motionedit02Webm },
  motionedit03: { mp4: motionedit03Mp4, webm: motionedit03Webm },
  motionedit04: { mp4: motionedit04Mp4, webm: motionedit04Webm },
  motionedit05: { mp4: motionedit05Mp4, webm: motionedit05Webm },
  motionedit06: { mp4: motionedit06Mp4, webm: motionedit06Webm },
  motionedit07: { mp4: motionedit07Mp4, webm: motionedit07Webm },
  motionedit08: { mp4: motionedit08Mp4, webm: motionedit08Webm },
  motionedit09: { mp4: motionedit09Mp4, webm: motionedit09Webm },
}

const thumbs169 = [
  { src: annaGifuTitle, x: 80, y: 370, video: 'motionedit01' },
  { src: taiwanTitle, x: 518, y: 370, video: 'motionedit02' },
  { src: newsrunnerTitle, x: 955, y: 370, video: 'motionedit03' },
  { src: umimachiCut01, x: 80, y: 630 },
  { src: hongkongTitle, x: 518, y: 630 },
  { src: kaoCut02, x: 955, y: 630 },
  { src: savagameCut01, x: 80, y: 890 },
  { src: kounoikeTitle, x: 518, y: 890, video: 'motionedit04' },
  { src: newsWagamichiTitle, x: 955, y: 890, video: 'motionedit05' },
  { src: vpdsLogoanime, x: 80, y: 1150, video: 'motionedit06' },
  { src: oeCut01, x: 518, y: 1150 },
  { src: knotLogoanime, x: 955, y: 1150, video: 'motionedit07' },
]

const thumbs916 = [
  { src: annaHoshinoTomamuCut01, x: 80, y: 1442 },
  { src: annaJtbYamaguchiCut01, x: 341, y: 1442 },
  { src: annaJtbToyamaishikawaCut01, x: 601, y: 1442, video: 'motionedit08' },
  { src: annaJtbKinosakiCut01, x: 862, y: 1442, video: 'motionedit09' },
  { src: annaHoshinoKohamaCut01, x: 1123, y: 1442 },
]

const playButtons = [
  { x: 190, y: 392, video: 'motionedit01' },
  { x: 628, y: 392, video: 'motionedit02' },
  { x: 1065, y: 392, video: 'motionedit03' },
  { x: 628, y: 912, video: 'motionedit04' },
  { x: 1065, y: 912, video: 'motionedit05' },
  { x: 190, y: 1172, video: 'motionedit06' },
  { x: 1065, y: 1172, video: 'motionedit07' },
  { x: 628, y: 1560, video: 'motionedit08' },
  { x: 888, y: 1560, video: 'motionedit09' },
]

const FRAME_HEIGHT = 1900

function InlineThumbVideo({ videoKey, aspect }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {})
        } else {
          el.pause()
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const clip = videos[videoKey]

  return (
    <video ref={ref} className={`motion-thumb-video ${aspect}`} muted loop playsInline preload="metadata">
      <source src={clip.mp4} type="video/mp4" />
      <source src={clip.webm} type="video/webm" />
    </video>
  )
}

function MotionEdit() {
  const rootRef = useRef(null)
  const modalVideoRef = useRef(null)
  const [activeVideo, setActiveVideo] = useState(null)
  const [videoEnded, setVideoEnded] = useState(false)

  useEffect(() => {
    let ctx
    const cancel = whenLayoutReady(() => {
      ctx = gsap.context(() => {
        gsap.from('.motion-edit-heading, .motion-edit-sub, .motion-edit-line', {
          opacity: 0,
          y: 20,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: rootRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        })

        gsap.from('.motion-thumb', {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.04,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.motion-edit-grid', start: 'top 85%', toggleActions: 'play none none reverse' },
        })
      }, rootRef)
    })

    return () => {
      cancel()
      ctx && ctx.revert()
    }
  }, [])

  function openVideo(key) {
    setVideoEnded(false)
    setActiveVideo(key)
  }

  function closeVideo() {
    setActiveVideo(null)
  }

  function handleReplay() {
    const el = modalVideoRef.current
    if (!el) return
    el.currentTime = 0
    el.play()
    setVideoEnded(false)
  }

  const activeClip = activeVideo ? videos[activeVideo] : null

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
            <img src={t.src} alt="" className={t.video ? 'motion-thumb-static-img' : undefined} />
            {t.video && <InlineThumbVideo videoKey={t.video} aspect="motion-thumb-video-169 motion-thumb-mobile-only" />}
          </span>
        ))}

        {thumbs916.map((t, i) => (
          <span
            key={`916-${i}`}
            className="motion-thumb motion-thumb-916"
            style={{ left: pxToVw(t.x), top: pxToVw(t.y), width: pxToVw(237) }}
          >
            <img src={t.src} alt="" className={t.video ? 'motion-thumb-static-img' : undefined} />
            {t.video && <InlineThumbVideo videoKey={t.video} aspect="motion-thumb-video-916 motion-thumb-mobile-only" />}
          </span>
        ))}

        {playButtons.map((btn, i) => (
          <button
            key={i}
            type="button"
            className="motion-play-btn"
            style={{ left: pxToVw(btn.x), top: pxToVw(btn.y), width: pxToVw(185), height: pxToVw(185) }}
            onClick={() => openVideo(btn.video)}
            aria-label="動画を再生"
          >
            <img src={playIcon} alt="" />
          </button>
        ))}
      </div>

      {activeClip && (
        <div className="motion-modal-overlay" onClick={closeVideo}>
          <div
            className="motion-modal"
            style={{ width: pxToVw(800), height: pxToVw(450) }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={modalVideoRef}
              className="motion-modal-video"
              autoPlay
              playsInline
              onEnded={() => setVideoEnded(true)}
            >
              <source src={activeClip.mp4} type="video/mp4" />
              <source src={activeClip.webm} type="video/webm" />
            </video>

            <button
              type="button"
              className="motion-modal-btn motion-modal-close"
              style={{ left: pxToVw(510), top: pxToVw(475), width: pxToVw(178.3), height: pxToVw(53.69) }}
              onClick={closeVideo}
              aria-label="閉じる"
            >
              <img src={btnCloseN} className="n" alt="" />
              <img src={btnCloseF} className="f" alt="" />
            </button>

            <button
              type="button"
              className="motion-modal-btn motion-modal-replay"
              style={{ left: pxToVw(115), top: pxToVw(475), width: pxToVw(198.3), height: pxToVw(53.64), opacity: videoEnded ? 1 : 0 }}
              onClick={handleReplay}
              aria-label="もう一度再生"
            >
              <img src={btnReplayN} className="n" alt="" />
              <img src={btnReplayF} className="f" alt="" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default MotionEdit
