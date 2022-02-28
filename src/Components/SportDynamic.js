import React, {useEffect, useState} from 'react';
import axios from 'axios';

const SportDynamic = () => {
  const MANUID = 66;
  const FIXTURE_URL = `https://api.football-data.org/v2/teams/${MANUID}/matches?status=SCHEDULED`

  const [homeID, setHomeID] = useState(null)
  const [homeName, setHomeName] = useState(null)

  const [awayID, setAwayID] = useState(null)
  const [awayName, setAwayName] = useState(null)

  const [competition, setCompetition] = useState(null)

  const CREST_URL = `https://api.football-data.org/v2/teams/`

  const config = {
    headers: {
      'X-Auth-Token': `${process.env.REACT_APP_SPORT}`
    }
  }  

  useEffect(() => {
    axios.get(FIXTURE_URL, config)
      .then((response) => {
        const {matches} = response.data
        console.log(matches[0])
        setHomeID(matches[0].homeTeam.id)
        setHomeName(matches[0].homeTeam.name)
        setAwayID(matches[0].awayTeam.id)
        setAwayName(matches[0].awayTeam.name)
        setCompetition(matches[0].competition.name)
      })
      .catch(e => console.log(e))
  }, [])

    return (
        <div className='WeatherDynamic mb-4'>
            <div className="block">
                <div className="box has-text-centered">
                    <h5 className="is-size-5 mb-3">My favourite team's next game:</h5>
                    <div className="columns is-gapless">
                      <div className="column is-5">
                      {
                        homeID === null
                        ? "..."
                        : <h6 className='is-size-6 is-uppercase has-text-black'>{homeName}</h6>
                      }
                      </div>
                      <div className="column is-2">vs.</div>
                      <div className="column is-5">
                      {
                        awayID === null
                        ? "..."
                        : <h6 className='is-size-6 is-uppercase has-text-black'>{awayName}</h6>
                      }
                      </div>
                    </div>
                    <h3 className="is-size-4"><em>{competition === null ? "Loading..." : `${competition}`}</em></h3>

                </div>
            </div>
        </div>
    )
}

export default SportDynamic;