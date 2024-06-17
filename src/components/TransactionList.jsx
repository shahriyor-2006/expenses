import 'bootstrap/dist/css/bootstrap.min.css';
export default function TransactionList({ initialTransactions, isDarkMode }) {
    if (!initialTransactions) {
        return;
    }
    else{
        return (
            <>
                <h3 className={` ${isDarkMode ? "text-light" : "text-dark"}`}>History</h3>
                <ul>
                    {initialTransactions.map(transaction => (
                        <li key={transaction.id} className={`d-flex justify-content-between ${isDarkMode ? "text-light" : "text-dark"}`}>
                            {transaction.text}
                            {transaction.amount > 0 ? (<span className='text-success'>${transaction.amount}</span>) : (<span className='text-danger'>-${Math.abs(transaction.amount)}</span>)} 
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}
