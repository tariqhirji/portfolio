import axios from 'axios';

const forecast = async (query, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_KEY}&query=${query}`
    const response = await axios.get(url)
    console.log(response)
}

export default forecast;