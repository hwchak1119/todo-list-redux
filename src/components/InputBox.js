import React from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

function InputBox({ handleInputChange, handleStatusChange }) {
  return (
    <VStack spacing={4} align='stretch'>
      <FormControl mt={2}>
        <FormLabel>Task Name</FormLabel>
        <Input
          variant='outline'
          placeholder='Add new task'
          onChange={(e) => handleInputChange(e.target.value)}
          mr='12px'
        />
      </FormControl>
      <FormControl>
        <FormLabel>Status</FormLabel>
        <Select
          placeholder='None'
          onChange={(e) => handleStatusChange(e.target.value)}
        >
          <option value='incomplete'>Incomplete</option>
          <option value='in_progress'>In Progress</option>
          <option value='done'>Done</option>
        </Select>
      </FormControl>
    </VStack>
  );
}

export default InputBox;
