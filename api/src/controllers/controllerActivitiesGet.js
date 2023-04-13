const { Activity } = require("../db");

const ActivitiesGet = async () => {
  const allActivities = await Activity.findAll();
  if (allActivities) {
    return allActivities;
  } else {
    throw new Error("No se encontro ninguna actividad");
  }
};

module.exports = ActivitiesGet;
