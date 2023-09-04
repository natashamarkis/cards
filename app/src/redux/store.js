import {legacy_createStore as createStore} from 'redux'
import { rootReducer } from './reducers/root.reducer'

const initialState = {
  list: [],
  favourites: []
}

export const store = createStore(rootReducer, initialState)