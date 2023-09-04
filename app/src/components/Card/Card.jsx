import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, notification } from "antd";
import { deleteCard } from "../../redux/actions/list.actions";
import { addToFavourite, deleteFavourite } from "../../redux/actions/favourites.action";
import  {useSelector} from 'react-redux'

function Card({ image, text, id }) {
  const dispatch = useDispatch();
  const {favourites} = useSelector(state => state)

  const openNotification = (status, text) => {
    notification.open({
      message: { status },
      description: { text },
    });
  };

  const handleDeleteCard = async (e) => {
    const response = await fetch(`http://localhost:4000/cards/${e}`, {
      method: "DELETE",
    });

    if (response.status === 200) {
      dispatch(deleteCard(+e));
    } else {
      openNotification(response.status, "Error");
    }
  };

  const handleFavourite = (id) => {
    if(favourites.includes(id)){
      dispatch(deleteFavourite(id))
    } else {
      dispatch(addToFavourite(id))
    }
  }

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={text} />
      <div className="card-body">
        <h5 className="card-title">{text}</h5>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "20px",
        }}
      >
        <Link to={`/edit/${id}`}>
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "100px" }}
          >
            Edit
          </button>
        </Link>
        <button
          type="button"
          className="btn btn-danger"
          style={{ width: "100px" }}
          onClick={(_) => handleDeleteCard(id)}
        >
          Delete
        </button>
        <Button
          type="button"
          style={{ width: "50px" }}
          onClick={(_) => handleFavourite(id)}
        >
          {favourites.includes(id) ? '❤️' : '💙'}
        </Button>
      </div>
    </div>
  );
}

export default Card;
