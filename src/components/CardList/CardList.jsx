import React, { useContext } from 'react';
import Card from '../Card/Card'
import { globalContext } from '../../contexts/globalContext';

function CardList() {
  const { state } = useContext(globalContext)
  return (
    <div className="row my-5">
          {state.list.map((post) => (
            <div key={post.id} className="col-3">
              <Card image={post.image} text={post.text} id={post.id} />
            </div>
          ))}
        </div>
  );
}

export default CardList;