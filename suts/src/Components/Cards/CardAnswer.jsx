import React from "react";

export default function CardAnswer({answers, handler}) {

    const handleOnClick = (nextScene) => {
        setTimeout(() => {
            handler.handleAnswerClick(nextScene);
        }, 1000);
    };


    return (
        <div className="CardAnswer">
            <ul>
                {answers.map((aswr, index) => (
                    <li key={index}>
                        <button onClick={() => handleOnClick(aswr.next)}>{aswr.text}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
