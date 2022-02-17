import React, {useState} from 'react';
import axios from 'axios';
// import forecast from '../utils/forecast';

const WeatherDynamic = ({weather}) => {
    const [temp, setTemp] = useState(0);
    const [desc, setDesc] = useState("");
    const [icon, setIcon] = useState("");

    if (weather) {
        const lat = weather.latitude;
        const long = weather.longitude;
        const url = `${process.env.REACT_APP_WEATHER_URL}/onecall?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_ID}&units=metric&exclude=daily,hourly,minutely,alerts` 
        axios.get(url)
            .then(response => console.log(response.data.current))
            .catch(e => console.log(e))
    }

    return (
        <div className='WeatherDynamic mb-4'>
            <div className="block">
                <div className="box">
                    <h5 className="is-size-5">The weather where I am currently:</h5>
                </div>
            </div>
        </div>
    )
}

export default WeatherDynamic