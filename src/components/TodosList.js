import {useState} from "react";

export function TodosList({ items, removeTodo,markAsCompleted,doubleClickEdit}) {
  let [ toggleEdit , setToggleEdit ] = useState([]);
  
  function HandleDoubleClick(item){
    toggleEdit = item.id;
    setToggleEdit(toggleEdit);
  }

  function handleKeyPress(e,item){
    if(e.key === 'Enter'){
      const text = e.target.value;
      toggleEdit = '';
      setToggleEdit(toggleEdit);
      doubleClickEdit(item,text)
    }
  }

  return (
      <ul className="todo-list">
        { items.map( item => (
            <li className={item.completed? 'completed':'' + ((toggleEdit===item.id)? 'editing': '')}>
              <div className="view">
                <input className="toggle"
                       type="checkbox"
                       checked={item.completed}
                       onChange={()=>{markAsCompleted(item)}}/>
                <label onDoubleClick={()=>{HandleDoubleClick(item)}}
                >{item.title}</label>
                <button className="destroy" onClick={()=>{removeTodo(item)}}/>
              </div>
              <input className="edit" key={item.title} defaultValue={item.title} onKeyPress={(e)=>{handleKeyPress(e,item)}}/>
            </li>
        ))}
      </ul>
  );
}
