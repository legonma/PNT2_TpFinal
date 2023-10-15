import {useState} from "react";
import CardFactory from "./CardFactory";
import './CardBase.css';
import cardBaseImage from '../../Assets/baseCard.png'
import { useEffect } from "react";

export default function CardBase({data}) {
    const [card, setCard] = useState('CardFlipped');

    const flipCard = () => {
        card === 'Card' ? setCard('CardFlipped') : setCard('Card');
    }   

    useEffect(() => {
        const timer = setTimeout(() => {
            flipCard();
        }, 1000);

        return () => clearTimeout(timer);
    }, [])

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
