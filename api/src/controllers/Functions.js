const axios = require("axios");

//API Data extract
const extractData = async () => {
  API = "https://restcountries.com/v3/all";

  try {
    const allCountries = await axios.get(API);
    const result = allCountries.data.map((pais) => {
      return {
        id: pais.cca3,
        name: pais.name.common,
        flags: pais.flags[0],
        continents: pais.continents[0],
        capital: pais.capital ? pais.capital[0] : "No data found",
        subregion: pais.subregion,
        area: pais.area,
        population: pais.population,
      };
    });
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = { extractData };