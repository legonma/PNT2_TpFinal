import React from "react";
import { useContext } from "react";
import { CardContext } from '../Cards/Context/CardContext';

export default function Header ({data, handleAnswerClick}) {
    const {flipCard} = useContext(CardContext)

    const handleOnClick = (nextScene) => {
        flipCard()
        setTimeout(() => {
            handleAnswerClick(nextScene);
        }, 1200);
    };

    return(
        <div className="Header">
            <nav className="Container">
                <button onClick={() => handleOnClick('Login')}>Login</button>
            </nav>
        </div>
    );
}
