import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardBase from "./CardBase";
import './CardContainer.css';

export default function CardContainer({scene, data, handleAnswerClick}) {
    const {history, image, answers, login, inventory} = data.content;
    const [cardContainer, setCardContainer] = useState([]);

    useEffect(() => {
        if (scene.charAt() === 'E') {
            setCardContainer([
                <CardBase key='history' data={{type: 'history', history}} delay={500}/>,
                <CardBase key='image' data={{type: 'image', image}} delay={750}/>,
                <CardBase key='answers' data={{type: 'answers', answers, handler: {handleAnswerClick}}} delay={1000}/>
            ])
        } else if (scene === 'Login') {
            setCardContainer([
                <CardBase key='loginLeft' data={{type: 'default'}} delay={500} noFlip={true}/>,
                <CardBase key='login' data={{type: 'login', login, handler: {handleAnswerClick}}} delay={750}/>,
                <CardBase key='loginRight' data={{type: 'default'}} delay={1000} noFlip={true}/>
            ])
        } else if (scene === 'Inventory') {
            setCardContainer([
                <CardBase key='inventory' data={{type: 'inventory', inventory, handler: {handleAnswerClick}}} delay={500}/>,
                <CardBase key='inventoryMiddle' data={{type: 'inventoryDescription'}} delay={750}/>,
                <CardBase key='inventoryRight' data={{type: 'default'}} delay={1000} noFlip={true}/>
            ])
        }
    }, [data, handleAnswerClick, history, image, answers])

    return(
        <div className="CardContainer">{cardContainer}
        </div>
    )
}
