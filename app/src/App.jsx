import Main from "./components/Main/Main";
import React from "react";
import Nav from "./components/Nav/Nav";
import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home/Home";
import Edit from "./components/Edit/Edit";
import Error from "./components/Error/Error";
import Favourites from "./components/Favourites/Favourites";

function App() {

  return (
    <>
        <Nav />
        <Routes>
          <Route path="/cards" element={<Main />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/favourites" element={<Favourites />}/>
          <Route path="/edit/:id" element={<Edit />}/>
          <Route path="/error" element={<Error />}/>
        </Routes>
    </>
  );
}

export default App;
