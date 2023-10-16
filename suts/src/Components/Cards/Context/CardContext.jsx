import React, {useState, createContext} from 'react';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cardFlipped, setCardFlipped] = useState('CardFlipped');
  const flipCard = () => {
    cardFlipped === 'Card' ? setCardFlipped('CardFlipped') : setCardFlipped('Card');
  }

  return (
    <CardContext.Provider value={{ cardFlipped, flipCard, handleCardFlip}}>
      {children}
    </CardContext.Provider>
  );
};
