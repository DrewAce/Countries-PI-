import React from 'react'

import styles from "./FilterAndOrder.module.css";

import {
  getCountriesByContinents,
  getCountriesByActivities,
} from "../../Redux/actions";
import { continents } from "./ListO";

import Select from "./Select.jsx";

const Filter = ({ activities, setCurrentPage }) => {
  let activitiesList = ["Activities"];
  activities.map((activity) => {
    return activitiesList.push(activity.name);
  });

  return (
    <div className={styles.filtros}>
      <Select
        function={getCountriesByContinents}
        list={continents}
        setCurrentPage={setCurrentPage}
      />
      <div className={styles.filtros}>
      <Select
        function={getCountriesByActivities}
        list={activitiesList}
        setCurrentPage={setCurrentPage}
      />
      </div>
    </div>
  );
};
export default Filter;

