//* IMPORTO LOS CONTROLLERS ( No te olvides porque explota todo)
const countriesGet = require("../controllers/controllerCountriesGet");
const countryFind = require("../controllers/controllerCountryId");
const countriesName = require("../controllers/controllerCountryName");

//**************  HANDLERS       ****************//

//* Handler que espera a un funcion que trae todos los paises
const getCountries = async (req, res) => {
  try {
    const allCountries = await countriesGet();
    res.status(200).json({ allCountries });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//* Handler que espera a un funcion que trae el pais con el ID enviado por PARAMS
const getCountry = async (req, res) => {
  const { idPais } = req.params;
  try {
    const pais = await countryFind(idPais);
    res.status(200).json({ pais });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//* Handler que espera a un funcion que trae todos los paises que coincidan en su nombre con lo enviado por query

const getCountryName = async (req, res) => {
  const name = req.query;
  try {
    const countriesFind = await countriesName(name);
    res.status(200).json({ countriesFind });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//* EXPORTO LOS HANDLERS
module.exports = { getCountries, getCountry, getCountryName };
