import React from 'react';

import style from './Paginado.module.css';

 const Paginado = ({ dogsPerPage, allDogs, paginado }) => {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i + 1);
  }
  
  return (
    <div className={style.paginado}>
      {pageNumbers &&
        pageNumbers.map((number) => (
          <div className='number' key={number}>
            <button className='boton1' onClick={() => paginado(number)}>
              {number}
            </button>
          </div>
        ))}
    </div>
 
  );
}

export default Paginado
