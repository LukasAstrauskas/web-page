import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { addTask } from "../redux/slices/todoSlice";
// import { selectTodos } from "../redux/slices/todoSlice";

const Greet = () => {
  const [input, setInput] = useState("");
  const todos = useAppSelector((state) => state.tasks.taskList);
  const dispatch = useAppDispatch();
  const myList = ["Arr", "Buss"];
  return (
    <>
      <h1>Hash # Router Tests.</h1>
      <h2>Web-Page.</h2>
      <h2>Github.io page</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addTask(input));
          setInput("");
        }}
      >
        Add
      </button>
      <p>
        <nav>Todos:</nav>
      </p>
      {todos.map((todo) => (
        <p>
          {todo.task} {todo.completed ? "Done" : "Todo"}
        </p>
      ))}
      {/* <p> {todos[0].task} </p> */}
      <p> {todos.length} </p>
    </>
  );
};

export default Greet;
