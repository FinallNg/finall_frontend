import TeamCard from './TeamCard'
import { data } from './Team'
import './TeamGrid.css'

const TeamGrid = () => {
    return (
        <div className="team-grid-container">
            {
                data.map((teamMember, index) => <TeamCard key={index} name={teamMember.name} role={teamMember.role} profileImgPath={teamMember.imgPath} alt={teamMember.alt} />)
            }
        </div>
    )
}

export default TeamGrid