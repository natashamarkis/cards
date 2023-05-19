import Main from "./components/Main/Main";
import { globalContext as GlobalContext } from "./contexts/globalContext";
import React, { useReducer } from "react";
import { reducer } from "./reducers/reducer";
import Nav from "./components/Nav/Nav";
import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home/Home";
import Edit from "./components/Edit/Edit";

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
        <Nav />
        <Routes>
          <Route path="/cards" element={<Main />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/edit/:id" element={<Edit />}/>
        </Routes>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
