import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { footerLinks } from '../../data/navigation'
import { site, socialLinks } from '../../data/site'

function LinkList({ title }: { title: string }) {
  return (
    <div className="col-lg-3 col-md-6">
      <h3 className="text-white mb-4">{title}</h3>
      <div className="d-flex flex-column justify-content-start">
        {footerLinks.map((link, i) => (
          <Link
            key={link.to}
            className={`text-secondary${i < footerLinks.length - 1 ? ' mb-2' : ''}`}
            to={link.to}
          >
            <i className="bi bi-arrow-right text-primary me-2"></i>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: connect the newsletter sign-up to a backend / mailing list service.
    setEmail('')
  }

  return (
    <>
      <div className="container-fluid bg-primary text-secondary p-5">
        <div className="row g-5">
          <div className="col-12 text-center">
            <h1 className="display-5 mb-4">Stay Update!!!</h1>
            <form className="mx-auto" style={{ maxWidth: 600 }} onSubmit={handleSubscribe}>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control border-white p-3"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button className="btn btn-dark px-4" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-secondary p-5">
        <div className="row g-5">
          <LinkList title="Quick Links" />
          <LinkList title="Popular Links" />
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Get In Touch</h3>
            <p className="mb-2">
              <i className="bi bi-geo-alt text-primary me-2"></i>
              {site.address}
            </p>
            <p className="mb-2">
              <i className="bi bi-envelope-open text-primary me-2"></i>
              {site.email}
            </p>
            <p className="mb-0">
              <i className="bi bi-telephone text-primary me-2"></i>
              {site.footerPhone}
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Follow Us</h3>
            <div className="d-flex">
              {socialLinks.map((social, i) => (
                <a
                  key={social.label}
                  className={`btn btn-lg btn-primary btn-lg-square rounded-circle${i < socialLinks.length - 1 ? ' me-2' : ''}`}
                  href={social.href}
                  aria-label={social.label}
                >
                  <i className={`${social.icon} fw-normal`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-secondary text-center border-top footer-copyright py-4 px-5">
        <p className="m-0">
          &copy;{' '}
          <Link className="text-secondary border-bottom" to="/">
            {site.siteName}
          </Link>
          . All Rights Reserved.{' '}
          {/*
            LICENSE (CC BY 4.0, HTML Codex): the author's attribution link below MUST remain intact.
            Do not remove or hide "Designed by HTML Codex". See LICENSE.txt in the project root.
          */}
          Designed by{' '}
          <a className="text-secondary border-bottom" href="https://htmlcodex.com">
            HTML Codex
          </a>
        </p>
      </div>
    </>
  )
}
