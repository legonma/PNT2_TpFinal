import React, {useState, createContext} from 'react';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cardFlipped, setCardFlipped] = useState(false);
  const flipCard = () => {
    cardFlipped ? setCardFlipped(false) : setCardFlipped(true);
  }

  return (
    <CardContext.Provider value={{ cardFlipped, flipCard}}>
      {children}
    </CardContext.Provider>
  );
};
