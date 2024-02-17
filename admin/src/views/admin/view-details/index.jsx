import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ComplexTable from './components/ComplexTable';
import {columnsDataComplex} from "./variables/columnsData"
import axios from 'axios';

function View() {
  const { id } = useParams();
  const [task, setTask] = useState([]);
  const [count, setCount] = useState(0);
  const [createdTime, setCreatdTime] = useState("");
  const [total, setTotal] = useState(0);
  console.log(id)
  const getTask = async () => {
    try {

      const res = await axios.get(`http://localhost:5001/order/${id}`);

      setCreatdTime(res.data.createdAt)
  
      // console.log("hiii" ,res.data.createdAt);

      setTask(res.data.products);
        } catch (err) {
      console.log(err);
    }
  };

  

  useEffect(() => {
    getTask();
  }
    , []);
  return (
    <div>
      <ComplexTable createdTime={createdTime} cust={task} id={id} columnsData={columnsDataComplex}/>
    </div>
  )
}

export default View