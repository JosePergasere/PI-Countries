const ActivityPost = require("../controllers/controllerActivitiesPost");
const ActivitiesGet = require("../controllers/controllerActivitiesGet");
const ActivityDelete = require("../controllers/controllerDeleteActivity");
const ActivityPut = require("../controllers/controllerActivityPut");

const getActivitiesHandler = async (req, res) => {
  try {
    const actividadTuristica = await ActivitiesGet();
    res.status(200).json({ actividadTuristica });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postActivityHandler = async (req, res) => {
  const date = req.body;
  try {
    const postActivity = await ActivityPost(date);
    res.status(200).json("Actividad posteada con exito!!");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteActivityHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const delActivity = await ActivityDelete(id);
    res.status(200).json(delActivity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const putActivityHandler = async (req, res) => {
  const { id } = req.params;
  const date = req.body;
  try {
    const putActivity = await ActivityPut(id, date);
    res.status(200).json({ putActivity });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  getActivitiesHandler,
  postActivityHandler,
  deleteActivityHandler,
  putActivityHandler,
};
