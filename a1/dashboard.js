import React from 'react';
import history from './history';

function Dashboard() {
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <button
        type="button"
        onClick={(e) => {
        e.preventDefault();
        history.push('/')
        }}>Logout</button>
    </div>
  );
}

export default Dashboard;