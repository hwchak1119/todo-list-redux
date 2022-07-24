import React, { useState } from "react";
import InputBox from "./InputBox.js";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";

function TodoModal() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(
      saveTodo({
        item: input,
        status,
        done: false,
        id: Date.now(),
      })
    );
  };

  const handleInput = (e) => {
    setInput(e);
  };
  const handleStatus = (e) => {
    setStatus(e);
  };

  return (
    <>
      <Button rightIcon={<AddIcon />} colorScheme='blue' onClick={onOpen}>
        Add
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new task</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody>
            <InputBox
              handleInputChange={handleInput}
              handleStatusChange={handleStatus}
            />
          </ModalBody>
          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme='blue'
              onClick={() => {
                addTodo();
                onClose();
              }}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default TodoModal;
