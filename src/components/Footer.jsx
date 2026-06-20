import Brandmark from './Brandmark.jsx'
import { BUSINESS } from '../data.js'

export default function Footer() {
  const year = 2026
  return (
    <footer className="footer">
      <div className="footer__top">
        <Brandmark variant="full" className="footer__logo" />
        <nav className="footer__nav">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="footer__bottom">
        <p>
          © {year} {BUSINESS.full}. All rights reserved.
        </p>
        <p>
          <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a> ·{' '}
          <a href={BUSINESS.emailHref}>{BUSINESS.email}</a>
        </p>
      </div>
    </footer>
  )
}
