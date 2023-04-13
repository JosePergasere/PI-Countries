const axios = require("axios");
const { Country } = require("../db");

//! CONTROLLER QUE SIRVE PARA TRAER TODOS LOS PAISES Y SUBIRLOS A LA BASE DE DATOS
const getApiData = async () => {
  const apidata = await axios.get("https://restcountries.com/v3.1/all");
  //* MAPEO CADA PAIS CON LOS DATOS QUE NECESITO

  const countries = apidata.data.map((country) => {
    return {
      id: country.cca3,
      name: country.name.common,
      flag: country.flags.svg,
      capital: country.capital?.[0] || "",
      area: country.area,
      population: country.population,
      subregion: country.subregion,
      continent: country.continents,
    };
  });

  //* EL BULKCREATE  CREA EN EL MODULO "Country", CADA PAIS CON SUS ATRIBUTOS
  await Country.bulkCreate(countries);
  return console.log("Paises subidos con exito");
};

module.exports = getApiData;
