const { Country, Activity } = require("../db");

const countryFind = async (id) => {
  id = id.toUpperCase();

  const country = await Country.findOne({
    where: { id },
    include: { model: Activity, through: { attributes: [] } },
  });

  if (country) {
    return country;
  } else {
    throw new Error("Pais no encontrado");
  }
};

module.exports = countryFind;
