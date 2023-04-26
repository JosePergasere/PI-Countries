const { Country, Activity } = require("../db");

const countriesGet = async () => {
  const allCountries = await Country.findAll({
    include: { model: Activity, through: { attributes: [] } },
  });

  if (!allCountries) {
    throw new Error("No existe ningun pais en la Base de Datos");
  } else {
    return allCountries;
  }
};

module.exports = countriesGet;
