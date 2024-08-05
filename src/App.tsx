import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoRes from "./components/TodoRes";
import { ITypes, ITypesAll, ITypesForm } from "./types/ITypes";
import TodoForm from "./components/TodoForm";
import TodoAll from "./components/TodoAll";

function App() {
  //! test 1
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ITypes[]>([]);

  const addFunc = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos((prev) => [
      ...prev,
      { todo: todo, id: todos.length + 1, isColor: false },
    ]);
    setTodo("");
  };
  //! test 2
  const [todosForm, setTodosForm] = useState<ITypesForm>({
    todo: "",
    id: 0,
    isColor: false,
  });
  const [allTodos, setAllTodos] = useState<ITypesAll[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (editId !== null) {
      setAllTodos(
        allTodos.map((td) =>
          td.id === editId ? { ...td, todo: todosForm.todo } : td
        )
      );
      setEditId(null);
    } else {
      setAllTodos((prev) => [
        ...prev,
        { todo: todosForm.todo, id: allTodos.length + 1, isColor: false },
      ]);
    }
    setTodosForm({ todo: "", id: 0, isColor: false });
  };

  const handleEdit = (id: number) => {
    const todoToEdit = allTodos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setTodosForm(todoToEdit);
      setEditId(id);
    }
  };

  return (
    <div>
      <TodoInput addFunc={addFunc} todo={todo} setTodo={setTodo} />
      <TodoRes todos={todos} setTodos={setTodos} />
      <TodoForm
        handleAdd={handleAdd}
        todosForm={todosForm}
        setTodosForm={setTodosForm}
      />
      <TodoAll
        allTodos={allTodos}
        setAllTodos={setAllTodos}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
