import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllDogs,
  getTemperaments,
  orderByName,
  orderByTemps,
  orderByWeight,
  filterCreated,
  clearDog,
} from '../../redux/actions';
import Navbar from '../NavBar/Navbar';
import Dog from '../CardDog/CardDog';
import Paginado from '../Paginado';
import SearchBar from '../SerchBar/SearchBar';
import imagen from '../../img/perro_4.jpg';
import style from './Home.module.css';


export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.Dogs);
  const allTemps = useSelector((state) => state.temperaments);

  const [currentPage, setCurrentPage] = useState(1);
  const DogPerPage = 8;
  const indexOfLastDog = currentPage * DogPerPage;
  const indexOfFirstDog = indexOfLastDog - DogPerPage;
  let currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
  const [, setOrden] = useState('');

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getTemperaments());
  }, [dispatch]);

  
  function handleFilterNames(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
  }

  function handleCreatedBy(e) {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
    setCurrentPage(1);
    setOrden(`${e.target.value}`);
  }

  function handleTemperaments(e) {
    e.preventDefault();
    dispatch(orderByTemps(e.target.value));
    setCurrentPage(1);
    setOrden(`${e.target.value}`);
  }

  function handleWeights(e) {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
    setCurrentPage(1);
    setOrden(`${e.target.value}`);
  }

  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className={style.main}>
        <SearchBar className={style.search} />

        <div className={style.filters}>
          <select
            onChange={(e) => handleFilterNames(e)}
            className={style.select}
          >
            <option hidden selected>
              Alphabetic order:
            </option>
            <option value="Asc" key='Asc'>
              Order A-Z
            </option>
            <option value="Desc" key='Desc'>
              Order Z-A
            </option>
          </select>

          <select onChange={handleTemperaments} className={style.select}>
            <option hidden selected>
              Order by temperament
            </option>
            {allTemps?.map((e) => (
              <option value={e.name} key={e.id}>
                {e.name}
              </option>
            ))}
          </select>

          <select onChange={(e) => handleWeights(e)} className={style.select}>
            <option hidden selected>
              Order by weight
            </option>
            <option value='orderHEAVY' key='heavy'>
              Order by heaviest
            </option>
            <option value='orderLIGHT' key='light'>
              Order by lightest
            </option>
          </select>

          <select onChange={handleCreatedBy} className={style.select}>
            <option hidden selected>
              Order by creation
            </option>
            {/* <option value='orderALL' key='all'>
              Show ALL dogs
            </option> */}
            <option value='Show API dogs' key='api'>
              Show API dogs
            </option>
            <option value='Show BD dogs' key='bd'>
              Show BD dogs
            </option>
          </select>

          <button
            onClick={() => window.location.reload()}
            className={style.button}
          >
            Reload
          </button>
        </div>
        
        <Paginado
          dogsPerPage={DogPerPage}
          allDogs={allDogs.length}
          paginado={paginado}
        />
        <div className={style.dogs2}>
          {!currentDogs.length > 0 ? (
            <div className={style.load}>
              {/* <img src={loader} alt='loader' className={style.loader}></img> */}
            </div>
          ) : (
            currentDogs.map((el) => {
              return (
                <div className={style.dogs} key={el.id}>
                  <Dog
                    image={el.image ? el.image : imagen}
                    name={el.name}
                    temperament={el.temperament}
                    weight={el.weight}
                    id={el.id}
                    className={style.cardDog}
                  />
                </div>
              );
            })
          )}
        </div>
      </main>
    </>
  );
}

// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { getAllDogs } from "../redux/actions";
// import CardDog from "./CardDog";

// const Home = () => {

//     const dispatch = useDispatch()
//     useEffect(() => {
//         dispatch(getAllDogs())
//     },[dispatch])

//     return (
//         <>
//         <CardDog/>
//         </>
//     )
// }

// export default Home