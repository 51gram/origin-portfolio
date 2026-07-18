import { useEffect, useRef, useState } from 'react'
import { gsap } from '../lib/gsap'
import hero01Mp4 from '../assets/movie/hero/Hero01.mp4'
import hero01Webm from '../assets/movie/hero/Hero01.webm'
import hero02Mp4 from '../assets/movie/hero/Hero02.mp4'
import hero02Webm from '../assets/movie/hero/Hero02.webm'
import hero03Mp4 from '../assets/movie/hero/Hero03.mp4'
import hero03Webm from '../assets/movie/hero/Hero03.webm'

const videos = [
  { mp4: hero01Mp4, webm: hero01Webm },
  { mp4: hero02Mp4, webm: hero02Webm },
  { mp4: hero03Mp4, webm: hero03Webm },
]

function Hero() {
  const videoRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const active = videoRefs.current[activeIndex]
    if (!active) return

    gsap.set(active, { opacity: 0 })
    gsap.to(active, { opacity: 1, duration: 0.5, ease: 'none' })

    active.currentTime = 0
    active.play()

    function handleEnded() {
      gsap.to(active, {
        opacity: 0,
        duration: 0.5,
        ease: 'none',
        onComplete: () => {
          setActiveIndex((i) => (i + 1) % videos.length)
        },
      })
    }

    active.addEventListener('ended', handleEnded)
    return () => active.removeEventListener('ended', handleEnded)
  }, [activeIndex])

  return (
    <section id="top" className="hero">
      <div className="hero-video-frame">
        {videos.map((video, i) => (
          <video
            key={i}
            ref={(el) => (videoRefs.current[i] = el)}
            className="hero-video"
            muted
            playsInline
            preload="auto"
          >
            <source src={video.mp4} type="video/mp4" />
            <source src={video.webm} type="video/webm" />
          </video>
        ))}
      </div>
    </section>
  )
}

export default Hero
