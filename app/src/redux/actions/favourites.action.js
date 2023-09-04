import { ADD_FAVOURITE } from "../types";

export const addToFavourite = (id) => ({
  type: ADD_FAVOURITE,
  payload: {id}
})
