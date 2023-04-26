const { Activity, Country } = require("../db");

const ActivitiesGet = async () => {
  const allActivities = await Activity.findAll({
    include: {
      model: Country,
      attributes: ["id", "name"],
      through: { attributes: [] },
    },
  });
  if (allActivities) {
    return allActivities;
  } else {
    throw new Error("No se encontro ninguna actividad");
  }
};

module.exports = ActivitiesGet;
