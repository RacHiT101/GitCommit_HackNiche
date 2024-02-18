import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { Button } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
import { useMemo, useState } from "react";
import Progress from "components/progress";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { GrAdd } from "react-icons/gr";
import { Modall } from "./Modal";
const PreOrder = (props) => {
  const { columnsData } = props;
  const [name, setName] = useState("");
  const [cust, setCust] = useState([]);

  const getCust = async () => {
    try {
      const res = await axios.get("http://localhost:5001/order/");

      const filteredOrders = res.data.filter(
        (order) => order.preorder !== false
      );

      console.log(res.data);

      setCust(filteredOrders);
    } catch (err) {
      console.log(err);
    }
  };
  // const delCust = async (id) => {
  //   try {
  //     const res = await axios.delete(`http://localhost:5001/customer/${id}`);
  //     console.log(res.data);
  //     window.location.reload();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const editCust = async (id) => {
    try {
      const res = await axios.put(
        `http://localhost:5001/customer/${id}`
        // {
        //   progress : count.count/count.total*100
        // }
      );
      console.log(res.data);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCust();
    // console.log(count)
  }, []);
  // useEffect(() => {
  //   editCust(count.id);

  // }, [])

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
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          PreOrder
        </div>

        <Modall />
      </div>

      <div className="mt-8 overflow-x-scroll ">
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
                    console.log(cell);
                    let data = "";
                    if (cell.column.Header === "ORDER NO") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "NAME") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "DATE") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {new Date(
                            cell.row.original.createdAt
                          ).toLocaleDateString()}{" "}
                        </p>
                      );
                    } else if (cell.column.Header === "TIME") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {new Date(
                            cell.row.original.createdAt
                          ).toLocaleTimeString()}{" "}
                        </p>
                      );
                    } else if (cell.column.Header === "View Order") {
                    } else if (cell.column.Header === "View Order") {
                      data = (
                        <Link
                          to={`/admin/view-details/${cell.row.original._id}`}
                          className="text-sm font-bold text-navy-700 dark:text-white"
                        >
                          <Button
                            fontFamily={"heading"}
                            w={"70%"}
                            bgGradient="blue.400"
                            color={"black"}
                            _hover={{
                              bgGradient: "blue.400",
                              boxShadow: "xl",
                            }}
                            fontSize={"small"}
                            padding="4px"
                          >
                            View Order
                            View Order
                          </Button>
                        </Link>
                      );
                    }
                    
                    // else if (cell.column.Header === "Time") {
                    //   let dateObject = new Date(cell.value);
                    //   let formattedDate =
                    //     dateObject.toLocaleDateString("en-US"); // format: MM/DD/YYYY

                    //   data = (
                    //     <p className="text-sm font-bold text-navy-700 dark:text-white">
                    //       {formattedDate}
                    //     </p>
                    //   );
                    // }
                    // else if (cell.column.Header === "STATUS") {
                    //   data = <Progress width="w-[108px]" value={cell.value} />;
                    // }
                    else if (cell.column.Header === "ACTION") {
                      data = (
                        <Link
                          // to={`/admin/view-details/${cell.row.original._id}`}
                          className="text-sm font-bold text-navy-700 dark:text-white"
                        >
                          <Button
                            fontFamily={"heading"}
                            w={"70%"}
                            bgGradient="linear(to-r, red.400,red.700)"
                            color={"white"}
                            _hover={{
                              bgGradient: "linear(to-r, red.400,red.700)",
                              boxShadow: "xl",
                            }}
                            fontSize={"small"}
                            padding="4px"
                          >
                            Mark as Preparing
                          </Button>
                        </Link>
                      );
                    } 
                    // else if (cell.column.Header === " ") {
                    //   data = (
                    //     <Button>
                    //       <MdDelete
                    //         onClick={() => delCust(cell.row.original._id)}
                    //         size={18}
                    //       />
                    //     </Button>
                    //   );
                    // }
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

export default PreOrder;
