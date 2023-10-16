import React from "react";
import './CardAnswer.css'

export default function CardAnswer({answers, handler}) {

    const handleOnClick = (nextScene) => {
        setTimeout(() => {
            handler.handleAnswerClick(nextScene);
        }, 1000);
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
