import React, {useState, createContext} from 'react';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cardFlipped, setCardFlipped] = useState(false);
  const [item, setItem] = useState({});

  //const [currentUser, setCurrentUser] = useState({});
//fix mas adelante.. poner el user en el context
  const flipCard = () => {
    cardFlipped ? setCardFlipped(false) : setCardFlipped(true);
  }

  return (
    <CardContext.Provider value={{ cardFlipped, flipCard, item, setItem}}>
      {children}
    </CardContext.Provider>
  );
};
