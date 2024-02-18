import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import {
  Button,
  
} from "@chakra-ui/react";
import { MdDelete, MdEdit } from "react-icons/md";
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
import { useMemo, useState } from "react";
import Progress from "components/progress";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { GrAdd } from "react-icons/gr";
import { Modall } from "./Modall";
import { EditModal } from "./EditModal";
import Modalll from "./Modalll";
// import { Modall } from "./Modal";
const ComplexTable = (props) => {
  const { columnsData, cust, id, createdTime } = props;
  
  const [name,setName] = useState("");
  const [open,setOpen] = useState(false);
  // const [cust,setCust] = useState([]);
  // const getCust = async () => {
    
  //   try{
  //     const res = await axios.get("http://localhost:5001/customer/");
  //     console.log(res.data);
      
  //     setCust(res.data);
  //   }
  //   catch(err){
  //     console.log(err);
  //   }
   
  // };
  const delCust = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5001/products/${id}`);
      console.log(res.data);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };


  // useEffect(() => {
  //   getCust();
  // }, []);

  console.log("wdojwdowjd",createdTime);


  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => cust, [cust]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 5;

  return (
    <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
      <div className="relative flex items-center justify-between pt-4">
      ORDER DETAILS
      
        <Modall id={id} />
      </div>

      <div className="mt-8 overflow-x-scroll xl:overflow-hidden">
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={index}
                    className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  >
                    <p className="text-xs tracking-wide text-gray-600">
                      {column.render("Header")}
                    </p>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                  console.log("Hello",cell);
                    let data = "";
                    if (cell.column.Header === "PRODUCT ID") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "STATUS") {
                      data = (
                        <div className="flex items-center gap-2">
                          <div className={`rounded-full text-xl`}>
                            {cell.value === "completed" ? (
                              <MdCheckCircle className="text-green-500" />
                            ) : cell.value === "pending" ? (
                              <MdCancel className="text-red-500" />
                            ) : cell.value === "ongoing" ? (
                              <MdOutlineError className="text-orange-500" />
                            ) : null}
                          </div>
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {cell.value}
                          </p>
                        </div>
                      );
                    } else if (cell.column.Header === "TIME") {
                      let dateObject = new Date(createdTime);
                      let formattedDate =
                        dateObject.toLocaleTimeString("en-US"); // format: MM/DD/YYYY

                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {formattedDate}  
                        </p>
                      );
                    } else if (cell.column.Header === "End Date") {
                      // let formattedDate = "22-10-24"

                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {/* {formattedDate} */}
                          22-10-24
                        </p>
                      );
                    } else if (cell.column.Header === "PRODUCT NAME") {
                      // let formattedDate = "22-10-24"

                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {/* {formattedDate} */}
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "QUANTITY") {
                      // let formattedDate = "22-10-24" 
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    }
                    return (
                      <td
                        className="pt-[14px] pb-[18px] sm:text-[14px]"
                        {...cell.getCellProps()}
                        key={index}
                      >
                        {data}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ComplexTable;
