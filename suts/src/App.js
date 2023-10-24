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

    const postUser = async (user) => {
        return await axios.post(`http://localhost:8080/api/users/`, {"uname": user.get('uname'), "pass": user.get('pass')});
    }

    const putUser = async (escene) => {
        const res = await axios.put(`http://localhost:8080/api/users/${currentUser.id}`, {escene: escene})
        setCurrentUser(res.data);
    }

    const addMessageError = () => {
        let msgError = document.getElementById('msgError');
        msgError.style.visibility = 'unset';
    }

    // ----------------------------SCENES -------------------
    const setScenes = async (escene) => {
        try {
            const res = await axios.get(`http://localhost:8080/api/game/escene/${escene}`);
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

    const handleAnswerClick = async (nextScene) => {
        await putUser(nextScene);
        await setScenes(nextScene);

    };

/*     const currentData = logicGame.scenes[currentScene]; */

    if (!isDataLoaded) {
        return (<div>Cargando</div>)
    }

    return (
        <div className='App'>
            <CardProvider>
                <Header handleAnswerClick={handleAnswerClick} isLoged = {isLoged}/>
                <CardContainer scene={currentScene} handleAnswerClick={handleAnswerClick} handleLoginClick={handleLoginClick} user={{currentUser, setCurrentUser}}/>
                <InventroyButton handleAnswerClick={handleAnswerClick}/>
            </CardProvider>
        </div>
    );
}

export default App;
