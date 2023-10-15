import {useState} from "react";
import CardFactory from "./CardFactory";
import './CardBase.css';
import { useEffect } from "react";

export default function CardBase({data, delay}) {
    const [card, setCard] = useState('CardFlipped');

    const flipCard = () => {
        card === 'Card' ? setCard('CardFlipped') : setCard('Card');
    }   

    useEffect(() => {
        const timer = setTimeout(() => {
            flipCard();
        }, delay);

        return () => clearTimeout(timer);
    }, [delay])

    return (
        <div className = {card}>
            <div className ="CardFront">
                <CardFactory data={data}/>
            </div>
            <div className ="CardBack">
            </div>
        </div>
    )
}
