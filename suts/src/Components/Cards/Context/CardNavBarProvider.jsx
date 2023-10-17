import React from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";

export const CardNavContext = createContext();

export const CardNavBarProvider = ({children}) => {
    const [cardNav, setCardNav] = useState();

    const updateCardNav = (navBar) => {
        setCardNav(navBar);
    }

    return (
        <CardNavContext.Provider value = {{cardNav, updateCardNav}}>
            {children}
        </CardNavContext.Provider>
    )
}
