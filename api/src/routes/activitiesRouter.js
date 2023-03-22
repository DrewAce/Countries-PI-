const {Router} = require("express")

const {createActivity, getListActivities, deleteActivity, updateActivity, activityById,} = require ("../controllers/activitiesController")



const activitiesRouter = Router();

activitiesRouter.post("/", async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;
    const activity = await createActivity(
      name,
      difficulty,
      duration,
      season,
      countries
    );
    res.status(200).json(activity);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

activitiesRouter.get("/", async (req, res) => {
  try {
    const listActivities = await getListActivities();
    res.status(200).json(listActivities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

activitiesRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const actyDelete = await deleteActivity(id);
    console.log(actyDelete);
    res.status(200).json(actyDelete);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

activitiesRouter.put("/:id", async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;
    const { id } = req.params;
    const activity = await updateActivity(
      id,
      name,
      difficulty,
      duration,
      season,
      countries
    );
    res.status(200).json(activity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

activitiesRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const activity = await activityById(id);
    res.status(200).json(activity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = activitiesRouter;