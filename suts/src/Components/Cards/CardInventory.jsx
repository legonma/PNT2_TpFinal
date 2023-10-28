import React from "react";
import { useContext } from "react";
import { CardContext } from './Context/CardContext';
import './CardInventory.css'
import { useState } from "react";
import { useEffect } from "react";
import apple from '../../Assets/appleItem.webp';
import appleCard from '../../Assets/appleItem.png';

export default function CardInventory({handler, user}) {
const [inventoryContainer, setinventoryContainer] = useState([])
debugger;
const [items, setItems] = useState(user.currentUser.inventory);

const handleOnClick = (item) => {
    setTimeout(() => {
        handler.handleInventoryClick(item);
    }, 1200);
};

useEffect(() => {
    const tempItems = [];
    for (let i = 0; i < 16; i++) {
        if (items[i]) {
            const item = items[i];
            tempItems.push(
                <button key={i} style={{backgroundImage: `url(${items[i].img})`}}  onClick={() => handleOnClick({item})} className="Item">
                    <span>{items[i].count}</span>
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
        </div>
    )
}
