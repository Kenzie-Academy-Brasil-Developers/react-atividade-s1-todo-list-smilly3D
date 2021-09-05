import "./App.css";
import { useState } from "react";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const handleTodo = (removeItem) => {
    const filteredItem = todoList.filter((item) => item !== removeItem);
    setTodoList(filteredItem);
  };

  return (
    <div className="App">
      <div className="App-header">
        <Form addTodo={addTodo} />
        <TodoList todoList={todoList} handleTodo={handleTodo} />
      </div>
    </div>
  );
}

export default App;
