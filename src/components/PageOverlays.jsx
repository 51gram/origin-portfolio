import { pxToVw } from '../lib/layout'
import scrollDown from '../assets/icons/ScrollDown.svg'
import bgArrow from '../assets/icons/BgArrow01.svg'
import logoMarkIcon from '../assets/icons/LogoMarkIcon01.svg'

const scrollDownIcon = { src: scrollDown, x: 725, y: 880, width: 89 }

const bgArrows = [
  { x: 760, y: 830 },
  { x: 715, y: 3450 },
  { x: 715, y: 5525 },
]

const logoMarks = [
  { x: 1315, y: 3470 },
  { x: 1340, y: 3470 },
  { x: 60, y: 3555 },
  { x: 95, y: 3555 },
  { x: 1315, y: 5510 },
  { x: 1350, y: 5510 },
]

function PageOverlays() {
  return (
    <div className="page-overlays" aria-hidden="true">
      <img
        src={scrollDownIcon.src}
        className="overlay-scroll-down"
        alt=""
        style={{ left: pxToVw(scrollDownIcon.x), top: pxToVw(scrollDownIcon.y), width: pxToVw(scrollDownIcon.width) }}
      />
      {bgArrows.map((a, i) => (
        <img
          key={i}
          src={bgArrow}
          className="overlay-bg-arrow"
          alt=""
          style={{ left: pxToVw(a.x), top: pxToVw(a.y), width: pxToVw(12) }}
        />
      ))}
      {logoMarks.map((m, i) => (
        <img
          key={i}
          src={logoMarkIcon}
          className="overlay-logo-mark"
          alt=""
          style={{ left: pxToVw(m.x), top: pxToVw(m.y), width: pxToVw(30) }}
        />
      ))}
    </div>
  )
}

export default PageOverlays
