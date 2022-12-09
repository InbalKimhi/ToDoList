import {TodosList} from "./TodosList";

export function Main({ items, onToggleAll, removeTodo,markAsCompleted,doubleClickEdit}) {

  function handleToggleAll(event) {
    onToggleAll(event.target.checked);
  }

  return (
      <section className="main">
        <input className="toggle-all"
               onChange={handleToggleAll}
               type="checkbox"/>
        <TodosList items={items} removeTodo={removeTodo} markAsCompleted={markAsCompleted} doubleClickEdit={doubleClickEdit}/>
      </section>
  );
}
