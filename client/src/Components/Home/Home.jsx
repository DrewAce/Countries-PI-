import React from 'react'
import Cards from "../Cards/Cards"
import Bar from "../Bar/Bar"
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCountries, getActivities} from '../../Redux/actions'
import styles from "./Home.module.css"
import Pagination from "../Pagination/Pagination"
import { useState } from 'react'
import LoadingGif from "../../img/loadingif2.gif"

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  const countries = useSelector((state) => state.countries);
  const allCountries = useSelector((state) => state.allCountries);
  const activities = useSelector((state) => state.activities);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(9);

  const pagination = (pageNumber) => {
    setPerPage(pageNumber === 1 ? 9 : 10);
    setCurrentPage(pageNumber);
  };

  const indexOfLastCountry =
    currentPage === 1 ? currentPage * perPage : currentPage * perPage - 1;

  const indexOfFirstCountry = indexOfLastCountry - perPage;

  const currentCountries = countries.length
    ? countries.slice(indexOfFirstCountry, indexOfLastCountry)
    : allCountries;

  return (
    <div>
      <div>
      <Bar activities={activities} setCurrentPage={setCurrentPage} />
      </div>
      <h1 className={styles.text}>COUNTRIES</h1> 
      {!countries.length ? (
        <div>
          <img src={LoadingGif} alt="LoadingGif" className={styles.img}></img>
         
        </div>
      ) : (
        
        <div>
         
          <Pagination
            countries={countries.length}
            pagination={pagination}
            perPage={perPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
           <p></p>
          <p></p>
          <p></p>
          <p></p>
          <Cards countries={currentCountries} />
          
        </div>
      )}
    </div>
  );
};

export default Home
