import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todoActions";
import { v4 as uuid } from "uuid";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: uuid(),
        todo: todo,
      })
    );
    setTodo("");
  };
  return (
    <div className="todo__input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </form>
    </div>
  );
};

export default TodoInput;
