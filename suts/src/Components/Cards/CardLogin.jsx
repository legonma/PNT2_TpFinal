import React from "react";
import { useContext } from "react";
import { CardContext } from './Context/CardContext';
import './CardLogin.css'
import { useState } from "react";

export default function CardLogin({login}) {
    // --- Si es que necesito dar vuelta la carta uso context. por ahora no se que carajos voy a hacer aca
    //const {flipCard} = useContext(CardContext)
    const [method , setMethod] = useState('get');
    const [text, setText] = useState('crear');

    const switchMethod = (evt) => {
        if (method === 'post') {
            setMethod('get');
            setText('crear');
        } else {
            setMethod('post');
            setText('login');
        }
    }

    const handleOnClick = (nextScene) => {
        // me imagino que cuando haga click en login y se acepte todo me va a la escena que estaba.
        // ver como implemente en Answer que creo que lo resolvi bien ahi.
    };

/* 
    -----Manejar submitted y errores.. podemos agregar un mensaje cuando hay error con un div. asi no abusamos del alert
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);   
*/

    return (
        <div className="CardLogin">
            <div className="Content">
                <form onSubmit={handleOnClick} action="api/users" method={method}>
                    <div className="input-container">
                        <label htmlFor="username">Username </label>
                        <input type="text" name="uname" required id="username" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password </label>
                        <input type="password" name="pass" required id="password"/>
                    </div>
                    <div className="button-container">
                        <input type="submit" />
                    </div>
                </form>
                <button onClick = {() => switchMethod({method})} className="CrearCuenta">{text} cuenta</button>
            </div>
        </div>
    )
}
