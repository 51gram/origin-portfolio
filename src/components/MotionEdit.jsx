import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import playIcon from '../assets/icons/ThumbPlayBtn.svg'
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

const clips = [
  { mp4: motionedit01Mp4, webm: motionedit01Webm },
  { mp4: motionedit02Mp4, webm: motionedit02Webm },
  { mp4: motionedit03Mp4, webm: motionedit03Webm },
  { mp4: motionedit04Mp4, webm: motionedit04Webm },
  { mp4: motionedit05Mp4, webm: motionedit05Webm },
  { mp4: motionedit06Mp4, webm: motionedit06Webm },
  { mp4: motionedit07Mp4, webm: motionedit07Webm },
  { mp4: motionedit08Mp4, webm: motionedit08Webm },
  { mp4: motionedit09Mp4, webm: motionedit09Webm },
]

function MotionEdit() {
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

      gsap.from('.motion-clip', {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.motion-edit-grid', start: 'top 85%' },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="motion-edit" className="motion-edit" ref={rootRef}>
      <h2 className="section-heading">Motion & Edit</h2>
      <p className="section-sub">
        リズムとタイミング、視覚的な流れで組み立てたモーショングラフィックスと映像編集。
      </p>
      <div className="motion-edit-grid">
        {clips.map((clip, i) => (
          <div className="motion-clip" key={i}>
            <video muted loop autoPlay playsInline preload="metadata">
              <source src={clip.mp4} type="video/mp4" />
              <source src={clip.webm} type="video/webm" />
            </video>
            <img className="motion-clip-play" src={playIcon} alt="" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default MotionEdit
