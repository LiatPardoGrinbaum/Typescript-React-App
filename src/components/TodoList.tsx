import React from "react";
import "./TodoList.css";

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const insertItems = () => {
    return props.items.map((todo) => {
      return (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => props.onDeleteTodo(todo.id)}>Delete</button>
          {/* also posobile: <button onClick={props.onDeleteTodo.bind(null,todo.id}>Delete</button> */}
        </li>
      );
    });
  };
  // useEffect(()=>{
  //   insertItems()
  // },[props.items])
  return <ul>{insertItems()}</ul>;
};

export default TodoList;
