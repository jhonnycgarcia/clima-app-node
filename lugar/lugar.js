const axios = require('axios');
const getLugar = async(dir) => {
    // Codificar el argumento recibido por consola para trabajar co URL
    const encodeUrl = encodeURI(dir);

    const instace = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '62e4e597bamshc9533d40bc0b4f3p135225jsn78c7eb0da6b1' }
    });

    /* Realizar la peticion a la API */
    const respuesta = await instace.get();

    // Validar si optiene resultados
    if (respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultados para la direccion "${dir}"`);
    } else {
        const data = respuesta.data.Results[0];
        const direccion = data.name;
        const lat = data.lat;
        const lon = data.lon;
        return { direccion, lat, lng: lon }
    }
}

module.exports = {
    getLugar
}