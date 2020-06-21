import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
export const AddTransaction = () => {
    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }

        addTransaction(newTransaction);

    }

    return (
        <div>
            <h3>ADD  TRANSACTION HERE !!!!!</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">
                        TEXT
                    </label>
                    <input  type="text" 
                            id="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Text Detail" 
                            required="required"
                    />
                </div>
                
                <div className="form-control">
                    <label htmlFor="amount">
                         Amount
                    </label>
                    <input  type="number" 
                            id="amount"
                            value={transactionAmount}
                            onChange={(e) => setTransactionAmount(e.target.value)}
                            placeholder="0.00"
                            required="required"
                    />
                </div>
                <button className="btn">ADD TRANSACTION</button>
            </form>
        </div>
    )
}