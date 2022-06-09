import React, { useState, useEffect } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
let dummyExpense = [];
const App = () => {
  const [expenses, setExpenses] = useState(dummyExpense);
  const fetchData = () => {
    fetch('https://techgun.website/sample/api/read.php')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setExpenses(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addExpenseHandler = (expense) => {
    fetch('https://techgun.website/sample/api/create.php', {
      method: 'POST',
      body: JSON.stringify(expense),
      headers: {
        'content-Type': 'application/json',
      },
    }).then((response) => {
      fetchData();
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
