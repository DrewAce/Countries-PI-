const { Activity, Country } = require("../db");

const createActivity = async (
  name,
  difficulty,
  duration,
  season,
  countries
) => {
  if (!name || !difficulty || !duration || !season || !countries.length)
    throw Error("Complete all fields");

  if (difficulty > 5 || difficulty < 1)
    throw Error("Set Difficulty between 1 and 5");
  if (
    season !== "Summer" &&
    season !== "Autumn" &&
    season !== "Winter" &&
    season !== "Spring"
  )
    throw Error("Please select a valid season");

  if (!countries.length) throw Error("Needs to have one linked country at least");

  try {
    const [activity, created] = await Activity.findOrCreate({
      where: { name: name },
      defaults: {
        difficulty,
        duration,
        season,
      },
    });
    await activity.addCountries(countries);
    let response = {};
    created
      ? (response = {
          message: `The activity ${name} was created succesfully`,
          ...activity.dataValues,
        })
      : (response = { message: `The activity ${name} already exists` });
    return response;
  } catch (error) {
    return error;
  }
};

const getListActivities = async () => {
  try {
    let listActivities = await Activity.findAll({
      include: [
        {
          model: Country,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });
    return listActivities;
  } catch (error) {
    return error;
  }
};

const deleteActivity = async (id) => {
  try {
    const activityDelete = await Activity.findByPk(id);
    const confirm = await Activity.destroy({ where: { id } });
    let message = "";
    confirm === 1
      ? (message = `The activity ${activityDelete.dataValues.name} was deleted succesfully`)
      : (message = `The activity ${activityDelete.dataValues.name} couldn't be found`);
    
      let listActivities = await Activity.findAll({
      include: [
        {
          model: Country,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });
    return listActivities;
  } catch (error) {
    return error;
  }
};

const updateActivity = async (
  id,
  name,
  difficulty,
  duration,
  season,
  countries
) => {
  if (!difficulty || !duration || !season || !countries.length)
    throw Error("Complete all fields");

  if (difficulty > 5 || difficulty < 1)
    throw Error("Please set difficulty between 1-5");

  if (!countries.length) throw Error("Needs to have one linked country at least");

  try {
    const actiUpdate = await Activity.findByPk(id);
    await actiUpdate.update(
      { difficulty, duration, season },
      { where: { id } }
    );

    const countriesBD = await Country.findAll({
      where: {
        id: countries,
      },
    });
    await actiUpdate.setCountries(countriesBD);
    return `The activity ${name} was updated succesfully`;
  } catch (error) {
    return error;
  }
};

const activityById = async (id) => {
  const activity = await Activity.findOne({
    where: { id },
    include: {
      model: Country,
      attributes: ["id"],
      through: {
        attributes: [],
      },
    },
  });
  if (!activity) throw Error(`The ID:${id} doesn't belong to any country`);

  return activity;
};

module.exports = {
  createActivity,
  getListActivities,
  deleteActivity,
  updateActivity,
  activityById,
};