import React from "react";
import { useContext } from "react";
import { CardContext } from './Context/CardContext';
import './CardAnswer.css';
import audioHoverButton from '../../Audio/audioHoverButton.mp3';

export default function CardAnswer({answers, handler}) {
    const {flipCard} = useContext(CardContext)

    const handleOnClick = (nextScene) => {
        flipCard()
        setTimeout(() => {
            handler.handleAnswerClick(nextScene);
        }, 1200);
    };

    const playHoverSound = () => {
        const audio = new Audio(audioHoverButton)
        audio.play();
    }

    return (
        <div className="CardAnswer">
            <div className="Content">
                <div className="Miselan"></div>
                <ul>
                    {answers.map((aswr, index) => (
                        <li key={index}>
                            <button className="AnswerButton" onClick={() => handleOnClick(aswr.next)} onMouseEnter={playHoverSound}>
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
