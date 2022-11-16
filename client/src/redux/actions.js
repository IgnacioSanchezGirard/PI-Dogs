import axios from "axios"

export const GET_ALL_DOGS = "GET_ALL_DOGS"
export const GET_DETAIL = 'GET_DETAIL';
export const GET_TEMPS = 'GET_TEMPS';
export const GET_DOG_NAME = 'GET_DOG_NAME';
export const CREATE_DOG = 'CREATE_DOG';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_TEMPS = 'ORDER_BY_TEMPS';
export const ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT';
export const ORDER_BY_BD = 'ORDER_BY_CREATED';
export const CLEAR_DOG = 'CLEAR_DOG';

export const ERROR = "ERROR"



export const getAllDogs = ()=>{
    return async function (dispatch){
    try {
        const response = await axios.get("http://localhost:3001/dogs")
        const dogs = response.data
        dispatch({
            type: GET_ALL_DOGS,
            payload: dogs
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error
        });
      }
   }
}

export function getDetail(id) {
    return async function (dispatch) {
      try {
        const response = await axios.get("http://localhost:3001/dogs/"+ id);
        const dogs = response.data
        return dispatch({
          type: GET_DETAIL,
          payload: dogs
         
        });
      } catch (error) {
        dispatch({
            type: ERROR,
            payload: error
        });
        // console.log(error)
        // alert('Dog not found :(');
      }
    };
  }

  export function getTemperaments() {
    return async function (dispatch) {
        try {
        const response = await axios.get("http://localhost:3001/temperaments");
        const temp = response.data
        return dispatch({ 
            type: GET_TEMPS, 
            payload: temp
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error
        });
      }
    };
  }

  export function searchDog(name) {
    return async function (dispatch) {
      try {
        const response = await axios.get(`http://localhost:3001/dogs?name=${name}`);
        const dogs = response.data
        return dispatch({
          type: GET_DOG_NAME,
          payload: dogs
        });
      } catch (error) {
        dispatch({
            type: ERROR,
            payload: error
        });
        // console.log(e);
        // alert('Dog not found');
      }
    };
  }

  export function postDog(payload) {
    // console.log(payload);
    return async function () {
      const response = await axios.post('http://localhost:3001/dogs', payload);
      return response;
    };
  }

  export function orderByName(payload) {
    return {
      type: ORDER_BY_NAME,
      payload,
    };
  }

  export function orderByTemps(payload) {
    return {
      type: ORDER_BY_TEMPS,
      payload,
    };
  }

  export function orderByWeight(payload) {
    return {
      type: ORDER_BY_WEIGHT,
      payload,
    };
  }

  export function filterCreated(payload) {
    return {
      type: ORDER_BY_BD,
      payload,
    };
  }

  export function clearDog() {
    return {
      type: CLEAR_DOG,
    };
  }

