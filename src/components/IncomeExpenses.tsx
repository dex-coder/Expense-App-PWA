import React, { useContext } from 'react'
import {GlobalContext} from "../context/GlobalState";

export const IncomeExpenses = () => {

    const {transactions} = useContext(GlobalContext);
   // console.log(transactions)

    const amounts = transactions.map((transaction: { amount: any; }) => transaction.amount)
    //console.log(amounts);

    const income = amounts
    .filter((item: number) => item > 0)
    .reduce((acc: any, item: any) => (acc += item), 0);

  const expense = (
    amounts.filter((item: number) => item < 0).reduce((acc: any, item: any) => (acc += item), 0) *
    -1
  );
    
    return (
        <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p id="money-plus" className="money plus">{income}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p id="money-minus" className="money minus">{expense}</p>
                </div>
            </div>
    )
}
