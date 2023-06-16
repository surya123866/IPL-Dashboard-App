import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: [],
    recentMatches: [],
    teamBannerUrl: '',
    isLoading: true,
    className: '',
  }

  componentDidMount() {
    this.getTeamMatchesList()
  }

  getTeamMatchesList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattedLatestMatchDetails = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }
    const formattedRecentMatchDetails = data.recent_matches.map(eachMatch => ({
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      date: eachMatch.date,
      firstInnings: eachMatch.first_innings,
      id: eachMatch.id,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      secondInnings: eachMatch.second_innings,
      umpires: eachMatch.umpires,
      venue: eachMatch.venue,
    }))

    this.setState({
      latestMatchDetails: formattedLatestMatchDetails,
      recentMatches: formattedRecentMatchDetails,
      teamBannerUrl: data.team_banner_url,
      isLoading: false,
      className: id,
    })
  }

  render() {
    const {
      latestMatchDetails,
      recentMatches,
      teamBannerUrl,
      isLoading,
      className,
    } = this.state

    return (
      <div className="App-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div className="team-matches-container">
            <img className="team_image" src={teamBannerUrl} alt="team banner" />
            <p className="latest_matches_heading">LatestMatches</p>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="match-cards-container">
              {recentMatches.map(eachMatch => (
                <MatchCard recentMatchDetails={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
