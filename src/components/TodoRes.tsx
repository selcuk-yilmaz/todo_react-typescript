import { ITypes } from "../types/ITypes";

interface TodoResProps {
  todos: ITypes[];
  setTodos: React.Dispatch<React.SetStateAction<ITypes[]>>
}

const TodoRes: React.FC<TodoResProps> = ({ todos, setTodos }) => {
  const deleteFunc = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const complateFunc = (id: number) => {
    setTodos(
      todos.map((td) => (td.id == id ? { ...td, isColor: !td.isColor } : td))
    );
  };
  // const arrangeFunc = (oneTodo: ITypes) => {
  //   setTodo(oneTodo.todo);
  // };
  return (
    <div>
      {todos &&
        todos.map((oneTodo, i) => {
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
                <span onClick={() => complateFunc(oneTodo.id)}>complate</span>
                {/* <span onClick={() => arrangeFunc(oneTodo)}>arange</span> */}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TodoRes;
