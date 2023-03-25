import React from 'react';
import style from './Footer.module.css'
import imgGit from '../../img/git.png'
import imgLink from '../../img/link.png'
import imgPort from '../../img/briefcase.png'

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
  return (
    <div>
        <div className={style.normalBar}>
        <h3 className={style.text}>Countries App</h3>
        <h3 className={style.text}>Copyright © {year} </h3>
        <a href='https://github.com/DrewAce' target='__blank'><button className={style.boton}><img src={imgGit} alt="GitHub" className={style.img}></img></button></a>   
        <a href='https://portfolio-rho-two-31.vercel.app/' target='__blank'><button className={style.boton}><img src={imgPort} alt="PortFolio" className={style.img}></img></button></a>                                    
        <a href='https://www.linkedin.com/in/juan-andr%C3%A9s-carmona-le%C3%B3n-52a378261/' target='__blank'><button className={style.boton}><img src={imgLink} alt="LinkedIn" className={style.img}></img></button></a>
        </div>
      </div>
   
    
  )
}

export default Footer
