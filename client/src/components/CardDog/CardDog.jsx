import React from "react";
import { Link } from 'react-router-dom';
import style from '../CardDog/CardDog.module.css';


export default function CardDog ({image, name, temperament, weight, id }) {
console.log(temperament);
console.log(typeof id);
  return (

        <div className={style.cardDog}>
        <img src={image} alt='dog' width='250px' height='200px'></img>
  
        <h3>Name: {name}</h3>
          <p>Temperaments: {temperament}</p>
        <p>Weight {weight}</p>
  
        <Link to={`/dogs/${id}`}>
          <button className={style.button}>
            <span className={style.shadow}></span>
            <span className={style.edge}></span>
            <span className={style.front}> Details</span>
          </button>
        </Link>
      </div>
    )
}