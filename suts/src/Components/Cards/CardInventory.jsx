import React from "react";
import { useContext } from "react";
import { CardContext } from './Context/CardContext';
import './CardAnswer.css'

export default function CardInventory({handler}) {
    // --- Si es que necesito dar vuelta la carta uso context. por ahora no se que carajos voy a hacer aca
    //const {flipCard} = useContext(CardContext)

/*     const handleOnClick = (nextScene) => {
        // me imagino que cuando haga click en login y se acepte todo me va a la escena que estaba.
        // ver como implemente en Answer que creo que lo resolvi bien ahi.
    }; */

/* 
    -----Manejar submitted y errores.. podemos agregar un mensaje cuando hay error con un div. asi no abusamos del alert
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);   
*/

    return (
        <div className="CardInventory">
            <div className="Content">
                <div></div>
            </div>
        </div>
    )
}
