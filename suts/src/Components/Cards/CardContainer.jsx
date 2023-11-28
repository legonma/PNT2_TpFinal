import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import CardBase from "./CardBase";
import './CardContainer.css';
import { CardContext } from "./Context/CardContext";

export default function CardContainer({scene, handleAnswerClick, handleLoginClick, user, picked}) {
    const {history, image, answers, login, inventory} = scene.content;
    const [cardContainer, setCardContainer] = useState([]);
    const {item, setItem} = useContext(CardContext);

    const speech = window.speechSynthesis;
    const msg = new SpeechSynthesisUtterance()
    msg.lang = 'es-ES';
    const [audioH, setAudioH] = useState(null);

    const handlerAudio = (audio) => {
        if (audioH) {
            audioH.pause();
            audioH.currentTime = 0;
        }
        setAudioH(new Audio(audio));
        playAudioHistory(audio);
//        readToMe()
    }
    
/*     const readToMe = ()=> {
        let voice = speech.getVoices();
        msg.voice = voice[4];
        msg.text = history.text;
        speech.speak(msg)
    } */

    const playAudioHistory = (audio) => {
        const audioHistory = new Audio(audio);
        audioHistory.play();
        setAudioH(audioHistory);
    }

    const handleInventoryClick = (item) => {
        setItem(item)
    }

    useEffect(() => {
        if (audioH) {
            audioH.pause();
            audioH.currentTime = 0;
        }
    }, [scene]);

    useEffect(() => {
        speech.cancel();
        if (scene.cards.charAt() === 'E') {
            let filteredAnswers = answers.filter(answr => !picked.includes(answr.itemId));
            setCardContainer([
                <CardBase key='history' data={{type: 'history', history, handlerAudio: {handlerAudio}}} delay={500}/>,
                <CardBase key='image' data={{type: 'image', image}} delay={750}/>,
                <CardBase key='answers' data={{type: 'answers', filteredAnswers, handler: {handleAnswerClick}, user}} delay={1000}/>
            ])
        } else if (scene.cards === 'Login') {
            setCardContainer([
                <CardBase key='loginLeft' data={{type: 'default'}} delay={500} noFlip={true}/>,
                <CardBase key='login' data={{type: 'login', login, handlerLogin: {handleLoginClick}}} delay={750}/>,
                <CardBase key='loginRight' data={{type: 'default'}} delay={1000} noFlip={true}/>
            ])
        } else if (scene.cards === 'Inventory') {
            setCardContainer([
                <CardBase key='inventory' data={{type: 'inventory', inventory, handlerInvent: {handleInventoryClick}, handler: {handleAnswerClick}, user:user}} delay={500}/>,
                <CardBase key='inventoryDescription' data={{type: 'inventoryDescription'}} delay={500}/>,
                <CardBase key='inventoryRight' data={{type: 'default'}} delay={0} noFlip={true}/>
            ])
        }
    }, [handleLoginClick, handleAnswerClick, item, history, image, answers, user])

    return(
        <div className="CardContainer">{cardContainer}
        </div>
    )
}
