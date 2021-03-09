import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { transactionType } from '../types/types'
import { Transaction } from '../components/Transaction';

//*Initial State
const initialState:any = {
    transactions: []
}

//*Create context
export const GlobalContext = createContext(initialState);

//*Provider Component
export const GlobalProvider = ({ children }:any) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //*Actions
    function deleteTransaction(id:any) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }



    function addTransaction(transaction:any) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }


    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);

}
