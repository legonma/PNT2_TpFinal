import React from "react";
import './CardHistory.css';


export default function CardHistory({history}) {
    return (
        <div className='CardHistory'>
            <div className='Content'>
                <h2>{history.title}</h2>
                <p>{history.text}</p>
            </div>
        </div>
    )
}
