const TodoList = ({ todoList, handleTodo }) => {
  return (
    <ul>
      {todoList.map((todo, index) => (
        <li key={index}>
          {todo + " -- "}
          <button onClick={() => handleTodo(todo)}>Limpar</button>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
