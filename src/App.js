import TodoList from "./TodoList";
import { useState, useRef } from "react";
import {v4 as uuidv4 } from "uuid";
import convertLikedDescription from "./linked";

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

  const descripition = "ああhttps://www.google.co.jp";

  /*const linked = (description) => {
    
    /*const regexp_url = /https?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+/g;
    const regexp_makeLink = (url) => {
        return '<a href="' + url + '">' + url + '</a>';
    }
    const addBlank = (descripition) => {
      return " " + descripition + " ";
    }
    const blankedDescription = description.replace(regexp_url, addBlank);
    // const linkedDescription = descripition.replace(regexp_url, regexp_makeLink)
    const linkedDescription = convertLikedDescription(descripition);
    //console.log(typeof linkedDescription);
    return (
      //<p dangerouslySetInnerHTML={{__html: linkedDescription}}></p>
      <>{linkedDescription}</>
    )
    ;
  }*/
  
    // const linkedDescription = convertLikedDescription(descripition);
  const linkedDescription = convertLikedDescription(descripition);
  return (
  <>
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    <input type="text" ref={todoNameRef} toggleTodo={toggleTodo} />
    <button onClick={handleAddTodo}>タスクを追加</button>
    <button onClick={handleClear} >完了したタスクの消去</button>
    <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
  </>
  );
}

export default App;
