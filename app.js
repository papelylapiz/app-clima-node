const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            demand: true,
            desc: 'Direcciòn de la ciudad para obtener el clima'
        }
    })
    .argv;

let direccionEncodeUrl = encodeURI(argv.direccion);

console.log(direccionEncodeUrl);

const getInfo = async direccion => {

    try {
        /*let lugar = lugar.getLugarLatLng(direccionEncodeUrl)
            .then(console.log)
            .catch(console.log);*/

        let temp = await clima.getClima(direccion);
        return `El clima de ${direccion} es de ${temp}`
    } catch (e) {
        console.log(`No se pudo determinar el clima de ${direccion}.`);
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);