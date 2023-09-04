import React, { useEffect } from "react";
import CardList from "../CardList/CardList";
import Form from "../Form/Form";
import  {useDispatch} from 'react-redux'
import {getList} from '../../redux/actions/list.actions'

function Main() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://localhost:4000/cards')
      .then((res) => res.json())
      .then((res) => {
        dispatch(getList(res))
      })
  }, [])


  return (
    <main className="container my-5">
      <Form />
      <CardList />
    </main>
  );
}

export default Main;
