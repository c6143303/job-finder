"use client"
import React, {createContext} from "react";
import Store from "./Store";

export const Context = createContext(Store)

interface IProvider {
    children: React.ReactNode
}
const Provider:React.FC<IProvider> = ({children}) => {
    return (
        <Context.Provider value={Store}>
            {children}
        </Context.Provider>
    )
}

export default Provider