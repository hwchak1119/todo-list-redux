import React from "react";
import { Box, Flex, Checkbox, Badge, Text } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { setCheck } from "../features/todoSlice";

function TodoItem({ name, status, done, id }) {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(setCheck(id));
  };

  const statusColor = (status) => {
    if (status === "done") {
      return "green";
    }
    if (status === "in progress") {
      return "blue";
    }
    if (status === "incomplete") {
      return "red";
    }
  };

  console.log(status);

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
          <Text as='b'>{name}</Text>
        </Checkbox>
        <Box>
          <Badge ml={4} colorScheme={statusColor(status)}>
            {status}
          </Badge>
        </Box>
      </Flex>
    </Box>
  );
}

export default TodoItem;
