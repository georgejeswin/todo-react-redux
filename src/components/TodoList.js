import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteTodo, toggleTodo } from "../actions/todoActions";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  console.log(todos);
  return (
    <div className="todo__list">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.complete ? "complete" : null}>
            <input
              type="checkbox"
              className="input__check"
              checked={todo.complete}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            {todo.todo}
            <DeleteIcon onClick={() => dispatch(deleteTodo(todo.id))} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
