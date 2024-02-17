import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CgMenuGridO } from "react-icons/cg";
import { MdCircleNotifications } from "react-icons/md";
import { Select } from "@chakra-ui/react";
import ramen from "../assets/ramen.svg";
import { Input } from "@chakra-ui/react";


const Home = () => {
 const locations = [
   {
     id: 1,
     name: "D J Sanghvi College Of Engg, Vile Parle W",
   },
   {
     id: 2,
     name: "Cooper Hosptial, Juhu Scheme",
   },
   // Add more locations as needed
 ];
  return (
    <div className="p-6">
      {/* <Link to="/cart">Cart</Link> */}
      <div className="flex flex-row justify-evenly">
        <CgMenuGridO className="text-gray-800" size={30} />
        <select
          className="w-36"
          placeholder="Select nearest location"
          width={{ base: "90%", md: "50%" }}
        >
          {locations.map((location, index) => (
            <option key={index} value={location.id}>
              {location.name}
            </option>
          ))}
        </select>
        <MdCircleNotifications className="text-gray-800" size={30} />
      </div>
      <div className="bg-[#EBD1B9] rounded-lg w-78 h-54 mt-6 p-2 flex gap-4 ">
        <div className="p-2 flex flex-col gap-2">
          <p className="font-semibold text-2xl">Get up to 60%</p>
          <p className="text-lg">off your next order now with our app</p>
          <button className="bg-[#78C4A4] mt-6 rounded-full py-2 px-4 text-white">
            Claim Voucher
          </button>
        </div>
        <div className="place-content-end mt-32 w-64">
          <img src={ramen} />
        </div>
      </div>

      <Input className='w-full mt-4 border-2 p-3 border-gray-600 rounded-full' placeholder="What will you like to eat?" />
    </div>
  )
}

export default Home;
