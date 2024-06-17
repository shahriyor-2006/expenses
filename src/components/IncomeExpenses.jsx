// import "../components/IncomeExpenses.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function IncomeExpenses({initialTransactions}){
    const styles = {
        "display" : "flex",
        "justify-content":"space-between"
    }
    let sum = 0
    let minus = 0
    initialTransactions.map(transaction => {
        if(transaction.amount > 0){
            sum += transaction.amount
        }
    })
    initialTransactions.map(transaction => {
        if(transaction.amount < 0){
            minus += transaction.amount
        }
    })
    return(
        <>
        <div className="d-flex justify-content-between my-3" >
            <div>
                <h4 className='text-success'>Income</h4>
                <p className='text-success'>${sum}</p>
            </div>
            <div>
                <h4 className='text-danger'>Expenses</h4>
                <p className='text-danger'>-${Math.abs(minus)}</p>
            </div>
        </div>
            
        </>
    )
}