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
import { GrAdd } from "react-icons/gr";
export function Modall() {
    const [name,setName] = useState("");
    const [status,setStatus] = useState("");
    const [date,setDate] = useState("");
    const [progress,setProgress] = useState(0);

const AddCustomer = async (e) =>{
    e.preventDefault();
    try{
        const res = await axios.post("http://localhost:5001/customer/",{
            name:name,
            status:status,
            date:date,
            progress:progress
        });
       console.log("successs");

    }
    catch(err){
        console.log(err);

    }
}
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <ModalHeader>Add Customer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                onChange={(e) => {
                  setName(e.target.value);
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
            <Button type="submit" onClick={AddCustomer} variant="ghost">Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}