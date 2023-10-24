import './App.css';
import CardContainer from './Components/Cards/CardContainer';
import Header from './Components/Header/Header';
import { useEffect, useState } from 'react';
import { CardProvider } from './Components/Cards/Context/CardContext'
import InventroyButton from './Components/Footer/InventoryButton';
import axios from 'axios';

function App() {
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [isLoged, setIsLoged] = useState(false);
    const [currentScene, setCurrentScene] = useState({});
    const [currentUser, setCurrentUser] = useState({});

    const getUsers = async (user) => {
        try {
            const res = await axios.get(`http://localhost:8080/api/users/${user.get('uname')}`);
            const userData = res.data;
            setCurrentUser(userData);
            setScenes(userData.escene);
            setIsDataLoaded(true);// no se si sacar
        } catch(error) {
            console.log("Error al cargar la escena: " + error);
        }
    }

    const setUsersEscene = async (escene) => {
        const res = await axios.put(`http://localhost:8080/api/users/${currentUser.id}`, {escene: escene})
        setCurrentUser(res.data);
    }


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
    
    const handleLoginClick = async (user) => {
        setIsLoged(true);
        await getUsers(user);
    };

    const handleAnswerClick = async (nextScene) => {
        await setUsersEscene(nextScene);
        await setScenes(nextScene);

    };

/*     const currentData = logicGame.scenes[currentScene]; */

    if (!isDataLoaded) {
        return (<div>Cargando</div>)
    }

    return (
        <div className='App'>
            <CardProvider>
                <Header handleAnswerClick={handleAnswerClick}/>
                <CardContainer scene={currentScene} handleAnswerClick={handleAnswerClick} handleLoginClick={handleLoginClick} user={{currentUser, setCurrentUser}}/>
                <InventroyButton handleAnswerClick={handleAnswerClick}/>
            </CardProvider>
        </div>
    );
}

export default App;
