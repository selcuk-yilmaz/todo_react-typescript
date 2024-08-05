import React from "react";
import { ITypesForm } from "../types/ITypes";

interface TodoInputForm {
  todosForm: ITypesForm;
  setTodosForm: React.Dispatch<React.SetStateAction<ITypesForm>>;
  handleAdd: (e: React.FormEvent) => void;
}

const TodoForm: React.FC<TodoInputForm> = ({
  todosForm,
  setTodosForm,
  handleAdd,
}) => {
  return (
    <form onSubmit={(e) => handleAdd(e)}>
      <input
        value={todosForm.todo}
        onChange={(e) => setTodosForm({ ...todosForm, todo: e.target.value })}
        type="text"
        placeholder="write a duty"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default TodoForm;
