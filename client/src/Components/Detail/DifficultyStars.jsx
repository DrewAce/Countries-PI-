import React from 'react'

const DifficultyStars = ({number}) => {
  const element = [];
  for (let i = 0; i < number; i++) {
    element.push("⭐");
  }
  return <p>{element}</p>;
}

export default DifficultyStars
