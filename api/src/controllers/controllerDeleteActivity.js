const { Activity } = require("../db");

const ActivityDelete = async (id) => {
  const activity = await Activity.findOne({ where: { id } });
  if (!activity) {
    throw new Error("La actividad no existe");
  } else {
    await Activity.destroy({ where: { id } });
    return "Actividad eliminada con exito";
  }
};

module.exports = ActivityDelete;
