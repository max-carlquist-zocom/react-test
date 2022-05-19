
import './App.css';
import AddTransaction from './comps/AddTransaction';
import Balance from './comps/Balance';
import Header from './comps/Header';
import IncomeExpenses from './comps/IncomeExpenses';
import TransactionList from './comps/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
