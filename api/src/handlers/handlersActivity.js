//* TRAIGO LOS CONTROLLERS
const ActivityPost = require("../controllers/controllerActivitiesPost");
const ActivitiesGet = require("../controllers/controllerActivitiesGet");

//* HANDLER **************************************************/
const getActivitiesHandler = async (req, res) => {
  try {
    const actividadTuristica = await ActivitiesGet();
    res.status(200).json({ actividadTuristica });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//**************************************************** */
const postActivityHandler = async (req, res) => {
  const date = req.body;
  try {
    const postActivity = await ActivityPost(date);

    res.status(200).json("Actividad posteada con exito!!");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getActivitiesHandler, postActivityHandler };
