const { Country, Activity } = require("../db");

const { Op } = require("sequelize");

const countriesName = async (data) => {
  const { name } = data;

  if (!name) {
    throw new Error("Por favor ingrese algo");
  }

  const matchCountries = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: { model: Activity, through: { attributes: [] } },
  });

  if (matchCountries.length === 0) {
    throw new Error(`No se encontro ningun pais con el nombre: ${name}`);
  } else {
    return matchCountries;
  }
};

module.exports = countriesName;
