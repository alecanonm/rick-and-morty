import * as types from "./types";

// export const addCharacter = (character) => {
//   return {
//     type: types.ADD_FAVORITE,
//     payload: character,
//   };
// };

import axios from "axios";

// ACTION | addFav
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    const res = await axios.post(endpoint, character);
    try {
      return dispatch({
        type: "ADD_FAV",
        payload: res.data,
      });
    } catch (err) {}
  };
};

// export const deleteCharacter = (id) => {
//   return {
//     type: types.DELETE_FAVORITE,
//     payload: id,
//   };
// };

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    const res = await axios.delete(endpoint);
    try {
      return dispatch({
        type: "REMOVE_FAV",
        payload: res.data,
      }); 
    } catch (err) {}
  };
};

export const filterCards = (gender) => {
  return {
    type: types.FILTER,
    payload: gender,
  };
};

export const orderCards = (id) => {
  return {
    type: types.ORDER,
    payload: id,
  };
};
