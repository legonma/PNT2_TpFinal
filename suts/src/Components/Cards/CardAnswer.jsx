import React from "react";

export default function CardAnswer({answers}) {

    return (
        <div className="CardAnswer">
            <ul>
                {answers.map((aswr, index) => (
                    <li key={index}>
                        <button>{aswr.text}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
