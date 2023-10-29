import React from "react";
import './CardHistory.css';
import { useEffect } from "react";

export default function CardHistory({history}) {
/*     
    const speech = window.speechSynthesis;
    const msg = new SpeechSynthesisUtterance()
    useEffect(() => {

        msg.lang = 'es-ES';
        msg.text = history.text;
        speech.cancel();
        setTimeout(() => {
            speech.speak(msg)
        }, 1200);
    }, [msg])
*/

    return (
        <div className='CardHistory'>
            <div className='Content'>
                <h2>{history.title}</h2>
                <p>{history.text}</p>
            </div>
        </div>
    )
}
