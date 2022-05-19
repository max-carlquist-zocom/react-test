import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
    transactions: [
        { id: 1, text: 'Blommor', amount: -20 },
        { id: 2, text: 'Lön', amount: 300 },
        { id: 3, text: 'Bok', amount: -10 },
        { id: 4, text: 'Kamera', amount: 150 },
    ]
}

// Create Context - Gör att vi kan få tag på vår inital state i hela appen.
export const GlobalContext = createContext(initialState);

// Provider Component / Gör så man kan importera context i hela  appen.
export const GlobalProvider = ({ children }) => { // Global Provider är children är värdet i state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions make call to Reducer (AppReducer.js)
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION', // Lika med action.type
            payload: id // det vi ska ändra på.
        });
    };

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    };

    return (
        // children är HELA APPEN.
        <GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>
            {children}
        </GlobalContext.Provider>
    );
};