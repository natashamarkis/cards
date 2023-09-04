import React from 'react';
import  {useSelector} from 'react-redux'
import Card from '../Card/Card';

function Favourites(props) {
  const {favourites, list} = useSelector((state) => state)
console.log(favourites, list);
  return (
    <div className='container'>
      hey!!
      <div className="row my-5">
        {list.filter((el) => favourites.includes(el.id)).map((post) => (
          <div key={post.id} className="col-3">
            <Card image={post.image} text={post.text} id={post.id} />
          </div>
        ))}
    </div>
    </div>
  );
}

export default Favourites;