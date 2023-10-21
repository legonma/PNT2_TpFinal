import './App.css';
import CardContainer from './Components/Cards/CardContainer';
import Header from './Components/Header/Header';
import logicGame from './Data/logicGame'
import { useState } from 'react';
import { CardProvider } from './Components/Cards/Context/CardContext'
import { CardNavBarProvider } from './Components/Cards/Context/CardNavBarProvider';
import InventroyButton from './Components/Footer/InventoryButton';

function App() {
    const [currentScene, setCurrentScene] = useState('E0')

    const handleAnswerClick = (nextScene) => {
        setCurrentScene(nextScene);
    };

    const currentData = logicGame.scenes[currentScene];

    return (
        <div className='App'>
            <CardProvider>
                <Header handleAnswerClick={handleAnswerClick}/>
                <CardContainer scene={currentScene} data={currentData} handleAnswerClick={handleAnswerClick}/>
                <InventroyButton handleAnswerClick={handleAnswerClick}/>
            </CardProvider>
        </div>
    );
}

export default App;
