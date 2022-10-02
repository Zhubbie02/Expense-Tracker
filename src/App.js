import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header'
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/expenseList';

function App() {
  const [expense, setExpense] = useState ([]);
  const [totalExpenses, setTotalExpenses] = useState (0);

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < expense.length; i++) {
      temp += parseInt(expense[i].amount);
    }

    setTotalExpenses(temp);
  }, [expense]);
  
  return (
    <div className="App">
      <Header totalExpenses={totalExpenses}/>
      <ExpenseForm expense ={expense} setExpense={setExpense}/>
      <ExpenseList expense ={expense} setExpense={setExpense}/>
    </div>
  );
}

export default App;
