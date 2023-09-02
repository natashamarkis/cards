import Main from "./components/Main/Main";
import { globalContext as GlobalContext } from "./contexts/globalContext";
import React, { useEffect, useReducer } from "react";
import { reducer } from "./reducers/reducer";
import Nav from "./components/Nav/Nav";
import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home/Home";
import Edit from "./components/Edit/Edit";
import Error from "./components/Error/Error";

function App() {

  const initialState = {
    list: [],
  }

  function getCards(cards){
    dispatch({
      type: 'GET_CARDS',
      payload: {
        cards
      }
    })
  }

  useEffect(() => {
    fetch('http://localhost:4000/cards')
      .then((res) => res.json())
      .then((res) => getCards(res))
  }, [])


  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <GlobalContext.Provider value={{state, dispatch}}>
        <Nav />
        <Routes>
          <Route path="/cards" element={<Main />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/edit/:id" element={<Edit />}/>
          <Route path="/error" element={<Error />}/>
        </Routes>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
