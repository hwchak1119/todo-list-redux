import React from "react";
import TodoList from "./components/TodoList.js";
import TodoModal from "./components/TodoModal.js";

function App() {
  return (
    <div className='App'>
      <TodoList />
      <TodoModal />
    </div>
  );
}

export default App;
