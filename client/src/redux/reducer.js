import {
  GET_ALL_DOGS,
  GET_DETAIL,
  GET_TEMPS,
  GET_DOG_NAME,
  CREATE_DOG,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
  ORDER_BY_BD,
  CLEAR_DOG,
  ORDER_BY_TEMPS,
} from "./actions";

const initialState = {
  Dogs: [],
  Dogs2: [],
  dogDetail:[],
  error: {},
  temperaments: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        Dogs: action.payload,
        Dogs2: action.payload,
      };

    case ORDER_BY_NAME:
      let dogSorted =
        action.payload === "Asc"
          ? state.Dogs.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
          : state.Dogs.sort((a, b) => {
              if (a.name > b.name) return -1;
              if (a.name < b.name) return 1;
              return 0;
            });

      return {
        ...state,
        Dogs: dogSorted,
      };

    case ORDER_BY_WEIGHT:
      let sorted2 =
        action.payload === "orderHEAVY"
          ? state.Dogs.sort((b, a) => {
              if (parseInt(a.weight) > parseInt(b.weight)) return 1;
              if (parseInt(a.weight) < parseInt(b.weight)) return -1;
              return 0;
            })
          : state.Dogs.sort((a, b) => {
              if (parseInt(a.weight) > parseInt(b.weight)) return 1;
              if (parseInt(a.weight) < parseInt(b.weight)) return -1;
              return 0;
            });
      return {
        ...state,
        Dogs: sorted2,
      };

    case ORDER_BY_BD:
      const totaldogs = state.Dogs2
      let orderCreated =
        action.payload === "Show BD dogs"
          ? totaldogs.filter((el) => el.CreateDB)
          : action.payload === "Show API dogs"
          ? totaldogs.filter((el) => !el.CreateDB)
          : ""
          console.log(orderCreated);
      return {
        ...state,
        Dogs: orderCreated
      };

      // const totaldogs = state.Dogs2
      // const orderCreated =
      //   action.payload === "Show API dogs"
      //     ? state.totaldogs.filter((el) => el.CreateDB)
      //     : state.totaldogs.filter((el) => !el.CreateDB);
      // return {
      //   ...state,
      //   Dogs:
      //     action.payload === "Show BD dogs"
      //       ? Array.from(new Set(state.Dogs.concat(state.Dogs2)))
      //       : orderCreated,
      // };

    case GET_DETAIL:
      return {
        ...state,
        dogDetail: action.payload,
      };

    case GET_TEMPS:
      return {
        ...state,
        temperaments: [...action.payload],
      };

    case ORDER_BY_TEMPS:
      const AllDogs = state.Dogs2;
      const dogTemp = AllDogs.filter(dog => dog.temperament.includes(action.payload))
      console.log(dogTemp);
      return {
        ...state,
        Dogs: dogTemp
      }
      
      case GET_DOG_NAME:
        return {
          ...state,
          Dogs: action.payload,
        };
        
    case CREATE_DOG:
      return {
        ...state,
      };

    case CLEAR_DOG:
      return {
        ...state,
        dogDetail: [],
      };

    default:
      return state;
  }
}
