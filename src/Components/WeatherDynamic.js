import React from 'react';
import forecast from '../utils/forecast';

const WeatherDynamic = ({weather}) => {
    if (weather) {
        // console.log(weather.query)
        // forecast(weather.query)        
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