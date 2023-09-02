import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { globalContext } from "../../contexts/globalContext";

function Card({image, text, id}) {
  const { dispatch } = useContext(globalContext)

function deleteCard(e){
  dispatch({
    type: 'DELETE_CARD',
    payload: {
      id: e
    }
  })
  
}

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={text} />
      <div className="card-body">
        <h5 className="card-title">{text}</h5>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px'}}>
        <Link to={`/edit/${id}`}>
          <button type="button" className="btn btn-primary" style={{width: '100px'}}>Edit</button>
        </Link>
        <button 
          type="button" 
          className="btn btn-danger" 
          style={{width: '100px'}}
          onClick={_ => deleteCard(id)}
        >Delete</button>
      </div>
    </div>
  );
}

export default Card;
