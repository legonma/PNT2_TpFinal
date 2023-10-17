import React from "react";
import { useContext } from "react";
import { CardContext } from './Context/CardContext';
import './CardLogin.css'

export default function CardLogin({login}) {
    // --- Si es que necesito dar vuelta la carta uso context. por ahora no se que carajos voy a hacer aca
    //const {flipCard} = useContext(CardContext)

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
                <form onSubmit={handleOnClick}>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="text" name="uname" required />
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="pass" required />
                    </div>
                    <div className="button-container">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}
