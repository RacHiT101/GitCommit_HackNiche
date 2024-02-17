import React, { useState } from "react";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Textarea,
  Input,
} from "@chakra-ui/react";

const TaskCard = ({ icon, title, AvailableStocksSum,UsedStockSum }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [todoDetails, setTodoDetails] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const handleSaveExpense = () => {
    
    console.log("Expense Details:", todoDetails);
    console.log("Expense Amount:", expenseAmount);

    onClose(); // Close the modal after saving
  };

  

  return (
    <div className="rounded-md w-max border p-4 bg-white shadow-md">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className=" flex items-center gap-2 py-2">
          <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              {icon}
            </span>
          </div>
          <div>
        <p>Total Available Stock: {AvailableStocksSum}</p>
        <p>Total Used Stock: {UsedStockSum}</p>
      </div>
        </div>
        {/* <hr className="my-3" /> */}
        

        {/* Button to open the modal for entering new expenses */}
        {/* <button
          onClick={onOpen}
          className="mt-2 rounded-md bg-blue-500 py-1 px-2 text-white"
        >
          Add Expense
        </button> */}
      </div>

    </div>
  );
};

export default TaskCard;
