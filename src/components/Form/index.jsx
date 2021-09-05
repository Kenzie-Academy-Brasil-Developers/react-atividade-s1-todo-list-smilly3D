import { useState } from "react";

const Form = ({ addTodo }) => {
  const [todoInput, setTodoInput] = useState("");

  return (
    <>
      <input
        type="text"
        value={todoInput}
        onChange={(event) => setTodoInput(event.target.value)}
      />
      <button onClick={() => addTodo(todoInput)}> Adicionar</button>
    </>
  );
};

export default Form;
