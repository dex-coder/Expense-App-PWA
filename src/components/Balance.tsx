import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";


export const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    //console.log(transactions)
    const amount =  transactions.map((transaction: { amount: any; }) => transaction.amount)
    const total = amount.reduce((acc:any, item:any) => (acc += item), 0).toFixed(2);
    console.log(total)
    return (
        <div>
            <h4>Your Balance</h4>
            <h1 id="balance">${total}</h1>
        </div>
    )
}
