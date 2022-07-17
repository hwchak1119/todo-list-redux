import React from "react";
import TodoItem from "./TodoItem";

const todoList = [
  {
    item: "angry",
    done: false,
    id: 14233,
  },
  {
    item: "man",
    done: false,
    id: 24533,
  },
];

function TodoList() {
  return (
    <div>
      {todoList.map((item) => (
        <TodoItem name={item.item} done={item.done} id={item.id} />
      ))}
    </div>
  );
}

export default TodoList;
