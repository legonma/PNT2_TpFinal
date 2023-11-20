import React from "react";
import './CardHistory.css';
import { useEffect } from "react";
import { useState } from "react";

export default function CardHistory({history, handler}) {
    const [showParrot, setShowParrot] = useState('Parrot');
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


const speech = window.speechSynthesis;
const msg = new SpeechSynthesisUtterance()
    const speachSynt = () => {
        msg.lang = 'es-ES';
        msg.text = history.text;
        speech.cancel();
        setTimeout(() => {
            speech.speak(msg)
        }, 1200);
    }

    const handlerSpeekAudio = () => {
        if (history.audio) {
            handler.handlerAudio(history.audio);  
        } else {
            speachSynt();
        }
        setShowParrot('ParrotHidden');
        setTimeout(() => {
            setShowParrot('Parrot')
        }, 22000);  
    }

    return (
        <div className='CardHistory'>
            <div className='Content'>
                <h2>{history.title}</h2>
                <p>{history.text}</p>
            </div>
            <button className={showParrot} title='Read a card' onClick={handlerSpeekAudio}></button>
        </div>
    )
}
