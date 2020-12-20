const axios = require('axios');


const getClima = async lugar => {

    const options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {
            q: lugar,
            lat: '0',
            lon: '0',
            callback: '',
            id: '2172797',
            lang: 'null',
            units: '"metric" or "imperial"',
            mode: 'xml, html'
        },
        headers: {
            'x-rapidapi-key': '0ae3a124bdmshaf80f8e1cc33db5p1a1bf5jsnba691c108611',
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
        }
    };


    const instancia = axios.request(options);
    const respuesta = await instancia;
    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}