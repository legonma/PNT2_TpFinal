import React from "react";
import { useContext } from "react";
import { CardContext } from '../Cards/Context/CardContext';
import './Header.css';

export default function Header ({handleAnswerClick}) {
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
                <button className="loginButton" onClick={() => handleOnClick('Login')}>
                    <span>Login</span>
                </button>
            </nav>
        </div>
    );
}
