import React from 'react';
import './App.css';
import { requestPermission } from './firebaseServices/firebaseservice'
import { useEffect } from 'react';
import { Header } from './components/Header';
import { Balance } from "./components/Balance";
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';


function App() {
  useEffect(() => {
    requestPermission()
  }, [])
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
