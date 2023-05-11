import { FILTER, ORDER } from "./types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    // case ADD_FAVORITE:
    //   return {
    //     ...state,
    //     myFavorites: [...state.allCharacters, payload],
    //     allCharacters: [...state.allCharacters, payload],
    //   };

    case "ADD_FAV":
      return { ...state, myFavorites: payload, allCharacters: payload };

      break;
    // case DELETE_FAVORITE:
    //   const copy = state.myFavorites.filter((char) => char.id !== payload);
    //   return {
    //     ...state,
    //     myFavorites: copy,
    //     allCharacters: copy,
    //   };
    case "REMOVE_FAV":
      return { ...state, myFavorites: payload, allCharacters: payload };
      break;
    case FILTER:
      const filterByGender = [...state.allCharacters].filter(
        (char) => char.gender === payload
      );
      return {
        ...state,
        myFavorites: filterByGender,
      };
      break;
    case ORDER:
      const order = [...state.allCharacters].sort((a, b) => {
        if (a.id > b.id) {
          return payload === "Ascendente" ? 1 : -1;
        } else if (a.id < b.id) {
          return payload === "Descendente" ? 1 : -1;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        myFavorites: order,
      };
      break;
    default:
      return { ...state };
  }
}
