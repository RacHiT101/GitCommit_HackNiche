import Card from "components/card";
import React from "react";
import image1 from "assets/img/profile/image1.png";

const OutOfStock = () => {
  return (
    <Card extra="rounded-[20px] p-3">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            Out Of Stock
          </h4>
        </div>
      </div>
      <div className="mx-16 my-4 flex justify-between">
        <p className="text-lg font-bold text-navy-700 dark:text-white">
          Food Item
        </p>
        <p className="text-lg font-bold  text-navy-700 dark:text-white">
          Availability Near You
        </p>
      </div>
      <div className="my-1 flex items-center justify-between rounded-2xl bg-white p-3 px-16 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <p className="flex text-base font-medium text-navy-700 dark:text-white">
          <div className="flex">
            <img
              className="h-8 w-8 rounded-full bg-gray-400"
              src="https://th.bing.com/th/id/OIP.Mz82ujI76UPhwtXmP91JCgHaHa?w=195&h=195&c=7&r=0&o=5&dpr=2&pid=1.7"
              alt=""
            />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              Onion
            </p>
          </div>
        </p>
        <p className="text-base font-medium text-navy-700 dark:text-white">
          View
        </p>
      </div>
      <div className="my-1 flex items-center justify-between rounded-2xl bg-white p-3 px-16 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <p className="flex text-base font-medium text-navy-700 dark:text-white">
          <div className="flex">
            <img
              className="h-8 w-8 rounded-full bg-gray-400"
              src="https://th.bing.com/th/id/OIP.8kTIKzvDOPvwh64HkdwynAHaHa?w=202&h=202&c=7&r=0&o=5&dpr=2&pid=1.7"
              alt=""
            />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              Capsium
            </p>
          </div>
        </p>
        <p className="text-base font-medium text-navy-700 dark:text-white">
          <a
            href="https://blinkit.com/prn/red-capsicum/prid/440980"
            className="blink"
          >
            View
          </a>
        </p>
      </div>
    </Card>
  );
};

export default OutOfStock;
