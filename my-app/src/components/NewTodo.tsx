import React, { useRef } from "react";

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null); //when the component gets rendered for the first time, the form input hasnt rendered yet so you're passing a dummy value
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (textInputRef.current != null && textInputRef.current.value != "") {
      const enteredText = textInputRef.current.value;
      props.onAddTodo(enteredText);
    } else alert("You must provide a new To Do!");
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text"> New Todo </label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add To Do</button>
    </form>
  );
};

export default NewTodo;
