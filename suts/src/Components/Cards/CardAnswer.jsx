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
        }, 1200);
    };

    return (
        <div className="CardAnswer">
            <div className="Content">
                <div className="Miselan"></div>
                <ul>
                    {answers.map((aswr, index) => (
                        <li key={index}>
                            <button className="AnswerButton" onClick={() => handleOnClick(aswr.next)}>
                                <span className="AnswerText">{aswr.text}</span>
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="Miselan"></div>
            </div>
        </div>
    )
}
