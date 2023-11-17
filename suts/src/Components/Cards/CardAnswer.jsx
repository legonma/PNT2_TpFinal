import React from "react";
import { useContext } from "react";
import { CardContext } from './Context/CardContext';
import './CardAnswer.css';
import audioHoverButton from '../../Audio/audioHoverButton.mp3';

export default function CardAnswer({answers, handler, user}) {
    const {flipCard} = useContext(CardContext)
    const handleOnClick = (answr) => {
        if (!answr.noFlip) {
            flipCard()
        }
        setTimeout(() => {
            handler.handleAnswerClick(answr);
        }, 1200);
    };

    const playHoverSound = () => {
        const audio = new Audio(audioHoverButton)
        audio.play();
    }

    const hasItem = (itemId) => {
        if (!user.currentUser.inventory) {
          return false;
        }
        return user.currentUser.inventory.some((item) => item.id == itemId);
    };

    return (
        <div className="CardAnswer">
            <div className="Content">
                <div className="Miselan"></div>
                <ul>
                    {answers.map((aswr, index) => (
                        <li key={index}>
                            {
                            (aswr.needItem && !hasItem(aswr.needItem)) 
                            ? null 
                            : <button className="AnswerButton" onClick={() => handleOnClick(aswr)} onMouseEnter={playHoverSound}>
                                    <span className="AnswerText">{aswr.text}</span>
                                </button>
                            }
                        </li>
                    ))}
                </ul>
                <div className="Miselan"></div>
            </div>
            <button title="Tus cosas" className="ButtonInventory" onClick={() => handleOnClick({next:'Inventory'})}><span className="InventaryText">Inventario</span></button>
        </div>
    )
}
