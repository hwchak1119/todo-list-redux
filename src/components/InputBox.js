import React, { useState } from "react";
import { Flex, Input, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function InputBox() {
  const [input, setInput] = useState("");

  const addTodo = () => {};

  return (
    <Flex>
      <Input
        variant='outline'
        placeholder='Add new task'
        onChange={(e) => setInput(e.target.value)}
        mr='12px'
      />
      <Button rightIcon={<AddIcon />} colorScheme='blue'>
        Add
      </Button>
    </Flex>
  );
}

export default InputBox;
