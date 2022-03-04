import React, {useEffect, useState} from 'react';
import axios from 'axios';

const WeatherDynamic = () => {
    const [temp, setTemp] = useState(0);
    const [desc, setDesc] = useState("");
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        axios.get(process.env.REACT_APP_WEATHER)
            .then((response) => {
                const {current} = response.data
                // console.log(current)
                setTemp(current.temp)
                setDesc(current.weather[0].description)
                setIcon(current.weather[0].icon)
            })
            .catch(error => {
                console.log(error)
            })    
    },[])

    return (
        <div className='WeatherDynamic mb-4 firacondensed'>
            <div className="block">
                <div className="box has-text-centered">
                    <h5 className="is-size-5 mb-3 firamono"><b>The weather where I am currently:</b></h5>
                    {!icon ? "Loading..." : <img src={`https://openweathermap.org/img/w/${icon}.png`} alt="weather"/>}
                    <h3 className="is-size-3"><strong>{!icon ? "Loading..." : `${temp}\u00b0C`}</strong></h3>
                    <h3 className="is-size-3"><em>{desc === "" ? "Loading..." : `${desc}`}</em></h3>
                </div>
            </div>
        </div>
    )
}

export default WeatherDynamic;