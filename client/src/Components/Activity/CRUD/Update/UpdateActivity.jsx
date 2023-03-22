import React, { useState, useEffect } from "react";
import { listDificulty, listSeason } from "./OptionList";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate} from "react-router-dom";
import { validation } from "./Validation";
import styles from "./Update.module.css";
import imgHome from '../../../../img/whiteHome.png'
//---------------------------------------------------------------------------------
import {
  getCountries,
  getActivityById,
  updateActivity,
} from "../../../../Redux/actions";
import { handleDelete, handleSelect, handleChange } from "./Function";
//---------------------------------------------------------------------------------

const UpdateActivity = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const countries2 = useSelector((state) => state.countries);
  const [error, setError] = useState({});
  const [activity, setActivity] = useState({});
  const activeUpdate = useSelector((state) => state.activityUpdate);

  useEffect(() => {
    dispatch(getActivityById(id));
  }, [dispatch, id]);

  useEffect(() => {
    setError(validation(activity));
    if (countries2 && Object.entries(countries2).length !== 250) {
      dispatch(getCountries());
    }
  }, [countries2, activity, dispatch]);

  useEffect(() => {
    if (
      Object.entries(activeUpdate).length !== 0 &&
      Object.entries(countries2).length !== 0
    ) {
      setActivity({
        id: activeUpdate.id,
        name: activeUpdate.name,
        difficulty: activeUpdate.difficulty,
        duration: activeUpdate.duration,
        season: activeUpdate.season,
        countries: activeUpdate.countries.map((xxy) => xxy.id),
      });
    }
  }, [activeUpdate, countries2]);

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !activity.difficulty ||
      !activity.duration ||
      !activity.season ||
      !activity.countries.length
    ) {
      return alert("❌ Complete the form correctly before submitting it");
    }

    dispatch(updateActivity(activity));
    navigate("/activity");
  }

  return (
    <div className={styles.containerAllCreate}>
      <Link to ='/Activity'><button className={styles.boton}><img src={imgHome} alt="Activity" className={styles.img}></img></button></Link>
      <div className={styles.titleFroms}>
        <h2>Update the Activity</h2>
      </div>
      <div className={styles.xxx}>
        <div className={styles.containerFrom}>
          <form
            onSubmit={(e) =>
              handleSubmit(e, activity, dispatch, updateActivity)
            }
            name="activityFrom"
          >
            <div>
              {/* //-----------Name */}
              <div className={styles.containerDataSelect}>
                <p className={styles.pTitleName}>
                  Name:
                  <div className={styles.mesageName}>cannot change</div>
                </p>
                <br></br>
                <input
                  disabled={true}
                  className={styles.inputData}
                  type="text"
                  placeholder="Name..."
                  name="name"
                  value={activity.name}
                  onChange={(e) =>
                    handleChange(e, activeUpdate, setActivity, activity)
                  }
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
                  placeholder={activeUpdate.difficulty}
                  onChange={(e) =>
                    handleChange(e, activeUpdate, setActivity, activity)
                  }
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
                    placeholder={activeUpdate.duration}
                    name="duration"
                    value={activity.duration}
                    onChange={(e) =>
                      handleChange(e, activeUpdate, setActivity, activity)
                    }
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
                  placeholder={activeUpdate.season}
                  onChange={(e) =>
                    handleChange(e, activeUpdate, setActivity, activity)
                  }
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
              <div className={styles.containerDataSelect}>
                <p className={styles.pTitle}>Country selections</p>
                <br></br>
                <select
                  className={styles.inputData}
                  name="countries"
                  id="countries"
                  onChange={(e) => handleSelect(e, setActivity)}
                >
                  <option>Select countries..</option>
                  {countries2.map((country) => (
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
              {/* ////Boton--------------------------------------      */}
              <button
                className={styles.buttonSubmit}
                type="submit"
                disabled={Object.keys(error).length === 0 ? false : true}
                onClick={(e) => handleSubmit(e)}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        {/* //-----------------------countries */}
        {activity.hasOwnProperty("countries") ? (
          <div className={styles.ContainerCountrySelectAll}>
            <h1 className={styles.titleListCountries}>List of Selected Countries</h1>

            <div className={styles.ContainerCountrySelect}>
              {activity.countries.map((e) => (
                <div className={styles.countrySelect} key={e}>
                  <img
                    src={countries2
                      .filter((ban) => ban.id === e)
                      .map((x) => x.flags)}
                    alt={e}
                  />
                  <p key={e} className={styles.namecountrySelect}>
                    {e}
                  </p>
                  <button
                    onClick={() => handleDelete(e, setActivity, activity)}
                    className={styles.butonX}
                  >
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

export default UpdateActivity;