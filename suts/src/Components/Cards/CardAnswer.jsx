import React from "react";
import { useContext } from "react";
import { CardContext } from './Context/CardContext';
import './CardAnswer.css'

export default function CardAnswer({answers, handler}) {
    const {flipCard} = useContext(CardContext)

    const handleOnClick = (nextScene) => {
        flipCard()
        setTimeout(() => {
            handler.handleAnswerClick(nextScene);
        }, 2200);
    };

    return (
        <div className="CardAnswer">
            <div className="Content">
                <ul>
                    {answers.map((aswr, index) => (
                        <li key={index}>
                            <button onClick={() => handleOnClick(aswr.next)}>{aswr.text}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
