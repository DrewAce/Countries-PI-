import React from 'react';
import SearchBar from "../Searchbar/Searchbar";
import Filter from "../Filter and Order/Filter";
import Order from "../Filter and Order/Order";
import styles from "./Bar.module.css";
import {Link} from 'react-router-dom'

const Bar = ({activities, setCurrentPage}) => {
  return (
    <div>
         <div className={styles.normalBar}>
        <span className={styles.btn_select}></span>
        <div className={styles.containerSearchBarx}>
          <SearchBar setCurrentPage={setCurrentPage} />
        </div>
        <div className={styles.opctionMenu}>
          <p className={styles.pTitleMenu}>Filter by</p>
          <div className={styles.submenu}>
            <Filter activities={activities} setCurrentPage={setCurrentPage} />
          </div>
        </div>

        <div className={styles.opctionMenu}>
          <p className={styles.pTitleMenu}>Order by</p>
          <div className={styles.submenu}>
            <Order activities={activities} setCurrentPage={setCurrentPage} />
          </div>
        </div>

        <div className={styles.opctionMenu}>
          <a className={styles.pTitleMenu} href="/about">
            About me
          </a>
          <div className={styles.submenu}></div>
          <br></br>
        </div>
        <Link to="/activity/" className={styles.buttonLogin}>
          <span>ADD ACTIVITY</span>
        </Link>
        <br></br>
      </div>
    </div>
    
  )
}

export default Bar
