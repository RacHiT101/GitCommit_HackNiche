import React from "react";
import Chart from "react-apexcharts";

const BarGraph = ({taskExpenses}) => {
  //   const mode = useSelector((state) => state.config.mode);
  const categories = taskExpenses.categories;

  // Fixed values for Expected Investment
  const AvailableStocks = taskExpenses.AvailableStocks;
  const UsedStock = taskExpenses.UsedStock;


  const series = [
    {
      name: "Total Stock ",
      data: AvailableStocks,
    },
    {
      name: "Used Stock",
      data: UsedStock
    },
  ];


  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    // theme: {
    //   mode: mode === "light" ? 'light' : 'dark',
    // },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      
      categories: categories,
    },
    yaxis: {
      title: {
        text: "₹ (thousands)",
      },
    },
    colors: ["#868CFF", "#432CF3"],

    tooltip: {
      y: {
        formatter: function (val) {
          return "₹ " + val + " thousands";
        },
      },
    },
  };

  return (
    <div className="object-contain" id="monthly-investment">
      <Chart options={options} series={series} type="bar" height={380} />
    </div>
  );
};

export default BarGraph;
