import { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TransactionList from "./TransactionList";
export default function AddTransaction({initialTransactions, setInitialTransactions, isDarkMode}) {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        handleClick();
        localStorage.setItem("transaction", JSON.stringify([{
            id: initialTransactions.length + 1,
            text,
            amount: parseFloat(amount)}]))
    };
    

    function handleClick() {
        if (!text || !amount) return; // Prevent empty transactions
        const newTransaction = {
            id: initialTransactions.length + 1,
            text,
            amount: parseFloat(amount)
        };
        setInitialTransactions([...initialTransactions, newTransaction]);
        setText(""); // Clear the text input
        setAmount(""); // Clear the amount input
    }

    return (
        <>
            <TransactionList transactions={initialTransactions}/>

            <h3 className={` ${isDarkMode ? "text-light" : "text-dark"}`}>Add New Transaction</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="text" className={`form-label ${isDarkMode ? "text-light" : "text-dark"}`}>Text</label>
                <input
                    type="text"
                    id="text"
                    placeholder="Enter text..."
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    className="form-control"
                />
                <br />
                <label htmlFor="amount" className={`form-label ${isDarkMode ? "text-light" : "text-dark"}`}>Amount</label>
                <input
                    type="number"
                    id="amount"
                    placeholder="Amount..."
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="form-control"
                />
                <br />
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </>
    );
}
