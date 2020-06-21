import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';
export const TransactionHistory = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>
                HISTORY DETAILS
            </h3>
            <ul className="list">
                {transactions.map(transaction => 
                    (
                    <Transaction key={transaction.id} transaction={transaction} />
                    )
                )}
            </ul>
            <button className="delete-btn"
                    onClick={() => delTransaction(transaction.id)}>
                DELETE HISTORY
            </button>
        </div>
    )
}
