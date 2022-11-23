import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchDog } from '../../redux/actions';
// import styles from './SearchBar.module.css';


export default function SearchBar() {
  const dispatch = useDispatch();
  //estado local
  const [name, setName] = useState('');

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchDog(name));
  }

  return (
    <div className=''>
      <input
        className='div-input2'
        type='text'
        placeholder='Buscar...'
        onChange={(e) => handleInputChange(e)}
      />
      <button className='buscar' type='submit' onClick={(e) => handleSubmit(e)}>
        Buscar
      </button>
    </div>
  );
}
