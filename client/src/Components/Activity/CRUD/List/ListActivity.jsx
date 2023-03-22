import { useDispatch, useSelector } from "react-redux";
import { getActivities, deleteActivity } from "../../../../Redux/actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./List.module.css";
const ListActivity = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);
  const activities = useSelector((state) => state.activities);

  const deleteAct = (id, name, countries) => {
    if (
      window.confirm(
        `Activity ${name} will be deleted to delete also for countries: ${countries.map(
          (con) => con.name
        )} do you want to continue?`
      )
    )
      dispatch(deleteActivity(id));
  };
  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);
  return (
    <div className={styles.containerAll}>
      {activities.length ? (
        <div className={styles.table}>
          <div className={styles.containerListActivityTitle}>
            <div className={styles.TitleName}>
              <p className={styles.pTitle}>Name</p>
            </div>
            <div className={styles.Title}>
              <p className={styles.pTitle}>Difficulty</p>
            </div>
            <div className={styles.Title}>
              <p className={styles.pTitle}>Duration</p>
            </div>
            <div className={styles.Title}>
              <p className={styles.pTitle}>Season</p>
            </div>
            <div className={styles.Title}>
              <p className={styles.pTitle}>Option</p>
            </div>
          </div>
          {activities.map((activity) => (
            <div className={styles.containerListActivity} key={activity.id}>
              <div className={styles.listAName}>
                <p className={styles.pDatoName}>{activity.name}</p>
              </div>
              <div className={styles.listA}>
                <p className={styles.pDato}>{activity.difficulty}</p>
              </div>
              <div className={styles.listA}>
                <p className={styles.pDato}>{activity.duration}</p>
              </div>
              <div className={styles.listA}>
                <p className={styles.pDato}>{activity.season}</p>
              </div>
              <div className={styles.listA}>
                <button
                  className={styles.delete}
                  onClick={() =>
                    deleteAct(activity.id, activity.name, activity.countries)
                  }
                >
                  🗑️
                </button>
                <Link to={`/activity/update/${activity.id}`}>
                  <button className={styles.edit}>✏️</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1 className="countryFail">There are no registered activities</h1>
        </div>
      )}
    </div>
  );
};

export default ListActivity;