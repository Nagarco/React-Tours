import React, { useContext, useState } from 'react';
import { TourContext } from './App';

const Tour = (props) => {
  const {id, image, info, price, name} = props.data;
  const [readMore, setReadMore] = useState(false);
  const {removeTour} = useContext(TourContext);
  return <article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>{price}</h4>
      </div>
      <p>
        {readMore?info:`${info.substring(0,200)}...`}
        <button onClick={()=> setReadMore(!readMore)}>{readMore?'Show Less':'Read More'}</button>
      </p>
      <button className='delete-btn' onClick={()=>removeTour(id)}>Not Interested</button>
    </footer>
  </article>;
};

export default Tour;
