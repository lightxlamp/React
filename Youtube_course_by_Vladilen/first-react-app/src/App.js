import React from 'react';
import ToDoList from './todo/ToDoList'

function App() {
  const todos = [
    {id: 1, completed: false, title: 'Complete React tutorial'},
    {id: 2, completed: true, title: 'Feed Cat'},
    {id: 3, completed: false, title: 'Watch Next.JS tutorial'}
  ]

  return (
    <div className="wrapper">
      <h1>The First React App</h1>
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
