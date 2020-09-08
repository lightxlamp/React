import React from 'react';
import ToDoList from './todo/ToDoList'

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Complete React tutorial'},
    {id: 2, completed: true, title: 'Feed Cat'},
    {id: 3, completed: false, title: 'Watch Next.JS tutorial'}
  ]);

  function toggleTodo(id) {
    console.log('toogle ID ', id);
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  return (
    <div className="wrapper">
      <h1>The First React App</h1>
      <ToDoList todos={todos} onToggle={ toggleTodo } />
    </div>
  );
}

export default App;
