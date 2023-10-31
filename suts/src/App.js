import './App.css';
import CardContainer from './Components/Cards/CardContainer';
import Header from './Components/Header/Header';
import { useEffect, useState } from 'react';
import { CardProvider } from './Components/Cards/Context/CardContext'
import InventroyButton from './Components/Footer/InventoryButton';
import axios from 'axios';
import FormData from 'form-data';

function App() {
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [isLoged, setIsLoged] = useState(false);
    const [currentScene, setCurrentScene] = useState({});
    const [currentUser, setCurrentUser] = useState({});
    const [pickedItems, setPickedItems] = useState([]);

    // ----------------------USERS------------------------------
    const getOrUpdateUser = async (form) => {
        try {
            const user = new FormData(form);
            let res = {};
            if (form.method === 'get') {
                res = await getUser(user);
            } else {
                res = await postUser(user);                
            }
            const userData = res.data;
            if (!Object.keys(userData).length) {
                addMessageError();
                return;
            }
            setCurrentUser(userData);
            setScenes(userData.escene);
            setIsDataLoaded(true);// no se si sacar
        } catch(error) {
            console.log("Error al cargar la escena: " + error);
        }
    }
 
    const getUser = async (user) => {
        return await axios.get(`http://localhost:8080/api/users/${user.get('uname')}`);
    }

    const getItem = async (id) => {
        return await axios.get(`http://localhost:8080/api/items/${id}`);
    }

    const postUser = async (user) => {
        return await axios.post(`http://localhost:8080/api/users/`, {"uname": user.get('uname'), "pass": user.get('pass')});
    }

    const putUser = async (escene, inventory) => {
        const res = await axios.put(`http://localhost:8080/api/users/${currentUser.id}`, {escene: escene, inventory: inventory})
        setCurrentUser(res.data);
    }

    const deletUser = async () => {
        await axios.delete(`http://localhost:8080/api/users/${currentUser.id}`);
    }

    const addMessageError = () => {
        let msgError = document.getElementById('msgError');
        msgError.style.visibility = 'unset';
    }

    // ----------------------------SCENES -------------------
    const setScenes = async (escene) => {
        try {
            let newEscene = escene;
            if (escene === "Dead") {
                //podriamos tener una carta de muerte! donde no podes salir y solo un boton de eliminar que elimina
                newEscene = "Login";
            }
            const res = await axios.get(`http://localhost:8080/api/game/escene/${newEscene}`);
            setCurrentScene(res.data);
            setIsDataLoaded(true);
        } catch(error) {
            console.log("Error al cargar la escena: " + error);
        }
    }

    useEffect(() => {
        setScenes('Login');
    },[])
    
    const handleLoginClick = async (form) => {
        setIsLoged(true);
        getOrUpdateUser(form);
    };

    const handleAnswerClick = async (answr) => {
        const {next, itemId} = answr;
        let inventory;
        if (itemId) {
            let item = await getItem(itemId);
            inventory = [item.data];
            setPickedItems(prev => [...prev, itemId]);
        };
        // viene una escena.. tipo E0
        // NO HACE PUT tambien puede venir Inventario.. y de ser asi tiene que ir con setScenes. no hacer un put en escene y tampoco en invent
        // de ser BackToEscene pasa lo mismo, no tiene que hacer un put en escene pero si en invent
        // CurrentUser.escene es la ultima escena guardada en el user
        if (next === 'Inventory') {
            await setScenes(next);
        } else if (next === 'BackToEscene') {
            await putUser(currentUser.escene, inventory);
            await setScenes(currentUser.escene);    
        } else if (next === "Dead") {
            await deletUser();
            await setScenes("Login");
        } else {
            await putUser(next, inventory);
            await setScenes(next);
        }
    };

/*     const currentData = logicGame.scenes[currentScene]; */

    if (!isDataLoaded) {
        return (<div>Cargando</div>)
    }

    return (
        <div className='App'>
            <CardProvider>
                <Header handleAnswerClick={handleAnswerClick} isLoged = {isLoged}/>
                <CardContainer scene={currentScene} handleAnswerClick={handleAnswerClick} handleLoginClick={handleLoginClick} user={{currentUser, setCurrentUser}} picked = {pickedItems}/>
                {/* <InventroyButton handleAnswerClick={handleAnswerClick}/> */}
            </CardProvider>
        </div>
    );
}

export default App;
