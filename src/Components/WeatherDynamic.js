import React, {useEffect, useState} from 'react';
import aos from 'aos';
import 'aos/dist/aos.css'; 
import axios from 'axios';

const WeatherDynamic = () => {
    const [temp, setTemp] = useState(0);
    const [desc, setDesc] = useState(null);
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        aos.init({duration: 1000});
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
        <div className='WeatherDynamic mb-4 firacondensed has-text-dark'>
            <div className="block">
                <div className="box has-text-centered" data-aos="zoom-in-left" data-aos-anchor-placement="bottom-bottom">
                    <h5 className="is-size-5-mobile is-size-3-tablet is-size-5-widescreen mb-3 firamono has-text-dark"><b>The weather where I am currently:</b></h5>
                    {!icon ? "..." : <img src={`https://openweathermap.org/img/w/${icon}.png`} alt="weather"/>}
                    <h3 className="is-size-3-mobile is-size-2-tablet is-size-3-widescreen"><strong>{!icon ? "" : `${temp}\u00b0C`}</strong></h3>
                    <h3 className="is-size-3-mobile is-size-2-tablet is-size-3-widescreen"><em>{desc === "" ? "Reload Page" : `${desc}`}</em></h3>
                </div>
            </div>
        </div>
    )
}

export default WeatherDynamic;