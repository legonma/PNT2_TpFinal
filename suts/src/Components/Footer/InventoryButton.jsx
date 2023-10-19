import React from "react";
import { useContext } from "react";
import { CardContext } from '../Cards/Context/CardContext';

export default function InventroyButton ({data, handleAnswerClick}) {
    const {flipCard} = useContext(CardContext)

    const handleOnClick = (nextScene) => {
        flipCard()
        setTimeout(() => {
            handleAnswerClick(nextScene);
        }, 1200);
    };

    return(
        <div className="Inventory">
            <div className="Container">
                <button onClick={() => handleOnClick('Inventory')}>Inventory</button>
            </div>
        </div>
    );
}
