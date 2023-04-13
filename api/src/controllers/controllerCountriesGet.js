const { Country } = require("../db");

//* EJECUTO LA FUNCION QUE TRAE TODOS LOS PAISES DE LA API
const countriesGet = async () => {
  //* Creo una constante con todos los paises de la DB
  const allCountries = await Country.findAll();
  //* Si por algun motivo no hay ningun pais en la DB, arroja un error
  if (!allCountries) {
    throw new Error("No existe ningun pais en la Base de Datos");
    //* Si hay por lo menos un pais, lo retorno
  } else {
    return allCountries;
  }
};

module.exports = countriesGet;
