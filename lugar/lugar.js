const axios = require('axios');

const getLugarLatLng = async direccion => {
    let options = {
        method: 'GET',
        url: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
        params: { location: direccion },
        headers: {
            'x-rapidapi-key': '0ae3a124bdmshaf80f8e1cc33db5p1a1bf5jsnba691c108611',
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        }
    };

    const instancia = axios.request(options);

    const respuesta = await instancia;

    //console.log(respuesta.data.Results);
    if (respuesta.data.Results === null) {
        throw new Error(`No hay resultados para la dirección: ${direccion}`);
    }

    const data = respuesta.data.Results[0];
    const direc = data.name;
    const lat = data.lat;
    const lng = data.lng;
    return {
        direc,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}