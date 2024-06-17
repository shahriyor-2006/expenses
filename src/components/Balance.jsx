import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Balance({initialTransactions, isDarkMode}){
    let sum = `$${initialTransactions.reduce((acc, transaction) => acc + transaction.amount, 0)}`
    
    return(
        <>
            <h2 className={`display-4 ${isDarkMode ? "text-light" : "text-dark"}`}>Expense tracker</h2>

            <h4 className={`small ${isDarkMode ? "text-light" : "text-dark"}`}>Your balance</h4>
            <h1 className={`${isDarkMode ? "text-light" : "text-dark"}`}>{sum}</h1>
        </>
    )
}