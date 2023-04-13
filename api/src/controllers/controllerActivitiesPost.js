const { Activity, Country } = require("../db");

const ActivityPost = async ({
  name,
  difficulty,
  duration,
  season,
  countries,
}) => {
  if (!countries) throw new Error("Debe enviar algo");
  //! Convierto a countries en un array en caso de que me manden otra cosa, para asi luego poder mapearlo
  const arrayCountries = Array.isArray(countries) ? countries : [countries];
  //* Uso el metodo Promise.All para consultar en la DB si existen paises con los ID enviados
  const countriesFind = await Promise.all(
    arrayCountries.map((id) => Country.findByPk(id.toUpperCase()))
  );
  //* Valido si no se encontro ningun pais en la DB
  if (!countriesFind.some((country) => !!country)) {
    throw new Error("No se encontraron países válidos");
  }
  //* Creo un nuevo registro en la tabla Activity, con los datos traidos por parametro
  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });

  //* Utilizo el addCountries de newAcitivy para  darle los paises
  await newActivity.addCountries(countriesFind.filter((country) => !!country));

  return;
};

module.exports = ActivityPost;
