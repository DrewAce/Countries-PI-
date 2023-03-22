import React from 'react'
import DifficultyStars from "./DifficultyStars"
import styles from "./Detail.module.css"

const CardsActivity = ({activity}) => {
  return (
    <div className={styles.cardActivity}>
      <h2>{activity.name}</h2>
      <div className={styles.containerColumn}>
        <div className={styles.containerActivity}>
          <p>Difficulty:</p>
          <p>Duration:</p>
          <p>Season:</p>
        </div>
        <div className={styles.containerDataActivity}>
          <DifficultyStars number={activity.difficulty}/>
          <p>{activity.duration} hours</p>
          <p>{activity.season}</p>
        </div>
      </div>
    </div>
  )
}

export default CardsActivity
