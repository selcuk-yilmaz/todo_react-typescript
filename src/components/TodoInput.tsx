import React from "react"

interface TodoInputProps {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  addFunc: (e:React.FormEvent)=> void

}

const TodoInput: React.FC<TodoInputProps> = ({ todo, setTodo, addFunc }) => {

  return (
    <form onSubmit={(e) => addFunc(e)}>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="write a duty"
      />
      <button type="submit">Add</button>
      {/* <button type="submit" onClick={() => updateFunc(todo)}>
        Update
      </button> */}
    </form>
  );
};

export default TodoInput