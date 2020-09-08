import React from 'react';
import ToDoList from './todo/ToDoList'
import Context from './context'
import AddTodo from './todo/AddTodo';

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

  function deleteTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{ deleteTodo: deleteTodo

    }}>
    <div className="wrapper">
      <h1>"ToDo List" on React.JS</h1>
      {todos.length ? <ToDoList todos={todos} onToggle={ toggleTodo } /> : <p>No tasks yet</p>}
      <AddTodo/>
    </div>
    </Context.Provider>
  );
}

export default App;
