import './App.css';
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Footer} from "./components/Footer";
import {useEffect, useState} from "react";



function App() {
  let [ todos, setTodos ] = useState([]);
  const [ noneCompletedItemsCount, setNoneCompletedItemsCount ] = useState(0);

  useEffect(() => {
      const uncompleted = todos.filter( todo => !todo.completed );
      setNoneCompletedItemsCount(uncompleted.length);
  }, [todos])

  const appTitle = 'TodosApp';


  const addTodo = (title) => {
    const newTodos = todos.concat([{ id: Date.now(), title, completed: false }])
    setTodos(newTodos);
  }

  const removeTodo = (todoToRemove) => {
    todos = todos.filter( currentTodo => currentTodo.id !== todoToRemove.id );
    console.log(todos);
    setTodos(todos)
  }

  const markAsCompleted = (todoTask) => {
    todoTask.completed = !todoTask.completed;
    setTodos([...todos]);
  }

  const clearAllCompletedItems = () => {
    const newTodos = todos.filter( currentTodo => !currentTodo.completed );
    console.log(newTodos);
    setTodos(newTodos)
  }

  const toggleAllItems = (checkedValue) => {
    const newTodos = todos.map( todo => ({ ...todo, completed: checkedValue }));
    console.log(newTodos);
    setTodos(newTodos)
  }

  function doubleClickEdit(item,title){
    item.title = title;
    setTodos([...todos])
  }

  return (
      <section className="todoapp">
        <Header title={appTitle}
                onAddItem={addTodo}
                text="What needs to be done?"  />
        <Main items={todos}
              onToggleAll={toggleAllItems}
              removeTodo={removeTodo}
              markAsCompleted={markAsCompleted}
              doubleClickEdit={doubleClickEdit}
        />
        <Footer
            itemLeftCount={noneCompletedItemsCount}
            onClearCompleted={clearAllCompletedItems}/>
      </section>
  )
}

export default App;
