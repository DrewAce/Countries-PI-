import React from 'react'
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../../Redux/actions";
import styles from './Search.module.css'
const Searchbar = (props) => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    dispatch(getCountriesByName(newQuery));
    props.setCurrentPage(1);
  };

  return (
    <div>
      <input
        className={styles.bar}
        placeholder="What country are you looking for?"
        type="search"
        onChange={handleInputChange}
      />
      <div></div>
    </div>
  );
};

export default Searchbar

