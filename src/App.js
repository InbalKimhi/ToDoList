import './App.css';
import { ToDoApp } from './components/ToDoApp';
import { useRef, useState } from 'react';


function App() {
  const [ namesList, setNamesList ] = useState([]);
  const inputRef = useRef(null)
  const userNameRef = useRef(null)
  const passwordRef = useRef(null)
  let [user,setUser] = useState({username: null, password: null})

  function addName(name) {
    setNamesList([...namesList,name])
    inputRef.current.value = '';

  }

  function HandleOnClick(){
  if(!inputRef.current.value)return;
    addName(inputRef.current.value)
  }

  function enterUser(){
    if(!userNameRef.current.value && !passwordRef.current.value )return;
    const newUser = {username: userNameRef.current.value , password: passwordRef.current.value};
    setUser(newUser);
  }

  return (
      <>
      {user.username && user.password ? (
            <>
            <input type="text" ref={inputRef} key='title' />
            <button onClick={HandleOnClick}>ADD LIST</button>

            {namesList.map(name => <ToDoApp appName={name} key={name}/>)}
            </>
        ) : (
            <>
              <input type="text" ref={userNameRef} placeholder={'username'} key='username'/>
              <input type="password" ref={passwordRef} placeholder={'password'} key='password'/>
              <button onClick={enterUser}>sign in</button>
            </>
        )}
      </>
  )
}

export default App;
