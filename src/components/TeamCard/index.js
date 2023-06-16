import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, imageUrl} = teamDetails

  return (
    <li className="team_card_list">
      <img className="team-image" src={imageUrl} alt={name} />
      <p className="team_heading">{name}</p>
    </li>
  )
}

export default TeamCard
