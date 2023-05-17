import Main from "./components/Main/Main";
import { globalContext as GlobalContext } from "./contexts/globalContext";
import React, { useReducer } from "react";
import { reducer } from "./reducers/reducer";

function App() {

  const initialState = {
    list: [],
    text: '',
    image: '',
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <GlobalContext.Provider value={{state, dispatch}}>
        <Main />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
