import React from 'react';
import Card from '../Card/Card';
import  {useSelector} from 'react-redux'

function CardList() {
  const list = useSelector((state) => state.list)

  return (
    <div className="row my-5">
        {list.map((post) => (
          <div key={post.id} className="col-3">
            <Card {...post}/>
          </div>
        ))}
    </div>
  );
}

export default CardList;