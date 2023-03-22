import React, { useState, useEffect } from "react";
import { listDificulty, listSeason } from "./OptionList";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, createActivity } from "../../../../Redux/actions";
import { Link, useNavigate } from "react-router-dom";
import { validation } from "./Validation";
import styles from "./Create.module.css";
import imgHome from '../../../../img/whiteHome.png'
const CreateActivity = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  //--------------------------------------Control y datos de froms
  const [error, setError] = useState({});
  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  useEffect(() => {
    setError(validation(activity));
    if (countries && Object.entries(countries).length !== 250) {
      dispatch(getCountries());
    }
  }, [dispatch, activity, countries]);

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setActivity({
      ...activity,
      [property]: value,
    });
    document.activityFrom.difficulty.blur();
  };

  const handleSelect = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    if (value !== "Select countries..") {
      setActivity((estado) => {
        if (property === "countries") {
          return {
            ...estado,
            countries: Array.from(new Set([...estado.countries, value])),
          };
        } else {
          return {
            ...estado,
            [property]: value,
          };
        }
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !activity.name ||
      !activity.difficulty ||
      !activity.duration ||
      !activity.season ||
      !activity.countries.length
    ) {
      return alert("❌ Complete the form correctly before submitting it");
    }
    dispatch(createActivity(activity));

    setActivity({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
    navigate("/activity");
  };

  function handleDelete(event) {
    setActivity({
      ...activity,
      countries: activity.countries.filter((country) => country !== event),
    });
  }

  return (
    <div className={styles.containerAllCreate}>
     <Link to ='/Activity'><button className={styles.boton}><img src={imgHome} alt="Activity" className={styles.img}></img></button></Link>
      <div className={styles.titleFroms}>
        <h2>Create Activity</h2>
      </div>
      <div className={styles.xxx}>
        <div className={styles.containerFrom}>
          <form onSubmit={(e) => handleSubmit(e)} name="activityFrom">
            <div>
              {/* //-----------Name */}
              <div className={styles.containerDataSelect}>
                <p className={styles.pTitle}>Name:</p>
                <br></br>
                <input
                  className={styles.inputData}
                  type="text"
                  placeholder="Name..."
                  name="name"
                  value={activity.name}
                  onChange={(e) => handleChange(e)}
                />
                {error.name ? (
                  <p className={styles.errors}>{error.name}</p>
                ) : (
                  <p className={styles.sinError}>-</p>
                )}
              </div>
              {/* //-----------------dificulty */}
              <div className={styles.containerDataSelect}>
                <p className={styles.pTitle}>Difficulty: </p>
                <br></br>

                <select
                  className={styles.inputData}
                  id="difficulty"
                  name="difficulty"
                  onChange={(e) => handleChange(e)}
                  value={activity.difficulty}
                >
                  {listDificulty.map((op) => (
                    <option key={op} value={op}>
                      {op}
                    </option>
                  ))}
                </select>
                {error.difficulty ? (
                  <p className={styles.errors}>{error.difficulty}</p>
                ) : (
                  <p className={styles.sinError}>-</p>
                )}
              </div>

              {/* --------------------------duration */}
              <div className={styles.containerDataSelect}>
                <p className={styles.pTitle}>Duration: </p>
                <br></br>
                <div>
                  <input
                    className={styles.inputDataDuration}
                    type="number"
                    placeholder="Duration..."
                    name="duration"
                    value={activity.duration}
                    onChange={(e) => handleChange(e)}
                  />
                  <label>hours</label>
                </div>
                {error.duration ? (
                  <p className={styles.errors}>{error.duration}</p>
                ) : (
                  <p className={styles.sinError}>-</p>
                )}
              </div>
              {/* ----------------------------season */}
              <div className={styles.containerDataSelect}>
                <p className={styles.pTitle}>Season:</p>
                <br></br>
                <select
                  className={styles.inputData}
                  id="season"
                  name="season"
                  onChange={(e) => handleChange(e)}
                  value={activity.season}
                >
                  {listSeason.map((op) => (
                    <option value={op} key={op}>
                      {op}
                    </option>
                  ))}
                </select>
                {error.season ? (
                  <p className={styles.errors}>{error.season}</p>
                ) : (
                  <p className={styles.sinError}>-</p>
                )}
              </div>
              {/* /////////////////////////////////////////// */}

              <div className={styles.containerDataSelect}>
                <p className={styles.pTitle}>Country selections</p>
                <br></br>
                <select
                  className={styles.inputData}
                  name="countries"
                  id="countries"
                  onChange={(e) => handleSelect(e)}
                >
                  <option>Select countries..</option>
                  {countries.map((country) => (
                    <option value={country.id} key={country.id}>
                      {country.name}
                    </option>
                  ))}
                </select>
                {error.countries ? (
                  <p className={styles.errors}>{error.countries}</p>
                ) : (
                  <p className={styles.sinError}>-</p>
                )}
              </div>

              <button
                className={styles.buttonSubmit}
                type="submit"
                disabled={Object.keys(error).length === 0 ? false : true}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        {/* //-----------------------countries */}
        {activity.countries.length ? (
          <div className={styles.ContainerCountrySelectAll}>
            <h2 className={styles.titleListCountries}>     List of Selected Countries</h2>

            <div className={styles.ContainerCountrySelect}>
              {activity.countries.map((e) => (
                <div className={styles.countrySelect} key={e}>
                  <img
                    src={countries
                      .filter((ban) => ban.id === e)
                      .map((x) => x.flags)}
                    alt={e}
                  />
                  <p key={e} className={styles.namecountrySelect}>
                    {e}
                  </p>
                  <button onClick={() => handleDelete(e)} className={styles.butonX}>
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CreateActivity;
