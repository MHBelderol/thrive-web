import { teamMembers } from '../../data/team'
import TeamCard from '../cards/TeamCard'
import SectionTitle from '../SectionTitle'

export default function TeamSection() {
  return (
    <div className="container-fluid py-6 px-5">
      <SectionTitle title="Our Team Members" />
      <div className="row g-5">
        {teamMembers.map((member) => (
          <div key={member.image} className="col-lg-4">
            <TeamCard member={member} />
          </div>
        ))}
      </div>
    </div>
  )
}
