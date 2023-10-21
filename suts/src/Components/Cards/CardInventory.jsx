import React from "react";
import { useContext } from "react";
import { CardContext } from './Context/CardContext';
import './CardInventory.css'
import { useState } from "react";
import { useEffect } from "react";
import apple from '../../Assets/appleItem.webp';
import appleCard from '../../Assets/appleItem.png';

export default function CardInventory({handler}) {
const [inventoryContainer, setinventoryContainer] = useState([])
const [items, setItems] = useState([{
    img: apple,
    count: 1,
    imgCard: appleCard,
    text:'hola, soy un maniqui'
}]);

const handleOnClick = (item) => {
    setTimeout(() => {
        handler.handleInventoryClick(item.text, item.imgCard);
    }, 1200);
};

useEffect(() => {
    const tempItems = [];
    for (let i = 0; i < 16; i++) {
        if (items[i]) {
            const item = items[i];
            tempItems.push(
                <button key={i} style={{backgroundImage: `url(${items[i].img})`}}  onClick={() => handleOnClick({item})}>
                    <span>{items[i].count}</span>
                </button>
            )
        } else {
            tempItems.push(
                <button key={i} disabled='disabled' className="block"></button>
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
        </div>
    )
}
