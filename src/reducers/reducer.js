export function reducer(state, action){ //action: type and payload
  switch(action.type){
    case 'ADD_IMAGE': {
      const newImage = action.payload
      return { ...state, list: [...state.list, newImage]}
    }
    case 'EDIT_CARD': {
      const { text, id } = action.payload
      const newList = state.list.map(el => {
        if(el.id === id){
          return {...el, text: text}
        }
        return el
      })
      return {...state, list: newList}
    }
    case 'DELETE_CARD': {
      const { id } = action.payload
      const newList = state.list.filter(el => el.id !== id)
      return {...state, list: newList}
    }
    default: {
      return state
    }
  }
}