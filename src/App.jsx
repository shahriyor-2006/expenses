import Balance from "./components/Balance"
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import './App.css'
import transactions from "./transactions"
import "bootstrap-icons/font/bootstrap-icons.css"
import { useState } from 'react'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [initialTransactions, setInitialTransactions] = useState(transactions)
  if(isDarkMode){
    document.body.style.background = "black"
  }else{
    document.body.style.background = "white"

  }
  function changeMode(){
    setIsDarkMode(!isDarkMode)
  }
  return (
    <>
    <i className={`${isDarkMode ? "bi bi-sun-fill" : "bi bi-moon-fill"}`} onClick={changeMode}></i>
      <div className="">

          <Balance initialTransactions={initialTransactions} isDarkMode={isDarkMode}/>

        <IncomeExpenses initialTransactions={initialTransactions}/>
        <TransactionList initialTransactions={initialTransactions} isDarkMode={isDarkMode}/>
        <AddTransaction initialTransactions={initialTransactions} setInitialTransactions={setInitialTransactions} isDarkMode={isDarkMode}/>
      </div>
    
    
      
    </>
  )
}

export default App
