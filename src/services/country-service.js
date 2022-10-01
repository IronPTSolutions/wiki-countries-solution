import axios from 'axios';
// si utilizamos esta sintaxis en los parametros, estamos diciendo que por defecto SI NO le pasamos un valor toma por defecto string vacio
export const fetchCountries = (alpha3code = '') =>
  axios
    .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3code}`)
    .then((res) => res.data);
