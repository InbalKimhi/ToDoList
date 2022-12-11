import {Header} from "./Header";
import {Main} from "./Main";
import {Footer} from "./Footer";
import { TodosList} from "./TodosList";
import { UseToDo } from "./UseToDo";
import {Listcontext} from "./Listcontext"

export function ToDoApp({appName}){
    const usetodo = UseToDo();
  return(
    <Listcontext.Provider value={usetodo}>
    <section className="todoapp">
       <Header title={appName} />
       <Main>
         <TodosList />
       </Main>
       <Footer/>
     </section>
   </Listcontext.Provider>
  )
   
}