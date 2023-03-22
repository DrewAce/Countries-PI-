const {Country, Activity}= require ("../db")
const {extractData}= require ("./Functions")
const {Op} = require ("sequelize")

const getListCountries = async () => {
    try {
      let listCountries = await Country.findAll(); 
  
      if (!listCountries.length) {
        // pregunto si la variable esta vacia
        const array = await extractData(); 
        await Country.bulkCreate(array); 
      }
  
      listCountries = await Country.findAll({
        attributes: ["name", "flags", "continents", "id", "population"],
        include: [
          {
            model: Activity,
            attributes: ["name"],
            through: { attributes: [] },
          },
        ],
      });
  
      return listCountries;
    } catch (error) {
      return error;
    }
  };
  
  const countryByName = async (name) => {
    const country = await Country.findAll({
      where: {
        name: { [Op.iLike]: `%${name}%` },
      },
      attributes: ["name", "flags", "continents", "id", "population"],
    });
    if (!country.length) {
      throw Error("Couldn't found coincidences");
    }
    return country;
  };
  
  const countryById = async (id) => {
    const country = await Country.findOne({
      where: { id },
      include: {
        model: Activity,
        through: {
          attributes: [],
        },
      },
    });
  
    if (!country) throw Error(`The ID:${id} doesn't belong to any country`);
  
    return country;
  };
  
  module.exports = { getListCountries, countryById, countryByName };
