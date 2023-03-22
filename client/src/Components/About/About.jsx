import style from './About.module.css'
import imgGit from '../../img/git.png'
import imgLink from '../../img/link.png'
import imgHome from '../../img/whiteHome.png'
import imgPort from '../../img/briefcase.png'
import {Link} from 'react-router-dom'
export default function About(){
    return (
        <div className={style.contenedor}> 
            <div className={style.posicion}>
                <div className={style.info}>
                    <p className={style.about}>FullStack Developer & software engineering student   </p>  
                    <br /><br />
                    <div className={style.containerRedes}>
                        <a href='https://github.com/DrewAce' target='__blank'><button className={style.boton}><img src={imgGit} alt="GitHub" className={style.img}></img></button></a>   
                        <a href='https://portfolio-rho-two-31.vercel.app/' target='__blank'><button className={style.boton}><img src={imgPort} alt="PortFolio" className={style.img}></img></button></a>                    
                        
                       <a href='https://www.linkedin.com/in/juan-andr%C3%A9s-carmona-le%C3%B3n-52a378261/' target='__blank'><button className={style.boton}><img src={imgLink} alt="LinkedIn" className={style.img}></img></button></a>
                       <Link to ='/home'><button className={style.boton}><img src={imgHome} alt="Home" className={style.img}></img></button></Link>
                    </div>
                </div>                 
                <div className={style.title}>
                    <h1 className={style.name}>Juan Andrés<b className={style.b}> Carmona León</b></h1>     
                </div>           
            </div>
        </div>
    )
}