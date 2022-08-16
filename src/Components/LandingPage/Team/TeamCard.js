import './TeamCard.css'
const TeamCard = ({ name, profileImgPath, role, alt }) => {
    return (
        <div className="Teamcard-container">
            <div className="Teamcard-img-wrapper">
                <img src={profileImgPath} alt={alt} />
            </div>

            <div className="Teamcard-details">
                <h3 className="Teamcard__name">{name}</h3>
                <span className="Teamcard__role">{role}</span>
            </div>
        </div>
    )
}

export default TeamCard