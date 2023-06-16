import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    matchStatus,
    result,
  } = recentMatchDetails

  return (
    <li className="match-card">
      <div>
        <img
          className="team-logo"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
        <p className="completing-team-name">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className="result">{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
