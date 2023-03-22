const {Router}= require ("express")
const {getListCountries, countryById, countryByName,} = require ("../controllers/countriesControllers")




const countriesRouter = Router();

countriesRouter.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      countryQuery = await countryByName(name);
      res.status(200).json(countryQuery);
    } else {
      const listCountries = await getListCountries();
      res.status(200).json(listCountries);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

countriesRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const country = await countryById(id);
    res.status(200).json(country);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = countriesRouter;