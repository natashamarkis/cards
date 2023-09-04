export function listReducer(state = [], action){ 
  const {type} = action
  switch(type){
    case 'GET_CARDS': {
      const cards = action.payload
      return [...cards]
    }
    case 'ADD_IMAGE': {
      const newImage = action.payload
      return [...state, newImage]
    }
    case 'EDIT_CARD': {
      const { text, id } = action.payload
      const newList = state?.map(el => {
        if(el.id === id){
          return {...el, text: text}
        }
        return el
      })
      return [...newList]
    }
    case 'DELETE_CARD': {
      const { id } = action.payload
      const newList = state?.filter(el => el.id !== id)
      return [...newList]
    }
    default: {
      return state
    }
  }
}