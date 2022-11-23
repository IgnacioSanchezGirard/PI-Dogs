import React from "react";
import { NavLink } from "react-router-dom";
import style from "./LandingPage.module.css"
import img from "../../img/boton_iniciar.png"

function LandingPage() {
    return (
      <div className={style.background}>
      <h1 className={style.h1}>Dogs PI</h1>

      <h2 className={style.h2}>
        "Dame una caricia y te seguire hasta el fin del mundo"
      </h2>

      <span className={style.span}>
        Guillermo Reyes
        
        </span>

      <div className={style.divBtn}>
        <NavLink exact to='/home'>
        <a className={style.box} href="../img/boton_iniciar.png">
                    <img className={style.img} src={img} alt="ingresar"/>
                    <span>Home</span>
                </a>
        </NavLink>
      </div>
    </div>
    )
}

export default LandingPage