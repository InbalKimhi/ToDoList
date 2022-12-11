import {Listcontext} from "./Listcontext";
import { useContext } from "react";

export function Footer() {
  const {noneCompletedItemsCount,clearAllCompletedItems} = useContext(Listcontext)
  return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{noneCompletedItemsCount}</strong> items left</span>
        <button
            onClick={clearAllCompletedItems}
            className="clear-completed">Clear completed
        </button>
      </footer>
  );
}
