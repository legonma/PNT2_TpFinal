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
const [items, setItems] = useState(user.currentUser.inventory);

const handleOnClick = (item, key) => {
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
                <button key={i} id={i} style={{backgroundImage: `url(${items[i].img})`}}  onClick={() => handleOnClick({item}, i)} className="Item">
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
        </div>
    )
}
