import { ADD_FAVOURITE } from "../types"

export function favouriteReducer(state = [], action){ 
  const {type} = action
  switch(type){
    case ADD_FAVOURITE: {
      const { id } = action.payload
      return [...state, +id]
    }
    default: {
      return state
    }
  }
}