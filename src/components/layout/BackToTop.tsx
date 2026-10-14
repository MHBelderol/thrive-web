import type { MouseEvent } from 'react'
import { useScrolledPast } from '../../hooks/useScrolledPast'

export default function BackToTop() {
  const visible = useScrolledPast(100)

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <a
      href="#"
      onClick={handleClick}
      aria-label="Back to top"
      className={`btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top${visible ? ' back-to-top-visible' : ''}`}
    >
      <i className="bi bi-arrow-up"></i>
    </a>
  )
}
