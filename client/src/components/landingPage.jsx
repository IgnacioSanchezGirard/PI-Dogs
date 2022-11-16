import React from "react";
import { Link } from "react-router-dom";
import perro from "../img/perro.jpg"

const LandingPage = () => {
    return (
        <>
        <div> 
        <img src= {perro} alt= "imagen no encontrada"/>     
        </div>
        <Link to="/Home">
        <button>
            ir al home
        </button>
        </Link>
        </>
    )
}

export default LandingPage