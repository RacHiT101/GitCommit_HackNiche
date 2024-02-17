import Card from "components/card";
import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import image1 from "assets/img/profile/image1.png";
import { FaStar } from "react-icons/fa";

const MostOrdered = () => {
  return (
    <Card extra="rounded-[20px] p-3">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            Most Ordered
          </h4>
        </div>
      </div>
      <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <img className="h-[83px] w-[83px] rounded-lg" src={image1} alt="" />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              Arabian Ice Cream
            </p>
            <div className="flex ">
              <FaStar className="mx-[2px] text-yellow-500" />
              <FaStar className="mx-[2px] text-yellow-500" />
              <FaStar className="mx-[2px] text-yellow-500" />
              <FaStar className="mx-[2px] text-yellow-500" />
              <FaStar className="mx-[2px] text-yellow-500" />
            </div>
            <p className="mt-2 text-sm text-gray-600">$123</p>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <img className="h-[83px] w-[83px] rounded-lg" src={image1} alt="" />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              Arabian Ice Cream
            </p>
            <div className="flex ">
              <FaStar className="mx-[2px] text-yellow-500" />
              <FaStar className="mx-[2px] text-yellow-500" />
              <FaStar className="mx-[2px] text-yellow-500" />
              <FaStar className="mx-[2px] text-yellow-500" />
              <FaStar className="mx-[2px] text-yellow-500" />
            </div>
            <p className="mt-2 text-sm text-gray-600">$123</p>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <img className="h-[83px] w-[83px] rounded-lg" src={image1} alt="" />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              Arabian Ice Cream
            </p>
            <div className="flex ">
              <FaStar className="mx-[2px] text-yellow-500" />
              <FaStar className="mx-[2px] text-yellow-500" />
              <FaStar className="mx-[2px] text-yellow-500" />
              <FaStar className="mx-[2px] text-yellow-500" />
              <FaStar className="mx-[2px] text-yellow-500" />
            </div>
            <p className="mt-2 text-sm text-gray-600">$123</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MostOrdered;
