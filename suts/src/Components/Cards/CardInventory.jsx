import React from "react";
import { useContext } from "react";
import { CardContext } from './Context/CardContext';
import './CardInventory.css'
import { useState } from "react";
import { useEffect } from "react";

export default function CardInventory({handler, handlerAnswer, user}) {
const [inventoryContainer, setinventoryContainer] = useState([])
const [items, setItems] = useState(user.currentUser.inventory);
const {flipCard} = useContext(CardContext);

const handleItemOnClick = (item, key) => {
    setTimeout(() => {
        handler.handleInventoryClick(item);
    }, 300);
};

const handleOnClick = (answr) => {
    if (!answr.noFlip) {
        flipCard()
    }
    setTimeout(() => {
        handler.handleInventoryClick({});
        handlerAnswer.handleAnswerClick(answr);
    }, 1200);
};

useEffect(() => {
    const tempItems = [];
    for (let i = 0; i < 12; i++) {
        if (items[i]) {
            const item = items[i];
            tempItems.push(
                <button key={i} id={i} style={{backgroundImage: `url(${items[i].img})`}}  onClick={() => handleItemOnClick({item}, i)} className="Item">
                    <div className="CountContainer">
                        <span className="CountNumber">{items[i].count}</span>
                    </div>
                </button>
            )
        } else {
            tempItems.push(
                <div key={i} className="blockContainer">
                    <button key={i} disabled='disabled' className="block"></button>
                </div>
            )
        }
    }
    setinventoryContainer(tempItems)
}, [])

    return (
        <div className="CardInventory">
            <div className="Content">
                <div className="InventoryGrid">{inventoryContainer}
                </div>
            </div>
            <button title="Volver a la historia" className="ButtonInventory" onClick={() => handleOnClick({next:'BackToEscene'})}><span className="InventaryText">Back</span></button>
        </div>
    )
}
