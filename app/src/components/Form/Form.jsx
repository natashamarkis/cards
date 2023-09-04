import React, { useState } from 'react';
import { notification} from 'antd';
import { useNavigate } from 'react-router-dom';
import  {useDispatch} from 'react-redux'
import { addImage } from '../../redux/actions/list.actions';

function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const openNotification = () => {
    notification.open({
      message: 'OK',
      description:
        'Good',
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newImage = {
      image,
      text,
      id: Date.now(),
    }

    const response = await fetch('http://localhost:4000/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(newImage)
    })

    if(response.status === 200){
      dispatch(addImage(newImage))

      setText('')
      setImage('')

      openNotification()
    } else {
      navigate('/error')
    }
  }

  return (
    <form className="mb-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Text: {text}
            </label>
            <input
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(event) => setText(event.target.value)}
              value={text}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Image: {image}
            </label>
            <input
              className="form-control"
              id="exampleInputPassword1"
              onChange={(event) => setImage(event.target.value)}
              value={image}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
  );
}

export default Form;