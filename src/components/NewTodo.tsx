import React, { useRef } from "react";
import "./NewTodo.css";
//also possible with an interface... :
type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null); //generic- <HTMLInputElement - one we store inside the ref
  const textAreaInputRef = useRef<HTMLTextAreaElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Title</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <div className="form-control">
        <label htmlFor="todo-text">Description</label>
        <textarea id="todo-textarea" rows={3} ref={textAreaInputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
