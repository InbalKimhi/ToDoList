
import {useEffect, useState} from "react";

export function UseToDo(){
    let [ todos, setTodos ] = useState([]);
    const [ noneCompletedItemsCount, setNoneCompletedItemsCount ] = useState(0);
  
    useEffect(() => {
        const uncompleted = todos.filter( todo => !todo.completed );
        setNoneCompletedItemsCount(uncompleted.length);
    }, [todos])
 
    const addTodo = (title) => {
      const newTodos = todos.concat([{ id: Date.now(), title, completed: false }])
      setTodos(newTodos);
    }
  
    const removeTodo = (todoToRemove) => {
      todos = todos.filter( currentTodo => currentTodo.id !== todoToRemove.id );
      setTodos(todos)
    }
  
    const markAsCompleted = (todoTask) => {
      todoTask.completed = !todoTask.completed;
      setTodos([...todos]);
    }
  
    const clearAllCompletedItems = () => {
      const newTodos = todos.filter( currentTodo => !currentTodo.completed );
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

    return{
        todos,
        noneCompletedItemsCount,
        addTodo,
        removeTodo,
        markAsCompleted,
        clearAllCompletedItems,
        toggleAllItems,
        doubleClickEdit
    }
}