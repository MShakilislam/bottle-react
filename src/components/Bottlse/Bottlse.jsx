import React, { use, useEffect, useState } from 'react';
import Bottle from '../bottle/Bottle';
import './bottlse.css'
import { addItmesStorage, getCartStorage } from '../../utilites/utilites';

const Bottlse = ({ featchBottls }) => {
    const bottlse = use(featchBottls)
    const [card, setCard] = useState([])
    // console.log(bottlse)

    // useEffect 
    useEffect(() => {
        const storageCardId = getCartStorage()
        console.log(storageCardId, bottlse)

        const storCard = [];

        for (const id of storageCardId) {
            console.log(id)
            const cardBottle = bottlse.find(bottle => bottle.id === id);
            if(cardBottle){
                storCard.push(cardBottle)
            }
        }

        console.log("setcard items")
        setCard(storCard)

    }, [bottlse])

    const handalClick = (bottle) => {
        // console.log("ami ekhane click koreci ", bottle)
        const newCard = [...card, bottle]
        setCard(newCard)

        // save items card 
        addItmesStorage(bottle.id);
    }
    return (
        <div>
            <h2>Length : {bottlse.length}</h2>
            <p>Add to card : {card.length}</p>
            <cart  card={card}></cart>
            <div className='cards-grid'>
                {
                    bottlse.map(bottle =>
                        <Bottle key={bottle.id}
                            handalClick={handalClick}
                            bottle={bottle}>
                        </Bottle>)
                }
            </div>

        </div>
    );
};

export default Bottlse;