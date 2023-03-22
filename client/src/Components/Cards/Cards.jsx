import React from 'react'
import Card from "../Card/Card"
import styles from "./Cards.module.css"

const Cards = ({countries}) => {
  return (
    <div className={styles.container}>
    {countries.map((country) => {
      return (
        <Card
          name={country.name}
          flags={country.flags}
          continents={country.continents}
          key={country.id}
          id={country.id}
        />
      );
    })}
  </div>
  )
}

export default Cards
