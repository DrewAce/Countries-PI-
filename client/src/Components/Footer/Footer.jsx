import React from 'react';
import imgGit from '../../img/git.png'
import imgLink from '../../img/link.png'
import imgPort from '../../img/briefcase.png'
import styles from "./Footer.module.css";


const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
  return (
    <div>        
         <div className={styles.normalBar}>
         <h3>In the search of new knowledge!</h3>
         <h3>Copyright © {year}</h3>
         <a href='https://github.com/DrewAce' target='__blank'><button className={styles.boton}><img src={imgGit} alt="GitHub" className={styles.img}></img></button></a>   
         <a href='https://portfolio-rho-two-31.vercel.app/' target='__blank'><button className={styles.boton}><img src={imgPort} alt="PortFolio" className={styles.img}></img></button></a>                    
         <a href='https://www.linkedin.com/in/juan-andr%C3%A9s-carmona-le%C3%B3n-52a378261/' target='__blank'><button className={styles.boton}><img src={imgLink} alt="LinkedIn" className={styles.img}></img></button></a>
        
      </div>
    </div>
    
  )
}

export default Footer