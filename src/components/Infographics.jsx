import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import hongkongMap from '../assets/images/works/hongkong_map.png'
import umimachiInfo01 from '../assets/images/works/umimachi_info01.png'
import umimachiInfo02 from '../assets/images/works/umimachi_info02.png'

const items = [hongkongMap, umimachiInfo01, umimachiInfo02]

function Infographics() {
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

      gsap.from('.infographic-item', {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.infographics-grid', start: 'top 85%' },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="infographics" className="infographics" ref={rootRef}>
      <div className="infographics-dots" aria-hidden="true" />
      <h2 className="section-heading">Infographics</h2>
      <p className="section-sub">
        複雑な情報をわかりやすく伝えるための、インフォグラフィック・図解・マップ制作。
      </p>
      <div className="infographics-grid">
        {items.map((src, i) => (
          <img className="infographic-item" src={src} alt="" key={i} />
        ))}
      </div>
    </section>
  )
}

export default Infographics
