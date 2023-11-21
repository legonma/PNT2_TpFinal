import React from "react";
import './CardLogin.css'
import { useState } from "react";

export default function CardLogin({login, handler}) {
    // --- Si es que necesito dar vuelta la carta uso context. por ahora no se que carajos voy a hacer aca
    //const {flipCard} = useContext(CardContext)
    const [method , setMethod] = useState('get');
    const [text, setText] = useState('Click aca para registrar');

    const switchMethod = (evt) => {
        if (method === 'post') {
            setMethod('get');
            setText('Click aca para registrar');
        } else {
            setMethod('post');
            setText('Click aca para login');
        }
    }

    const handleOnClick = async (event) => {
        //catch user and pass
        event.preventDefault();
        const form = event.target;
        handler.handleLoginClick(form);
    };

    return (
        <div className="CardLogin">
            <div className="Content">
                <form onSubmit={handleOnClick} action="api/users" method={method} autoComplete='off'>
                    <div className="input-container">
                        <label htmlFor="username">UserEmail</label>
                        <input type="email" name="uname" required id="username" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password </label>
                        <input type="password" name="pass" required id="password"/>
                    </div>
                    <div className="button-container">
                        <button>submit</button>
                    </div>
                </form>
                <div id="msgError"></div>
                <div className="Miselan"></div>
                <button onClick = {() => switchMethod({method})} className="CrearCuenta">{text}</button>
            </div>
        </div>
    )
}
