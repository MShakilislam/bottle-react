import React from 'react';

const Card = ({ Card }) => {
    return (
        <div>
            {
                Card.map(bottle => <div key={bottle.id}>
                    <img src={bottle.img} alt="" />
                </div>)
            }

        </div>
    );
};

export default Card;