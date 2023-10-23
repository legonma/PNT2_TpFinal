import React from "react";
import './CardInventoryDescription.css';

export default function CardInventoryDescription({item}) {
    console.log(item)
    const {text, imgCard} = item
    return(
        <div className='CardInventoryDescription'>
            <div className='Content'>
                <img src={imgCard}/>
                <p>{text}</p>
            </div>
        </div>
    );
}
