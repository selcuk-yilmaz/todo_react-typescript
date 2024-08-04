import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoRes from "./components/TodoRes";
import { ITypes } from "./types/ITypes";

function App() {
  const [todo, setTodo] = useState<string>("")
const [todos, setTodos] = useState<ITypes[]>([]);

const addFunc =(e: React.FormEvent) =>{
  e.preventDefault();
  setTodos(prev =>([...prev,{todo:todo, id:todos.length+1, isColor:false}]));
  setTodo('');
}
console.log("todos", todos);
  return (
    <div>
      <TodoInput addFunc={addFunc} todo={todo} setTodo={setTodo} />
      <TodoRes />
    </div>
  );
}

export default App;
