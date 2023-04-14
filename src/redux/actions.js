import * as types from "./types";

export const addCharacter = (character) => {
  return {
    type: types.ADD_FAVORITE,
    payload: character,
  };
};

export const deleteCharacter = (id) => {
  return {
    type: types.DELETE_FAVORITE,
    payload: id,
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
