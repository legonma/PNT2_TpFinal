import React from "react";
import { useContext } from "react";
import { CardContext } from '../Cards/Context/CardContext';
import './InventoryButton.css';

export default function InventroyButton ({data, handleAnswerClick}) {
    const {flipCard} = useContext(CardContext)

    const handleOnClick = (nextScene) => {
        flipCard()
        setTimeout(() => {
            handleAnswerClick(nextScene);
        }, 1200);
    };

    return(
        <div className="Footer">
            <div className="Container">
                <button className="Inventory" onClick={() => handleOnClick('Inventory')}>Inventory</button>
            </div>
        </div>
    );
}
