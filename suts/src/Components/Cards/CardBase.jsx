import CardFactory from "./CardFactory";
import './CardBase.css';
import { useContext, useEffect, useState } from "react";
import { CardContext } from './Context/CardContext';
import audioHoverButton from '../../Audio/flipBack.mp3';

export default function CardBase({data, delay, noFlip}) {
    const {cardFlipped, flipCard} = useContext(CardContext);
    const [card, setCard] = useState('CardFlipped');

    const flipBack = () => {
        setCard('CardFlipped');
    }

    const flipFront = () => {
        if (!noFlip) {
            setCard('Card');
             if (data.type === 'history' || data.type === 'image' || data.type === 'answers') {
                const audio = new Audio(audioHoverButton);
                audio.play();
            }
        }
    }
        
    useEffect(() => {
        const timer = setTimeout(() => {
            flipBack();
            const innerTimer = setTimeout(() => {
                flipFront();
            }, delay + 500);
            return () => clearTimeout(innerTimer);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay, cardFlipped]);

    return (
        <div className={card}>
            <div className="CardFront">
                <CardFactory data={data}/>
            </div>
            <div className="CardBack">
            </div>
        </div>
    )
}
