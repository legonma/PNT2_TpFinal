import React from "react";
import { useEffect } from "react";
import './CardInventoryDescription.css';

export default function CardInventoryDescription({item}) {
    const {text, title, img} = item
    debugger;

    useEffect(() => {
        debugger;
        let card = 
        <div className='Content'>
            <h1 value = {title}></h1>
            <img src={img}/>
            <p>{text}</p>
        </div>
    }, [item])

    return(
        <div className='CardInventoryDescription'>
            <div className='Content'>
                <h1 value = {title}></h1>
                <img src={img}/>
                <p>{text}</p>
            </div>
        </div>
    );
}
