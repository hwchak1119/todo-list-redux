import React from "react";
import { Box, Flex, Checkbox } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { setCheck } from "../features/todoSlice";

function TodoItem({ name, done, id }) {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(setCheck(id));
  };

  return (
    <Box
      p='12px'
      borderWidth='1px'
      borderRadius='lg'
      cursor='pointer'
      onClick={handleCheck}
    >
      <Flex>
        <Checkbox size='lg' spacing='16px' isChecked={done}>
          {name}
        </Checkbox>
      </Flex>
    </Box>
  );
}

export default TodoItem;
