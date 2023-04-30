const { Activity } = require("../db");

function hasValues(obj) {
  for (let key in obj) {
    if (obj[key] !== "" && obj[key] !== null && obj[key] !== undefined) {
      return true;
    }
  }
  return false;
}

const ActivityPut = async (id, body) => {
  const activity = await Activity.findByPk(id);
  if (!activity) {
    throw new Error("Activity not found");
  } else {
    if (!hasValues(body)) {
      throw new Error("No envio nada para modificar");
    } else {
      body.name && typeof body.name === "string"
        ? (activity.name = body.name)
        : activity.name;

      body.difficulty &&
      typeof body.difficulty === "number" &&
      body.difficulty >= 1 &&
      body.difficulty <= 5
        ? (activity.difficulty = body.difficulty)
        : activity.difficulty;

      body.duration &&
      typeof body.duration === "number" &&
      Number.isInteger(body.duration) &&
      body.duration >= 0
        ? (activity.duration = body.duration)
        : activity.duration;

      if (body.season && typeof body.season === "string") {
        const newSeason =
          body.season.charAt(0).toUpperCase() +
          body.season.toLowerCase().slice(1);

        (newSeason && newSeason.includes("Otoño")) ||
        newSeason.includes("Verano") ||
        newSeason.includes("Primavera") ||
        newSeason.includes("Invierno")
          ? (activity.season = newSeason)
          : activity.season;
      }

      await activity.save();

      return activity;
    }
  }
};

module.exports = ActivityPut;
