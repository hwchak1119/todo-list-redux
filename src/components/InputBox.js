import React, { useState } from "react";
import { Flex, Input, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";

function InputBox() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
  };

  return (
    <Flex>
      <Input
        variant='outline'
        placeholder='Add new task'
        onChange={(e) => setInput(e.target.value)}
        mr='12px'
      />
      <Button rightIcon={<AddIcon />} colorScheme='blue' onClick={addTodo}>
        Add
      </Button>
    </Flex>
  );
}

export default InputBox;
