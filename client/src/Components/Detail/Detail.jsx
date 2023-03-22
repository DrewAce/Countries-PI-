import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import {getCountryById} from "../../Redux/actions"
import { Link } from 'react-router-dom'
import styles from "./Detail.module.css"
import CardsActivity from './CardsActivity'
import imgHome from '../../img/whiteHome.png'


const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.countryDetail);
  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch, id]);

  return (
    <div className={styles.containerAll}>
      <h1 className={styles.nameCountry}>{country.name}</h1>
      <div>
      <Link to ='/home'><button className={styles.boton}><img src={imgHome} alt="Home" className={styles.img}></img></button></Link>
      </div>
      <div className={styles.containerDetail}>
        <div className={styles.containerflags}>
          <img src={country.flags} className={styles.imageFlag} alt="country.name" />
        </div>

        <div className={styles.containerCountry}>
          <div className={styles.containerData}>
            <p>Continent: </p>
            <p>Capital:</p>
            <p>Sub Region:</p>
            <p>Area: </p>
            <p>Population:</p>
          </div>

          <div className={styles.containerDataResult}>
            <p> {country.continents}</p>
            <p>{country.capital}</p>
            <p> {country.subregion ? country.subregion : "Sin Datos"}</p>
            <p> {country.area / 1000} km2</p>
            <p>{parseInt(country.population).toLocaleString()}</p>
          </div>
        </div>
      </div>
      <div className={styles.ContainerActivitiesDetail}>
        <h2 className={styles.nameActivity}>Activities list</h2>
        <div className={styles.containerCardsActivity}>
          {country.activities && country.activities.length ? (
            country.activities.map((activity) => {
              return <CardsActivity activity={activity} key={activity.id} />;
            })
          ) : (
            <div>
              <h1 className={styles.countryFail}>
                This country has no registered activities
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail
