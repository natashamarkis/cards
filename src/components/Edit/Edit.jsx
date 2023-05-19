import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { globalContext } from '../../contexts/globalContext';


function Edit() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(globalContext)

  const { id } = useParams()
  const currentCard = state.list.find(el => el.id === +id)

  const [newText, setNewText] = useState(currentCard.text)

  function handleSubmit(event){
    event.preventDefault()

    dispatch({
      type: 'EDIT_CARD',
      payload: {
        text: newText,
        id: +id
      }
    })

    navigate('/cards')
  }

  return (
    <div className='container'>
      <img src={currentCard.image} className="card-img-top" alt={currentCard.text} style={{display: 'block', width: '50%'}}/>
      <div className="card-body">
        Text:
        <h5 className="card-title">{currentCard.text}</h5>
        <form className="mb-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(event) => setNewText(event.target.value)}
              value={newText}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          </form>
      </div>
    </div>
  );
}

export default Edit;