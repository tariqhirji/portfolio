import React, {useEffect, useState} from 'react';
import aos from 'aos';
import 'aos/dist/aos.css'; 
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

  const config = {
    headers: {
      'X-Auth-Token': `${process.env.REACT_APP_SPORT}`
    }
  }  

  // Load next match and set state
  useEffect(() => {
    aos.init({duration: 1000});
    axios.get(FIXTURE_URL, config)
      .then((response) => {
        const {matches} = response.data
        setHomeID(matches[0].homeTeam.id)
        setHomeName(matches[0].homeTeam.name)
        setAwayID(matches[0].awayTeam.id)
        setAwayName(matches[0].awayTeam.name)
        setCompetition(matches[0].competition.name)
        setDate(matches[0].utcDate)

        // MUFC Home: Get away crest by ID and set
        if (matches[0].homeTeam.id === MANUID) {
          setHomeImg("./images/mufc.png")
          axios.get(`https://api.football-data.org/v2/teams/${matches[0].awayTeam.id}`, config)
            .then(response => setAwayImg(response.data.crestUrl))
        }

        // MUFC Away: Get home crest by ID and set
        if (matches[0].awayTeam.id === MANUID) {
          setAwayImg("./images/mufc.png")
          axios.get(`https://api.football-data.org/v2/teams/${matches[0].awayTeam.id}`, config)
            .then(response => setHomeImg(response.data.crestUrl))
        }
      })
      .catch(e => console.log(e))
  }, [])

    return (
        <div className='WeatherDynamic mb-4 firacondensed has-text-dark'>
            <div className="block">
                <div className="box has-text-centered" data-aos="zoom-in-left" data-aos-anchor-placement="bottom-bottom">
                    <h5 className="is-size-5 mb-6 firamono has-text-dark"><b>My favourite team's next game:</b></h5>
                    <div className="columns is-gapless is-vcentered">
                      <div className="column is-5 is-size-3 has-text-dark">
                        {
                          homeImg === null
                          ? "..."
                          : <img src={homeImg} alt="Home team" />
                        }  
                        {
                          homeID === null
                          ? "..."
                          : <h6 className='is-size-6 is-uppercase'>{homeName}</h6>
                        }
                        <h6 className='is-size-6 is-uppercase has-text-grey'>(home)</h6>
                      </div>
                      <div className="column is-2 is-uppercase my-3 is-size-5"><b>vs.</b></div>
                      <div className="column is-5 is-size-3 has-text-dark">
                      {
                        awayImg === null
                        ? "..."
                        : <img src={awayImg} alt="Away team" />
                      }  
                      {
                        awayID === null
                        ? "..."
                        : <h6 className='is-size-6 is-uppercase'>{awayName}</h6>
                      }
                      <h6 className='is-size-6 is-uppercase has-text-grey'>(away)</h6>
                      </div>
                    </div>
                    

                    <h3 className="is-size-3 has-text-dark"><b>{date === null ? "Loading..." : `${date.slice(0, 10)}`}</b></h3>
                    <h3 className="is-size-3 has-text-dark"><em>{competition === null ? "Loading..." : `${competition}`}</em></h3>

                </div>
            </div>
        </div>
    )
}

export default SportDynamic;