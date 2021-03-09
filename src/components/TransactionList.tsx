import React, {useContext} from 'react'
import { Transaction } from '../components/Transaction';
import{ GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {

    //destructuring an array
    const {transactions} = useContext(GlobalContext)
    //console.log(transactions)
    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map((transaction: { id: any; }) => (<Transaction key={transaction.id} transaction={transaction}/>))}
                 
            </ul>
        </div>
    )
}
