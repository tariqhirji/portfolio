import React, {useEffect, useState} from 'react';
// import fetch from 'node-fetch';

const WeatherDynamic = ({ weather }) => {
    // const [temp, setTemp] = useState(0);
    // const [desc, setDesc] = useState("");
    // const [icon, setIcon] = useState("");

    const latitude = 43.651070;
    const longitude = -79.347015;
    const url = `${process.env.REACT_APP_WEATHER_URL}/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_ID}&units=metric&exclude=daily,hourly,minutely,alerts`


    async function fetchData(url) {
        const response = await fetch(url);
        const body = await response.json();

        console.log(body)
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