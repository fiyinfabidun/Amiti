import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, content, imageUrl }) => {
  const [isShow, setShow] = useState(false)
  return (
    <div className="card" 
     onClick={()=>setShow(!isShow)}>
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <h3 className='title'>{title}</h3>
        <p className={isShow?'show':'cards'}>{content}</p>
        <button> <Link to='/Shop'> view Shop</Link></button>
      </div>
    </div>
  );
};

export default Card;

