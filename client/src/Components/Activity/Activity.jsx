import { Link } from "react-router-dom";
import ListActivity from "./CRUD/List/ListActivity";
import styles from "./Activity.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getActivities } from "../../Redux/actions";
import imgHome from '../../img/whiteHome.png'
import imgPlus from '../../img/plus.png'

const Activity = () => {
 const dispatch= useDispatch()
 const activities= useSelector((state)=> state.activities)

 useEffect(()=>{
  dispatch(getActivities())
 }, [dispatch])
  return (
    <div>
      <div>
      <Link to ='/home'><button className={styles.boton}><img src={imgHome} alt="Home" className={styles.img}></img></button></Link>
      </div>
      <div> 
      <Link to ='/activity/create'><button className={styles.boton2}><img src={imgPlus} alt="Home" className={styles.img}></img></button></Link>
      </div>
      <h1 className={styles.title}>ACTIVITIES</h1>

      <div>
        <ListActivity activities={activities} />
      </div>
    </div>
  )
}

export default Activity
