import React from "react";
import { ITypesAll } from "../types/ITypes";

interface TodoResProps {
  allTodos: ITypesAll[];
  setAllTodos: React.Dispatch<React.SetStateAction<ITypesAll[]>>;
  handleEdit: (id: number) => void;
}

const TodoAll: React.FC<TodoResProps> = ({
  allTodos,
  setAllTodos,
  handleEdit,
}) => {
  const deleteFunc = (id: number) => {
    setAllTodos(allTodos.filter((todo) => todo.id !== id));
  };

  const complateFunc = (id: number) => {
    setAllTodos(
      allTodos.map((td) =>
        td.id === id ? { ...td, isColor: !td.isColor } : td
      )
    );
  };

  return (
    <div>
      {allTodos &&
        allTodos.map((oneTodo, i) => {
          const backgroundColor = oneTodo.isColor ? "green" : "purple";

          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "250px",
                height: "40px",
                margin: "10px",
                padding: "5px",
                background: backgroundColor,
                cursor: "pointer",
              }}
            >
              <div>{oneTodo.todo}</div>
              <div style={{ display: "flex", gap: "10px", cursor: "pointer" }}>
                <span onClick={() => deleteFunc(oneTodo.id)}>delete</span>
                <span onClick={() => complateFunc(oneTodo.id)}>complete</span>
                <span onClick={() => handleEdit(oneTodo.id)}>edit</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TodoAll;
