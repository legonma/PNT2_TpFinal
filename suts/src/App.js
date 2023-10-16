import './App.css';
import CardContainer from './Components/Cards/CardContainer';
import logicGame from './Data/logicGame'
import { useState } from 'react';
import { CardProvider } from './Components/Cards/Context/CardContext'

function App() {
    const [currentScene, setCurrentScene] = useState('E0')
    const handleAnswerClick = (nextScene) => {
        setCurrentScene(nextScene);
    };

    const currentData = logicGame.scenes[currentScene];

    return (
        <div className='App'>
            <CardProvider>
                <CardContainer data={currentData} handleAnswerClick={handleAnswerClick}/>
            </CardProvider>
        </div>
    );
}

export default App;
