export function reducer(state, action){ //action: type and payload
  switch(action.type){
    case 'ADD_IMAGE': {
      const newImage = action.payload
      return { ...state, list: [...state.list, newImage]}
    }
    case 'DELETE_TODO': {
      break
    }
    default: {
      return state
    }
  }
}