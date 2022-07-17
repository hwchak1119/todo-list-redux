import React from "react";
import TodoItem from "./TodoItem";
import { Box, VStack } from "@chakra-ui/react";

import { useSelector } from "react-redux";
import { selectTodoList } from "../features/todoSlice";

function TodoList() {
  const todoList = useSelector(selectTodoList);
  return (
    <Box p='3' borderWidth='1px' borderRadius='lg'>
      <VStack align='stretch'>
        {todoList.map((item) => (
          <TodoItem name={item.item} done={item.done} id={item.id} />
        ))}
      </VStack>
    </Box>
  );
}

export default TodoList;
