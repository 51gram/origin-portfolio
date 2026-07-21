import { pxToVw } from '../lib/layout'
import logoUrl from '../assets/icons/51gram_logo.svg'
import footerWorks01 from '../assets/icons/FooterWorks01.svg'
import footerWorks02 from '../assets/icons/FooterWorks02.svg'
import footerWorks03 from '../assets/icons/FooterWorks03.svg'
import footerWorks04 from '../assets/icons/FooterWorks04.svg'
import footerWorks05 from '../assets/icons/FooterWorks05.svg'
import footerWorks06 from '../assets/icons/FooterWorks06.svg'
import naviBtn01n from '../assets/icons/FooterNaviBtn01n.svg'
import naviBtn01f from '../assets/icons/FooterNaviBtn01f.svg'
import naviBtn02n from '../assets/icons/FooterNaviBtn02n.svg'
import naviBtn02f from '../assets/icons/FooterNaviBtn02f.svg'
import naviBtn03n from '../assets/icons/FooterNaviBtn03n.svg'
import naviBtn03f from '../assets/icons/FooterNaviBtn03f.svg'
import naviBtn04n from '../assets/icons/FooterNaviBtn04n.svg'
import naviBtn04f from '../assets/icons/FooterNaviBtn04f.svg'
import footerContact from '../assets/icons/FooterContact.svg'
import footerInstagramN from '../assets/icons/FooterInstagramn.svg'
import footerInstagramF from '../assets/icons/FooterInstagramf.svg'

const works = [
  { src: footerWorks01, width: 123.04, x: 46, y: 145 },
  { src: footerWorks02, width: 106.97, x: 203, y: 145 },
  { src: footerWorks03, width: 123.05, x: 46, y: 178 },
  { src: footerWorks04, width: 106.95, x: 203, y: 178 },
  { src: footerWorks05, width: 122.95, x: 46, y: 211 },
  { src: footerWorks06, width: 106.85, x: 203, y: 211 },
]

const navButtons = [
  { n: naviBtn01n, f: naviBtn01f, width: 104.68, x: 95, y: 35, href: '#top' },
  { n: naviBtn02n, f: naviBtn02f, width: 149.11, x: 330, y: 35, href: '#design-pieces' },
  { n: naviBtn03n, f: naviBtn03f, width: 145.66, x: 570, y: 35, href: '#motion-edit' },
  { n: naviBtn04n, f: naviBtn04f, width: 133.82, x: 800, y: 35, href: '#infographics' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-frame" style={{ width: pxToVw(1320), height: pxToVw(370) }}>
        <div className="footer-col footer-col-left">
          <img
            src={logoUrl}
            className="footer-logo-img"
            alt="51gram"
            style={{ left: pxToVw(50), top: pxToVw(35), width: pxToVw(260) }}
          />
          <div className="footer-works-grid">
            {works.map((w, i) => (
              <img
                key={i}
                src={w.src}
                alt=""
                className="footer-works-img"
                style={{ left: pxToVw(w.x), top: pxToVw(w.y), width: pxToVw(w.width) }}
              />
            ))}
          </div>
        </div>
        <div className="footer-col footer-col-right">
          <div className="footer-nav-row">
            {navButtons.map((btn, i) => (
              <a
                key={i}
                href={btn.href}
                className="footer-nav-btn"
                style={{ left: pxToVw(btn.x), top: pxToVw(btn.y), width: pxToVw(btn.width) }}
              >
                <img src={btn.n} className="n" alt="" />
                <img src={btn.f} className="f" alt="" />
              </a>
            ))}
          </div>
          <div className="footer-contact-row">
            <img
              src={footerContact}
              alt=""
              className="footer-contact-img"
              style={{ left: pxToVw(686), top: pxToVw(219), width: pxToVw(116.84) }}
            />
            <a
              href="https://www.instagram.com/coichitti/"
              target="_blank"
              rel="noreferrer"
              className="footer-nav-btn footer-instagram-btn"
              style={{ left: pxToVw(821), top: pxToVw(219), width: pxToVw(105.17) }}
            >
              <img src={footerInstagramN} className="n" alt="" />
              <img src={footerInstagramF} className="f" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
