import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ComplexTable from './components/ComplexTable';
import {columnsDataCheck} from "./variables/columnsData"
import axios from 'axios';

function View() {
  const { id } = useParams();
  const [task, setTask] = useState([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  console.log(id)
  const getTask = async () => {
    try {

      const res = await axios.get(`http://localhost:5001/products/${id}`);

  const no = res.data.filter((item) => item.status === "completed").length;
  const total = res.data.length;
  setCount(no);
  setTotal(total);
    localStorage.setItem(
      "countData",
      JSON.stringify({
        id: id,
        count: no,
        total: total,
      })
    );
      
console.log(count);
      console.log(res.data);

      setTask(res.data);
        } catch (err) {
      console.log(err);
    }
  };

  

  useEffect(() => {
    getTask();
    console.log(count);
  }
    , [count]);
  return (
    <div>
      <ComplexTable cust={task} id={id} columnsData={columnsDataCheck}/>
    </div>
  )
}

export default View