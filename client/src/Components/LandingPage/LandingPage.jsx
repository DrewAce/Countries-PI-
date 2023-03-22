import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './Landing.module.css';
const LandingPage = () => {
  return (
    <div className={style.all}>
        <div className={style.body}>
         <h2 className={style.text}>Henry Countries</h2>
         <h2></h2>
      <NavLink to='/home' > <button className={style.buttonLogin}>GO TO HOME</button></NavLink>
    </div>
    </div>
  )
}
export default LandingPage
