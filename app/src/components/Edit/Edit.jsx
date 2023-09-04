import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import  {useDispatch, useSelector} from 'react-redux'
import { editCard } from '../../redux/actions/list.actions';

function Edit() {
  const navigate = useNavigate();

  const list = useSelector((state) => state.list)
  const dispatch = useDispatch()

  const { id } = useParams()
  const currentCard = list?.find(el => el.id === +id)

  const [newText, setNewText] = useState(currentCard.text)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const newData = {
      text: newText,
      id: +id
    }
    
    const response = await fetch('http://localhost:4000/cards', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(newData)
    })

    if(response.status === 200){
      dispatch(editCard(newData))
      navigate('/cards')
    }
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