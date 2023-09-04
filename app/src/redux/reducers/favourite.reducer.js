import { ADD_FAVOURITE, DELETE_FAVOURITE } from "../types"

export function favouriteReducer(state = [], action){ 
  const {type} = action
  switch(type){
    case ADD_FAVOURITE: {
      const { id } = action.payload
      return [...state, +id]
    }
    case DELETE_FAVOURITE: {
      const { id } = action.payload
      const newList = [...state].filter(el => el !== +id)
      return [...newList]
    }
    default: {
      return state
    }
  }
}