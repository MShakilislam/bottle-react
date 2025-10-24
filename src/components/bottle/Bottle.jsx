import React from 'react';
import './bottle.css'
const Bottle = ({ bottle,handalClick }) => {
    const { img, name, ratingsCount, price } = bottle;
    // console.log(bottle.price)

    return (
        <div className='cards cardse'>
            <img src={img} alt="" />
            <h2>Name : {name}</h2>
            <h3>${price}</h3>
            <h2>Stroc : {ratingsCount}</h2>
            <button onClick={()=> handalClick(bottle)}>Availabe </button>
        </div>
    );
};

export default Bottle;