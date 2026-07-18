const skills = [
  'Motion Graphics',
  'Video Editing',
  'Art Direction',
  'Infographics',
  'Logo Design',
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <span className="footer-logo">
          51gram<span className="dot">.</span>
        </span>
        <ul className="footer-skills">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <nav className="footer-nav">
        <a href="#top">Page Top</a>
        <a href="#design-pieces">Design Pieces</a>
        <a href="#motion-edit">Motion & Edit</a>
        <a href="#infographics">Infographics</a>
      </nav>
      <div className="footer-contact">
        <a href="mailto:you@example.com" className="footer-contact-link">
          Contact →
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
    </footer>
  )
}

export default Footer
