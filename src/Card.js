import React, { useState, useEffect } from 'react';
import mysterion from './images/mysterion.webp'

const Card = ({check, character}) => {

    let charPath = mysterion;

    const handleClick = (e) => {
        if(character.status !== "visible"){
            check({ ...character });
        }
    }
    return (
        <div className='card' onClick={(e) => handleClick(e)}>
            <img src={character.status === "hidden" ? mysterion : character.path}></img>
        </div>
    )
}

export default Card;