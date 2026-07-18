import logoUrl from '../assets/icons/51gram_logo.svg'

function Header() {
  return (
    <header className="site-header">
      <a href="#top">
        <img src={logoUrl} alt="51gram" className="site-logo" />
      </a>
    </header>
  )
}

export default Header
