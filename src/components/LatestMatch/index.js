import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails
  return (
    <div className="latest-match-table">
      <div className="completing-team-details">
        <p className="completing-teamName">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="date">{venue}</p>
        <p className="date">{result}</p>
      </div>

      <img
        className="completing-team-image"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />
      <div className="completing-team-details">
        <p className="completing-teamName">First Innings</p>
        <p className="date">{firstInnings}</p>
        <p className="completing-teamName">Second Innings</p>
        <p className="date">{secondInnings}</p>
        <p className="completing-teamName">Man of Match</p>
        <p className="date">{manOfTheMatch}</p>
        <p className="completing-teamName">Umpire</p>
        <p className="date">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
