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
import {
  GiFloorPolisher,
  GiLargePaintBrush,
  GiStraightPipe,
  GiWireCoil,
} from "react-icons/gi";
import { MdChair } from "react-icons/md";
import TaskCard from "./components/TaskCard";
import BarGraph from "./components/BarGraph";
import PieGraph from "./components/PieGraph";

const Budget = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [todoDetails, setTodoDetails] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const [taskExpenses, setTaskExpenses] = useState({
    flooring: [],
    painting: [],
    plumbing: [],
    wiring: [],
    furniture: [],
  });

  const [selectedTask, setSelectedTask] = useState(null);
  const [totalBudget, setTotalBudget] = useState(50000);

  console.log(selectedTask);
  const handleTaskCardClick = (icon, title) => {
    setSelectedTask({ icon, title });
    onOpen();
  };

  const handleSaveExpense = () => {
    const newExpense = {
      details: todoDetails,
      amount: expenseAmount,
    };

    const selectedTaskExpenses = taskExpenses[selectedTask.title.toLowerCase()];
    setTotalBudget((prevTotalBudget) => prevTotalBudget - newExpense.amount);

    const updatedExpensesArray = [...selectedTaskExpenses, newExpense];

    setTaskExpenses({
      ...taskExpenses,
      [selectedTask.title.toLowerCase()]: updatedExpensesArray,
    });

    console.log(updatedExpensesArray);
    onClose();
  };

  return (
    <div className="mt-10">
      <div>
        <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-11">
          <div
            className="card card-border xl:col-span-11 2xl:col-span-11"
            role="presentation"
          >
            <div className="card-body flex items-center gap-10">
              <h4 className="text-xl font-semibold">Total Budget</h4>
              {totalBudget}
            </div>
          </div>
          <div
            className="card card-border xl:col-span-7 2xl:col-span-8"
            role="presentation"
          >
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold">Cost Tracking</h4>
              </div>
              <div className="chartRef">
                <div style={{ minHeight: "395px" }}>
                  <BarGraph taskExpenses={taskExpenses} />
                </div>
              </div>
            </div>
          </div>
          <div
            className="card card-border xl:col-span-4 2xl:col-span-3"
            role="presentation"
          >
            <div className="card-body">
              <h4 className="text-xl font-semibold">Budget Allocated</h4>

              <div className="mt-20 flex items-center justify-center">
                <div className="chartRef">
                  <div className=" mx-auto w-[250px]">
                    <PieGraph taskExpenses={taskExpenses}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-5">
        <button
          onClick={() =>
            handleTaskCardClick(
              <GiFloorPolisher className="h-7 w-7" />,
              "Flooring"
            )
          }
        >
          <TaskCard
            icon={<GiFloorPolisher className="h-7 w-7" />}
            title={"Flooring"}
            subtitle={`$${taskExpenses.flooring
              .reduce((acc, expense) => acc + parseFloat(expense.amount), 0)
              .toFixed(2)}`}
            previousExpenses={taskExpenses.flooring}
          />
        </button>

        <button
          onClick={() =>
            handleTaskCardClick(
              <GiLargePaintBrush className="h-7 w-7" />,
              "Painting"
            )
          }
        >
          <TaskCard
            icon={<GiLargePaintBrush className="h-6 w-6" />}
            title={"Painting"}
            subtitle={`$${taskExpenses.painting
              .reduce((acc, expense) => acc + parseFloat(expense.amount), 0)
              .toFixed(2)}`}
            previousExpenses={taskExpenses.painting}
          />
        </button>

        <button
          onClick={() =>
            handleTaskCardClick(
              <GiStraightPipe className="h-7 w-7" />,
              "Plumbing"
            )
          }
        >
          <TaskCard
            icon={<GiStraightPipe className="h-7 w-7" />}
            title={"Plumbing"}
            subtitle={`$${taskExpenses.plumbing
              .reduce((acc, expense) => acc + parseFloat(expense.amount), 0)
              .toFixed(2)}`}
            previousExpenses={taskExpenses.plumbing}
          />
        </button>

        <button
          onClick={() =>
            handleTaskCardClick(<GiWireCoil className="h-7 w-7" />, "Wiring")
          }
        >
          <TaskCard
            icon={<GiWireCoil className="h-6 w-6" />}
            title={"Wiring"}
            subtitle={`$${taskExpenses.wiring
              .reduce((acc, expense) => acc + parseFloat(expense.amount), 0)
              .toFixed(2)}`}
            previousExpenses={taskExpenses.wiring}
          />
        </button>

        <button
          onClick={() =>
            handleTaskCardClick(<MdChair className="h-7 w-7" />, "Furniture")
          }
        >
          <TaskCard
            icon={<MdChair className="h-7 w-7" />}
            title={"Furniture"}
            subtitle={`$${taskExpenses.furniture
              .reduce((acc, expense) => acc + parseFloat(expense.amount), 0)
              .toFixed(2)}`}
            previousExpenses={taskExpenses.furniture}
          />
        </button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ADD EXPENSE</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedTask && (
              <div className="flex flex-col items-center gap-5">
                <div className="flex items-center">
                  <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                    <span className="flex items-center text-brand-500 dark:text-white">
                      {selectedTask.icon}
                    </span>
                  </div>
                  <h1 className="ml-2 items-center text-2xl font-bold ">
                    {selectedTask.title}
                  </h1>
                </div>

                <Textarea
                  placeholder="Enter details..."
                  value={todoDetails}
                  onChange={(e) => setTodoDetails(e.target.value)}
                  mt={4}
                />

                <Input
                  type="number"
                  placeholder="Enter amount..."
                  value={expenseAmount}
                  onChange={(e) => setExpenseAmount(e.target.value)}
                  mt={4}
                />
                <table className="w-4/5 justify-between pl-6">
                  <thead className="">
                    <tr className="flex justify-between py-2">
                      <div className="text-xl font-bold">Details</div>
                      <div className="text-xl font-bold">Amount</div>
                    </tr>
                  </thead>
                  <hr className="" />
                  {taskExpenses[selectedTask.title.toLowerCase()].map(
                    (expense, index) => (
                      <tr key={index} className="flex justify-between py-2">
                        <div className="text-md font-medium">
                          {expense.details}
                        </div>
                        <div className="text-md font-medium">
                          Rs {expense.amount}
                        </div>
                      </tr>
                    )
                  )}
                </table>
              </div>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" onClick={handleSaveExpense}>
              SAVE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Budget;
