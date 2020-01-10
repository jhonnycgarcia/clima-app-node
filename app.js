/** 
 * Requires
 */
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// Funcion para obtener la latitud y longitud de la ubicacion de una ciudad a traves del nombre
// lugar.getLugar(argv.direccion)
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err));

// Funcion para obtener la temperatura en ºC de una ciudad a traves de sus coordenadas
// clima.getClima(40.750000, -74.000000)
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err));

// Funcion para obtener temperatura de una ciudad buscando por el nombre
const getInfo = async(direccion) => {
    try {
        let coords = await lugar.getLugar(direccion);
        let temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}.`;
    } catch (error) {
        return `No se pudo determinar el clima de: "${direccion}"`;
    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);