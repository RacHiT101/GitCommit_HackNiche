import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { GrAdd, GrEdit } from "react-icons/gr";

export default function Modall({ id }) {
  const [taskname, setTaskname] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const count = JSON.parse(localStorage.getItem("countData"));

  

  return (
    <>
      <Button onClick={onOpen}>
        {" "}
        <GrAdd size={20} color="blue" />
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Upload</FormLabel>
              <Input
                onChange={(e) => {
                  setTaskname(e.target.value);
                }}
                type="file"
              />
            </FormControl>         
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              type="submit"
              onClick={(e) => {
                // AddCustomer(e);
                onClose();
              }}
              variant="ghost"
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
