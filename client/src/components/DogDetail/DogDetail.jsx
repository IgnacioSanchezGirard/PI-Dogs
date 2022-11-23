import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../redux/actions';
// import imagen from '../imgs/dog-7205842_1920.jpg';
import style from '../DogDetail/DogDetail.module.css';
// import undraw from '../imgs/undraw_good_doggy_re_eet7.svg';
import Navbar from '../NavBar/Navbar';

import loader from '../../img/perro_pensando.jpg';

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const dogDetail = useSelector((state) => state.dogDetail);
  console.log(dogDetail);
  const renderDog = () => {
    if (Object.keys(dogDetail).length > 0) {
      return (
        <div className={style.main}>
          <div className={style.card}>
            <h1>Name: {dogDetail?.name}</h1>
            <img src={dogDetail?.image} alt='dog' className={style.img} />
            <p>Height: {dogDetail?.height}</p>
            <p>Weight: {dogDetail?.weight}</p>
            <p>Life Span: {dogDetail?.years}</p>
            <p>Temperaments: {dogDetail?.temperament}</p>
          </div>
          {/* <img src={undraw} alt='dog'></img> */}
        </div>
      );
    } else {
      return (
        <div className={style.load}>
          <h1 className={style.h1}>Loading...</h1>
          <img src={loader} alt='loader' className={style.loader}></img>
        </div>
      );
    }
  }
  console.log(dogDetail);
  return (
    <>
      <Navbar></Navbar>
      <div>{renderDog()}</div>
    </>
  );
}