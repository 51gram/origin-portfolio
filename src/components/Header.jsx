import { useState } from 'react'
import { pxToVw } from '../lib/layout'
import logoUrl from '../assets/icons/51gram_logo.svg'
import qrBtn from '../assets/icons/QrBtn.svg'
import qrCode from '../assets/icons/qr-code.png'
import btnCloseN from '../assets/icons/BtnClosen.svg'
import btnCloseF from '../assets/icons/BtnClosef.svg'

function Header() {
  const [qrOpen, setQrOpen] = useState(false)

  return (
    <header className="site-header">
      <a href="#top">
        <img src={logoUrl} alt="51gram" className="site-logo" />
      </a>
      <button
        type="button"
        className="header-qr-btn"
        style={{ left: '85%' }}
        onClick={() => setQrOpen(true)}
        aria-label="QRコードを表示"
      >
        <img src={qrBtn} alt="" />
      </button>

      {qrOpen && (
        <div className="qr-modal-overlay" onClick={() => setQrOpen(false)}>
          <div className="qr-modal" onClick={(e) => e.stopPropagation()}>
            <img src={qrCode} alt="QR code" className="qr-modal-image" style={{ width: pxToVw(348) }} />
            <p className="qr-modal-url" style={{ fontSize: pxToVw(50) }}>
              https://51gram.com/
            </p>
            <button
              type="button"
              className="qr-modal-close"
              onClick={() => setQrOpen(false)}
              aria-label="閉じる"
            >
              <img src={btnCloseN} className="n" alt="" />
              <img src={btnCloseF} className="f" alt="" />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
