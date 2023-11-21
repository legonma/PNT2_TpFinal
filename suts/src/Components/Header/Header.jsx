import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { CardContext } from '../Cards/Context/CardContext';
import './Header.css';

export default function Header ({handleAnswerClick, isLoged, user}) {
    const {flipCard} = useContext(CardContext)

    
    const handleOnClick = (nextScene) => {
        // sacar el tru para conseguir un boton fijo
        if (isLoged) {
            flipCard()
            setTimeout(() => {
                handleAnswerClick({next: nextScene});
            }, 1200);    
        }
    };


    useEffect(() => {
        const loginButton = document.getElementsByClassName('LoginButton')[0];
        let userName = document.getElementsByClassName('UserName')[0]
    
        if (isLoged) {
            userName.innerHTML = user.currentUser.uname.split('@')[0];
            loginButton.style.top = '0px';
        } else {
            loginButton.style.top = '-80px';
        }
    },[isLoged, user])

    
    return(
        <div className="Header">
            <nav className="Container">
                <button title = "Logout" className="LoginButton" onClick={() => handleOnClick('Login')}>
                    <span className="Logout">Logout</span>
                    <span className="UserName"></span>
                </button>
            </nav>
        </div>
    );
}
