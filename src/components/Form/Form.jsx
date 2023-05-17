import React, { useContext, useState } from 'react';
import { globalContext } from '../../contexts/globalContext';

function Form() {
  const { dispatch } = useContext(globalContext)

  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    dispatch({
      type: 'ADD_IMAGE',
      payload: {
        image,
        text,
        id: Date.now(),
      }
    })

    setText('')
    setImage('')
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