import React from "react";
import { Box, Text, Checkbox } from "@chakra-ui/react";

function TodoItem({ name, done, id }) {
  const handleCheck = () => {};

  return (
    <Box>
      <Checkbox isChecked={done} onChange={handleCheck}>
        HI
      </Checkbox>
      <Text>{name}</Text>
    </Box>
  );
}

export default TodoItem;
