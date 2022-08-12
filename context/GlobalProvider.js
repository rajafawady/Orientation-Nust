import React from "react";
import { createContext, useReducer } from "react";
import AppReducer from './AppReducer'

const initialState = {
    click: false
}

export const ClickContext = createContext(initialState);

export const ClickProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    function setClick() {
        dispatch({
          type: 'SET_CLICK',
        })
      }
    return (
        <ClickContext.Provider value={{
            click:state.click, setClick
        }}>
            {children}
        </ClickContext.Provider>
    )

}