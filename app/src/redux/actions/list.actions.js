import { GET_CARDS, ADD_IMAGE, EDIT_CARD, DELETE_CARD } from "../types"

export const getList = (cards) => ({ //action creator
  type: GET_CARDS,
  payload: cards
})

export const addImage = (newImage) => ({
  type: ADD_IMAGE,
  payload: newImage
})

export const editCard = (newData) => ({
  type: EDIT_CARD,
  payload: newData
})

export const deleteCard = (id) => ({
  type: DELETE_CARD,
  payload: {id}
})