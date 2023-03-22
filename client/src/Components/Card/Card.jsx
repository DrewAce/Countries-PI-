import React from 'react'
import {Link} from "react-router-dom"
import styles from "./Card.module.css"
const Card = (props) => {
  return (
    <Link to={`/detail/${props.id}`} className={styles.a}>
      <div className={styles.card}>
        <img src={props.flags} alt={props.name} className={styles.image} />
        <div className={styles.textBox}>
          <h1 className={styles.name}>{props.name}</h1>
          <p className={styles.continents}>{props.continents}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card
