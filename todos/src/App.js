import TodoList from "./TodoList";
import { useState, useRef } from "react";
import {v4 as uuidv4 } from "uuid";
import { Button, Input } from "@mui/material";

function App() {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    //  タスクを追加する
    const name = todoNameRef.current.value;
    if (name == "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }
  return (
  <>
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    <Input type="text" ref={todoNameRef} toggleTodo={toggleTodo} />
    <Button variant="outlined" onClick={handleAddTodo}>タスクを追加</Button>
    <Button variant="outlined" onClick={handleClear} >完了したタスクの消去</Button>
    <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
  </>
  );
}

export default App;
