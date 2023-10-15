import React from "react";
import CardBase from "./CardBase";
import './CardContainer.css';

export default function CardContainer({data}) {
    const {history, image, answers} = data.content;
    
    return(
        <div className="CardContainer">
            <CardBase data={{type: 'history', history}} delay={1000}/>
            <CardBase data={{type: 'image', image}} delay={1500}/>
            <CardBase data={{type: 'answers', answers}} delay={2000}/>
        </div>
    )
}
