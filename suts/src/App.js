import './App.css';
import CardContainer from './Components/Cards/CardContainer';
import logicGame from './Data/logicGame'
import { useState } from 'react';

function App() {
    const [currentScene, setCurrentScene] = useState('E0')
    const handleAnswerClick = (nextScene) => {
        setCurrentScene(nextScene);
    };

    const currentData = logicGame.scenes[currentScene];

    return (
        <div className='App'>
            <CardContainer data={currentData} handleAnswerClick={handleAnswerClick}/>
        </div>
    );
}

export default App;
