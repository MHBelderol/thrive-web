import { useRef } from 'react'
import { teamMembers } from '../../data/team'
import TeamCard from '../cards/TeamCard'
import SectionTitle from '../SectionTitle'

export default function TeamSection() {
  const trackRef = useRef<HTMLDivElement>(null)

  const frame = useRef(0)

  // Eased scroll animation (smoother than native smooth-scroll fighting with scroll-snap).
  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.firstElementChild as HTMLElement | null
    const step = card ? card.offsetWidth + 24 : track.clientWidth
    const maxLeft = track.scrollWidth - track.clientWidth
    const from = track.scrollLeft
    const to = Math.max(0, Math.min(maxLeft, Math.round(from / step) * step + direction * step))
    const duration = 600

    cancelAnimationFrame(frame.current)
    track.classList.add('is-animating')
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2
      track.scrollLeft = from + (to - from) * eased
      if (p < 1) frame.current = requestAnimationFrame(tick)
      else track.classList.remove('is-animating')
    }
    frame.current = requestAnimationFrame(tick)
  }

  return (
    <div className="container-fluid py-6 px-5">
      <SectionTitle title="Our Team Members" />
      <div className="team-slider position-relative">
        <button
          type="button"
          className="btn btn-primary btn-lg-square rounded-circle team-slider-btn team-slider-prev"
          aria-label="Previous team members"
          onClick={() => scrollByCard(-1)}
        >
          <i className="fa fa-chevron-left"></i>
        </button>
        <div className="team-slider-track" ref={trackRef}>
          {teamMembers.map((member) => (
            <div key={member.image} className="team-slider-slide">
              <TeamCard member={member} />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="btn btn-primary btn-lg-square rounded-circle team-slider-btn team-slider-next"
          aria-label="Next team members"
          onClick={() => scrollByCard(1)}
        >
          <i className="fa fa-chevron-right"></i>
        </button>
      </div>
    </div>
  )
}
