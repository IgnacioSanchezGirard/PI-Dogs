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
  ERROR,
  ORDER_BY_TEMPS,
} from "./actions";

const initialState = {
  Dogs: [],
  Dogs2: [],
  dogDetail: [],
  error: {},
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
          ? state.allDogs.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
          : state.allDogs.sort((b, a) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            });

      return {
        ...state,
        Dogs: dogSorted,
      };

    case ORDER_BY_WEIGHT:
      let sorted2 =
        action.payload === "orderHEAVY"
          ? state.allDogs.sort((b, a) => {
              if (parseInt(a.weight) > parseInt(b.weight)) return 1;
              if (parseInt(a.weight) < parseInt(b.weight)) return -1;
              return 0;
            })
          : state.allDogs.sort((a, b) => {
              if (parseInt(a.weight) > parseInt(b.weight)) return 1;
              if (parseInt(a.weight) < parseInt(b.weight)) return -1;
              return 0;
            });
      return {
        ...state,
        Dogs: sorted2,
      };

    case ORDER_BY_BD:
      const orderCreated =
        action.payload === "orderBD"
          ? state.allDogs2.filter((el) => el.createdAt)
          : state.allDogs2.filter((el) => !el.createdAt);
      return {
        ...state,
        allDogs:
          action.payload === "orderALL"
            ? Array.from(new Set(state.allDogs.concat(state.allDogs2)))
            : orderCreated,
      };

    case GET_DETAIL:
      return {
        ...state,
        dogDetail: action.payload,
      };

    case GET_TEMPS:
      return {
        ...state,
        temperaments: action.payload,
      };

    case ORDER_BY_TEMPS:
      const sorted =
        action.payload === "Asc"
          ? state.Dogs.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
          : state.Dogs.sort((b, a) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
            });
      return {
        ...state,
        Dogs: sorted,
      };

    case GET_DOG_NAME:
      return {
        ...state,
        allDogs: action.payload,
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

    // case ERROR:
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };

    default:
      return state;
  }
}
