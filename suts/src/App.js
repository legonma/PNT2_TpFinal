import './App.css';
import CardContainer from './Components/Cards/CardContainer';
import Header from './Components/Header/Header';
import { useEffect, useState } from 'react';
import { CardProvider } from './Components/Cards/Context/CardContext'
import InventroyButton from './Components/Footer/InventoryButton';
import axios from 'axios';

function App() {
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [currentScene, setCurrentScene] = useState({});

    const scenes = async (escene) => {
        try {
            const res = await axios.get(`http://localhost:8080/api/game/escene/${escene}`);
            debugger;
            console.log(res)
            setCurrentScene(res.data);
            setIsDataLoaded(true);
        } catch(error) {
            console.log("Error al cargar la escena: " + error);
        }
    }

    useEffect(() => {
        scenes('E0');
    },[])
    
    const handleAnswerClick = async (nextScene) => {
        await scenes(nextScene);
    };

/*     const currentData = logicGame.scenes[currentScene]; */

    if (!isDataLoaded) {
        return (<div>Cargando</div>)
    }

    return (
        <div className='App'>
            <CardProvider>
                <Header handleAnswerClick={handleAnswerClick}/>
                <CardContainer scene={currentScene} handleAnswerClick={handleAnswerClick}/>
                <InventroyButton handleAnswerClick={handleAnswerClick}/>
            </CardProvider>
        </div>
    );
}

export default App;
