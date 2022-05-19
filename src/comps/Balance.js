import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


const Balance = () => {

    // Destructing och plockar ut transactions.
    // Detta är lika med state.transactions.
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc,item) => (acc += item), 0).toFixed(2);


    return(
        <>
            <h4>Ditt Saldo</h4>
            <h1>{total}SEK</h1>
        </>
    );
};

export default Balance;