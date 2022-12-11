
import {Listcontext} from "./Listcontext";
import { useContext } from "react";

export function Main({children}) {

  const {onToggleAll} = useContext(Listcontext)

  function handleToggleAll(event) {
    onToggleAll(event.target.checked);
  }

  return (
      <section className="main">
        <input className="toggle-all"
               onChange={handleToggleAll}
               type="checkbox"/>
        {children}
      </section>
  );
}
