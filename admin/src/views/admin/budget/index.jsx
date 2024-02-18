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
  const [expenseAmount, setExpenseAmount] = useState(0);

  const [taskExpenses, setTaskExpenses] = useState({
    Fruits: {
      AvailableStocks: [100, 200, 100, 300],
      UsedStock: [80, 200, 50, 70],
      categories: ["Apple", "Mango", "Pineapple", "Orange"],
    },
    Vegetables: {
      AvailableStocks: [120, 150, 140, 200],
      UsedStock: [80, 70, 70, 190],
      categories: ["Capsicum", "Onion", "Spinach", "Potato"],
    },
    Cutlery: {
      AvailableStocks: [100, 200, 150, 200],
      UsedStock: [90, 80, 60, 50],
      categories: ["Plates", "Spoons", "Bowls", "Folks"],
    },
    Fuel: {
      AvailableStocks: [100, 100],
      UsedStock: [80, 20],
      categories: ["Petrol", "CNG"],
    },
  });

  const [Notifications, setNotifications] = useState({
    Fruits: {
      "Report": ["Need to restock Mango","Apple stock running low"],
    },
    Vegetables: {
      "Report": ["Need to restock Potato"],
    },
    Cutlery: {
      "Report": ["There are a few plates left"],
    },
    Fuel: {
      "Report": ["Use CNG"],
    },
  });

  const [selectedTask, setSelectedTask] = useState("Fruits");
  const [totalBudget, setTotalBudget] = useState(50000);

  console.log(selectedTask);
  const handleTaskCardClick = (title) => {
    setSelectedTask( title );
  };

  console.log(taskExpenses[selectedTask]);
  
  return (
    <div className="">
      <div>
        <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-11">
          <div
            className="card card-border xl:col-span-11 2xl:col-span-11"
            role="presentation"
          >
            <div className="card-body flex items-center gap-10">
              <h4 className="text-xl font-semibold">
                Smart Inventory Management
              </h4>
              {/* {totalBudget} */}
            </div>
          </div>
          <div
            className="card card-border xl:col-span-7 2xl:col-span-8"
            role="presentation"
          >
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold">Inventory Tracking</h4>
              </div>
              <div className="chartRef">
                <div style={{ minHeight: "395px" }}>
                  <BarGraph taskExpenses={taskExpenses[selectedTask]} />
                </div>
              </div>
            </div>
          </div>
          <div
            className="card card-border xl:col-span-4 2xl:col-span-3"
            role="presentation"
          >
            <div className="card-body">
              <h4 className="text-xl font-semibold">Notifications</h4>

              <div className="mt-5 flex items-center justify-center">
                <div className="chartRef">
                  <div className=" w-[250px]">
                    <PieGraph Notifications={Notifications[selectedTask]}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-0 gap-y-6 mt-6">
        <button onClick={() => handleTaskCardClick("Fruits")}>
          <TaskCard
            icon={<GiFloorPolisher className="h-7 w-7" />}
            title={"Fruits"}
            previousExpenses={taskExpenses.Fruits}
            AvailableStocksSum={700}
            UsedStockSum={400}

          />
        </button>

        <button onClick={() => handleTaskCardClick("Vegetables")}>
          <TaskCard
            icon={<GiLargePaintBrush className="h-6 w-6" />}
            title={"Vegetables"}
            previousExpenses={taskExpenses.vegetables}
            taskExpenses={taskExpenses}
            AvailableStocksSum={610}
            UsedStockSum={410}


          />
        </button>

        <button onClick={() => handleTaskCardClick("Cutlery")}>
          <TaskCard
            icon={<GiStraightPipe className="h-7 w-7" />}
            title={"Cutlery"}
            previousExpenses={taskExpenses.Cutlery}
            taskExpenses={taskExpenses}
            AvailableStocksSum={650}
            UsedStockSum={280}


          />
        </button>

        <button onClick={() => handleTaskCardClick("Fuel")}>
          <TaskCard
            icon={<GiWireCoil className="h-6 w-6" />}
            title={"Fuel"}
            previousExpenses={taskExpenses.Fuel}
            taskExpenses={taskExpenses}
            AvailableStocksSum={200}
            UsedStockSum={100}

          />
        </button>
      </div>
    </div>
  );
};

export default Budget;
