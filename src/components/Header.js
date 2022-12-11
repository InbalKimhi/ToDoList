import { useContext } from "react";
import {Listcontext} from "./Listcontext"

export function Header({title}) {
  const {addTodo} = useContext(Listcontext)
  
  function handleTaskInput(event) {
    if(event.key === 'Enter') {
      addTodo(event.target.value);
      event.target.value = '';
    }
  }

  return (
      <header className="header">
        <h1>{title}</h1>
        <input className="new-todo"
               placeholder={"What needs to be done?"}
               onKeyUp={handleTaskInput}
               autoFocus/>
      </header>
  );
}
