import { useState } from 'react'
import type { TeamMember } from '../../types'

export default function TeamCard({ member }: { member: TeamMember }) {
  const [landscape, setLandscape] = useState(false)

  return (
    <div className="team-item position-relative overflow-hidden">
      <img
        className={`img-fluid w-100${landscape ? ' team-img-landscape' : ''}`}
        src={member.image}
        alt={member.name}
        onLoad={(e) => setLandscape(e.currentTarget.naturalWidth > e.currentTarget.naturalHeight)}
      />
      <div className="team-text w-100 position-absolute top-50 text-center bg-primary p-4">
        <h3 className="text-white">{member.name}</h3>
        <p className="text-white text-uppercase mb-0">{member.designation}</p>
      </div>
    </div>
  )
}
