const axios = require("axios");
const { Country } = require("../db");

//! CONTROLLER QUE SIRVE PARA TRAER TODOS LOS PAISES Y SUBIRLOS A LA BASE DE DATOS
const getApiData = async () => {
  const comp = await Country.findAll();
  if (comp.length) {
    return console.log("DB YA CARGADA");
  } else {
    const apidata = await axios.get("https://restcountries.com/v3.1/all");

    const countries = apidata.data.map((country) => {
      return {
        id: country.cca3,
        name: country.name.common,
        flag: country.flags.svg,
        capital: country.capital[0]
          ? country.capital[0]
          : "No contiene capital",
        area: country.area,
        population: country.population,
        subregion: country.subregion
          ? country.subregion
          : "No contiene Subregion",
        continent: country.continents[0],
      };
    });

    await Country.bulkCreate(countries);
    return console.log("Paises subidos con exito");
  }
};

module.exports = getApiData;
