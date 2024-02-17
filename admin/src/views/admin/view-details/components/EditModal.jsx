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
import { MdEdit } from "react-icons/md";
export function EditModal({ id,data }) {
  const [taskname, setTaskname] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const count = JSON.parse(localStorage.getItem("countData"));

  console.log(data)
  const editCust = async () => {
    try {
      const res = await axios.put(`http://localhost:5001/products/${data._id}`, {
        id: count.id,
        taskname: taskname,
        status: status,
        date: date,
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
        <MdEdit size={20} color="blue" />
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
          <ModalHeader>Edit Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                defaultValue={data.taskname}
                onChange={(e) => {
                  setTaskname(e.target.value);
                }}
                name="taskname"
              />
            </FormControl>
            <FormControl>
              <FormLabel mt={3}>Status</FormLabel>
              <Select
              defaultValue={data.status}
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
                defaultValue={new Date(data.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                })}
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
                editCust();
                onClose();
              }}
              variant="ghost"
            >
              Edit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
