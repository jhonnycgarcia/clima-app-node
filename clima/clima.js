const axios = require('axios');
const apikey = '13d142733980d2a337cb08eba8cac4be';
const units = `metric`;
const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=13d142733980d2a337cb08eba8cac4be&units=metric`);
    // const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=${units}`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}