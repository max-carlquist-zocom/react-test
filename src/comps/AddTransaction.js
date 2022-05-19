import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid4 } from "uuid";

const AddTransaction = () => {
    const [ text, setText ] = useState('');
    const [ amount, setAmount ] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = event => {
        event.preventDefault();

        const newTransacrtion = {
            id: uuid4(), // ger en heltal mellan 0 och 1 million
            text,
            amount: +amount
        };

        addTransaction(newTransacrtion);
    };

    return(
        <>
            <h3>Lägg till ny Utgift</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type={'text'} value={text} onChange={(e) => setText(e.target.value)} placeholder="Vad köpte du?" />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Belopp <br />
                        (negativ - utgift, positiv - inkomst)
                    </label>
                    <input type={'number'} value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" />
                </div>
                <button className="btn">Lägg till utgift</button>
            </form>
        
        </>
    );
};

export default AddTransaction;