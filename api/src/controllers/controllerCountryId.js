const { Country, Activity } = require("../db");

//! CONTROLLER QUE DEVUELVE EL PAIS GUARDADO EN LA BASE DE DATOS CON DICHO ID
const countryFind = async (id) => {
  //* Hago mayuscula el id enviado("arg","chi","per",etc)
  id = id.toUpperCase();
  //* Busco el pais que su ID coincida con el enviado y le Incluyo las los datos de la tabla Activity que esten relacionadas al pais
  const country = await Country.findOne({ where: { id }, include: [Activity] });
  if (country) {
    //** Si lo encuentra lo devuelve */
    return country;
  } else {
    //* Si no encuentra arroja un error
    throw new Error("Country no encontrado");
  }
};

module.exports = countryFind;
