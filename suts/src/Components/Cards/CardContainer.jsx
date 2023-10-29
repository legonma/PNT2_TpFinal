import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardBase from "./CardBase";
import './CardContainer.css';

export default function CardContainer({scene, handleAnswerClick, handleLoginClick, user}) {
    const {history, image, answers, login, inventory} = scene.content;
    const [cardContainer, setCardContainer] = useState([]);
    const [item, setItem] = useState({});

    const handleInventoryClick = (item) => {
        setItem(item)
    }

    useEffect(() => {
        if (scene.cards.charAt() === 'E') {
            setCardContainer([
                <CardBase key='history' data={{type: 'history', history}} delay={500}/>,
                <CardBase key='image' data={{type: 'image', image}} delay={750}/>,
                <CardBase key='answers' data={{type: 'answers', answers, handler: {handleAnswerClick}, user}} delay={1000}/>
            ])
        } else if (scene.cards === 'Login') {
            setCardContainer([
                <CardBase key='loginLeft' data={{type: 'default'}} delay={500} noFlip={true}/>,
                <CardBase key='login' data={{type: 'login', login, handlerLogin: {handleLoginClick}}} delay={750}/>,
                <CardBase key='loginRight' data={{type: 'default'}} delay={1000} noFlip={true}/>
            ])
        } else if (scene.cards === 'Inventory') {
            setCardContainer([
                <CardBase key='inventory' data={{type: 'inventory', inventory, handlerInvent: {handleInventoryClick}, handler: {handleAnswerClick}, user:user}} delay={500}/>,
                <CardBase key='inventoryDescription' data={{type: 'inventoryDescription', item: item}} delay={750}/>,
                <CardBase key='inventoryRight' data={{type: 'default'}} delay={1000} noFlip={true}/>
            ])
        }
    }, [handleLoginClick, handleAnswerClick, item, history, image, answers, user])

    return(
        <div className="CardContainer">{cardContainer}
        </div>
    )
}
