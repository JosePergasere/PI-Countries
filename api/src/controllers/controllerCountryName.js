const { Country } = require("../db");
// * Importo Op para poder utilizarlo
const { Op } = require("sequelize");

//! CONTROLLER QUE SE ENCARGA DE DEVOLVER LOS PAISES QUE EN SU NOMBRE INCLUYA LO RECIBIDO POR QUERY
const countriesName = async (data) => {
  //* Destructuro data porque viene en un obj {name:"lo enviado"}
  const { name } = data;
  //* En caso de que no tenga ningun valor arrojo este error
  if (!name) {
    throw new Error("Por favor ingrese algo");
  }
  //* Busco en el modelo todos los que contengan en el nombre lo enviado, el ilike es indiferente entre mayus y minusculas
  const matchCountries = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
  //* Si no encontro ningun pais con lo enviado devuelvo esto:
  if (matchCountries.length === 0) {
    return `No se encontro ningun pais con el nombre: ${name}`;
  } else {
    //* Si encontro por lo menos uno, devuelvo el pais
    return matchCountries;
  }
};

module.exports = countriesName;
