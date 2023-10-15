import React from "react";
import './CardImage.css';

export default function CardImage({image}) {
    return (
        <div className = 'CardImage'>
            <div className="Content">
                <img src={image}/>
            </div>
        </div>
    )
}
