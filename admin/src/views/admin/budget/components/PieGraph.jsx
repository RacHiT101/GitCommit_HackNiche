import React, { useEffect } from "react";
import Chart from "react-apexcharts";

const PieGraph = ({ Notifications }) => {
  const notifications = Notifications.Report;
  return (
    <div className="flex flex-col items-center">
      {notifications.map((notification, i) => {
        return (
          <div key={i} className="my-2 rounded-lg bg-red-100 p-4 px-10 text-red-800">
            {notification}
          </div>
        );
      })}
    </div>
  );
};

export default PieGraph;
