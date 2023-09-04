import { ADD_FAVOURITE, DELETE_FAVOURITE } from "../types";

export const addToFavourite = (id) => ({
  type: ADD_FAVOURITE,
  payload: {id}
})

export const deleteFavourite = (id) => ({
  type: DELETE_FAVOURITE,
  payload: {id}
})