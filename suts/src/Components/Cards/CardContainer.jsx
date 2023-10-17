import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardBase from "./CardBase";
import './CardContainer.css';

export default function CardContainer({data, handleAnswerClick}) {
    const {history, image, answers} = data.content;
    const [cardContainer, setCardContainer] = useState([]);

    useEffect(() => {
        if (true) {
            setCardContainer([
                <CardBase key='history' data={{type: 'history', history}} delay={500}/>,
                <CardBase key='image' data={{type: 'image', image}} delay={750}/>,
                <CardBase key='answers' data={{type: 'answers', answers, handler: {handleAnswerClick}}} delay={1000}/>
            ])
        }
    }, [data, handleAnswerClick, history, image, answers])

    return(
        <div className="CardContainer">{cardContainer}
        </div>
    )
}
