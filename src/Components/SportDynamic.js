import React, {useEffect, useState} from 'react';
import axios from 'axios';

const SportDynamic = () => {
  const MANUID = 66;
  const FIXTURE_URL = `https://api.football-data.org/v2/teams/${MANUID}/matches?status=SCHEDULED`

  const [homeID, setHomeID] = useState(null)
  const [homeName, setHomeName] = useState(null)

  const [awayID, setAwayID] = useState(null)
  const [awayName, setAwayName] = useState(null)

  const [homeImg, setHomeImg] = useState(null)
  const [awayImg, setAwayImg] = useState(null)

  const [competition, setCompetition] = useState(null)
  const [date, setDate] = useState(null)

  const CREST_URL = `https://api.football-data.org/v2/teams/`

  const config = {
    headers: {
      'X-Auth-Token': `${process.env.REACT_APP_SPORT}`
    }
  }  

  // Load next match and set state
  useEffect(() => {
    axios.get(FIXTURE_URL, config)
      .then((response) => {
        const {matches} = response.data
        setHomeID(matches[0].homeTeam.id)
        setHomeName(matches[0].homeTeam.name)
        setAwayID(matches[0].awayTeam.id)
        setAwayName(matches[0].awayTeam.name)
        setCompetition(matches[0].competition.name)
        setDate(matches[0].utcDate)
      })
      .catch(e => console.log(e))
  }, [])

  // Once state is set, retrieve crests
  useEffect(() => {
    if (homeID !== null && homeImg === null) {
      console.log('calling home')
      axios.get(`https://api.football-data.org/v2/teams/${homeID}`, config)
        .then(response => setHomeImg(response.data.crestUrl))
    }
    if (awayID !== null && awayImg === null) {
      console.log('calling away')
      axios.get(`https://api.football-data.org/v2/teams/${awayID}`, config)
        .then(response => setAwayImg(response.data.crestUrl))
    }
  }, [homeID, awayID])

    return (
        <div className='WeatherDynamic mb-4'>
            <div className="block">
                <div className="box has-text-centered">
                    <h5 className="is-size-5 mb-6">My favourite team's next game:</h5>
                    <div className="columns is-gapless">
                      <div className="column is-5">
                      {
                        homeImg === null
                        ? "..."
                        : <img src={homeImg} alt="Home team" />
                      }  
                      {
                        homeID === null
                        ? "..."
                        : <h6 className='is-size-6 is-uppercase has-text-black'>{homeName}</h6>
                      }
                      </div>
                      <div className="column is-2">vs.</div>
                      <div className="column is-5">
                      {
                        awayImg === null
                        ? "..."
                        : <img src={awayImg} alt="Away team" />
                      }  
                      {
                        awayID === null
                        ? "..."
                        : <h6 className='is-size-6 is-uppercase has-text-black'>{awayName}</h6>
                      }
                      </div>
                    </div>

                    <h3 className="is-size-5"><b>{date === null ? "Loading..." : `${date.slice(0, 10)}`}</b></h3>
                    <h3 className="is-size-5"><em>{competition === null ? "Loading..." : `${competition}`}</em></h3>

                </div>
            </div>
        </div>
    )
}

export default SportDynamic;