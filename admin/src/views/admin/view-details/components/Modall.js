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
export function Modall({id}) {
  const [taskname, setTaskname] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
   const count = JSON.parse(localStorage.getItem("countData"));

  const AddCustomer = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/products/", {
        id: id,
        taskname: taskname,
        status: status,
        date: date,
      });
      window.location.reload();
      console.log("successs");
      editCust(count.id);

    } catch (err) {
      console.log(err);
    }
  };
      const editCust = async (id) => {
        try {
          const res = await axios.put(`http://localhost:5001/customer/${id}`, {
            progress: (count.count / count.total) * 100,
          });
          console.log(res.data);
          window.location.reload();
        } catch (err) {
          console.log(err);
        }
      };

  
  return (
    <>
      <Button onClick={onOpen}>
        {" "}
        <GrAdd size={20} color="blue" />
      </Button>
      {/* <Button onClick={onOpen}>
        {" "}
        <GrEdit size={20} color="blue" />
      </Button> */}
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
              <FormLabel>Name</FormLabel>
              <Input
                onChange={(e) => {
                  setTaskname(e.target.value);
                }}
                type="name"
              />
            </FormControl>
            <FormControl>
              <FormLabel mt={3}>Status</FormLabel>
              <Select
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
                placeholder="Select status"
              >
                <option value="pending">Pending</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
              </Select>
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>Date</FormLabel>
              <Input
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                type="date"
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
                AddCustomer(e);
                onClose();
              }}
              variant="ghost"
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
