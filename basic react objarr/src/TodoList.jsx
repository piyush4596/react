import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodos] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodos("");
  };
  let updateTodoValue = (event) => {
    setNewTodos(event.target.value);
  };
  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };
  //   let upperCaseAll = () => {
  //     setTodos((prevTodos) =>
  //       prevTodos.map((todo) => {
  //         return {
  //           ...todo,
  //           task: todo.task.toUpperCase(),
  //         };
  //       })
  //     );
  //   };
  let markAsDoneAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };
  //   let upperCaseOne = (id) =>
  //     setTodos((prevTodos) =>
  //       prevTodos.map((todo) => {
  //         if (todo.id == id) {
  //           return {
  //             ...todo,
  //             task: todo.task.toUpperCase(),
  //           };
  //         } else {
  //           return todo;
  //         }
  //       })
  //     );
  let markAsDone = (id) =>
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );

  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />{" "}
      <br />
      <button onClick={addNewTask}>Add task</button>
      <br />
      <br />
      <br />
      <hr />
      <h4>Tasks</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>
            &nbsp;
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
            {/* <button onClick={() => upperCaseOne(todo.id)}>Capital</button> */}
            <button onClick={() => markAsDone(todo.id)}>Mark as done</button>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={markAsDoneAll}>markAsDoneAll</button>
    </div>
  );
}
