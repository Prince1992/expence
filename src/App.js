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
    // <div>
    //   <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
    //   <Expenses item={expenses} />
    // </div>
    <div>
      <div className="table-container">
        <h1 className="heading">Resposive Table</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Start Date</th>
              <th>Start / End Time</th>
              <th>Batch Type</th>
              <th>Training Mode</th>
              <th>Batch Staus</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-lable="Start Date"> 1 Jan 2021</td>
              <td data-lable="Start / End Time"> 09:00-13:00 IST</td>
              <td data-lable="Batch Type"> Weekend</td>
              <td data-lable="Training Mode"> Online Traning</td>
              <td data-lable="Batch Staus"> Open</td>
              <td data-lable="#">
                <a href="#" className="btn">
                  Button-1
                </a>
                <a href="#" className="btn">
                  Button-2
                </a>
                <a href="#" className="btn">
                  Button-3
                </a>
                <a href="#" className="btn">
                  Button-4
                </a>
                <a href="#" className="btn">
                  Button-5
                </a>
              </td>
            </tr>
            <tr>
              <td data-lable="Start Date"> 1 Jan 2021</td>
              <td data-lable="Start / End Time"> 09:00-13:00 IST</td>
              <td data-lable="Batch Type"> Weekend</td>
              <td data-lable="Training Mode"> Online Traning</td>
              <td data-lable="Batch Staus"> Open</td>
              <td data-lable="#">
                <a href="#" className="btn">
                  Button-1
                </a>
                <a href="#" className="btn">
                  Button-2
                </a>
                <a href="#" className="btn">
                  Button-3
                </a>
                <a href="#" className="btn">
                  Button-4
                </a>
                <a href="#" className="btn">
                  Button-5
                </a>
              </td>
            </tr>
            <tr>
              <td data-lable="Start Date"> 1 Jan 2021</td>
              <td data-lable="Start / End Time"> 09:00-13:00 IST</td>
              <td data-lable="Batch Type"> Weekend</td>
              <td data-lable="Training Mode"> Online Traning</td>
              <td data-lable="Batch Staus"> Open</td>
              <td data-lable="#">
                <a href="#" className="btn">
                  Button-1
                </a>
                <a href="#" className="btn">
                  Button-2
                </a>
                <a href="#" className="btn">
                  Button-3
                </a>
                <a href="#" className="btn">
                  Button-4
                </a>
                <a href="#" className="btn">
                  Button-5
                </a>
              </td>
            </tr>
            <tr>
              <td data-lable="Start Date"> 1 Jan 2021</td>
              <td data-lable="Start / End Time"> 09:00-13:00 IST</td>
              <td data-lable="Batch Type"> Weekend</td>
              <td data-lable="Training Mode"> Online Traning</td>
              <td data-lable="Batch Staus"> Open</td>
              <td data-lable="#">
                <a href="#" className="btn">
                  Button-1
                </a>
                <a href="#" className="btn">
                  Button-2
                </a>
                <a href="#" className="btn">
                  Button-3
                </a>
                <a href="#" className="btn">
                  Button-4
                </a>
                <a href="#" className="btn">
                  Button-5
                </a>
              </td>
            </tr>
            <tr>
              <td data-lable="Start Date"> 1 Jan 2021</td>
              <td data-lable="Start / End Time"> 09:00-13:00 IST</td>
              <td data-lable="Batch Type"> Weekend</td>
              <td data-lable="Training Mode"> Online Traning</td>
              <td data-lable="Batch Staus"> Open</td>
              <td data-lable="#">
                <a href="#" className="btn">
                  Button-1
                </a>
                <a href="#" className="btn">
                  Button-2
                </a>
                <a href="#" className="btn">
                  Button-3
                </a>
                <a href="#" className="btn">
                  Button-4
                </a>
                <a href="#" className="btn">
                  Button-5
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
