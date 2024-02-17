import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';


const PieGraph = ({taskExpenses}) => {
  // const mode = useSelector((state) => state.config.mode);
   // Calculate total expenses for each category
   const categories = ["Flooring", "Painting", "Plumbing", "Wiring", "Furniture"];

   const categoryExpenses = categories.map(category =>
    taskExpenses[category.toLowerCase()]
      .reduce((acc, expense) => acc + parseFloat(expense.amount), 0)
  );

  const totalExpenses = categoryExpenses.reduce((acc, expense) => acc + expense, 0);

  // Calculate percentage of total expenses for each category
  const series = categoryExpenses.map(expense => (expense / totalExpenses) * 100);

  const options = {
    chart: {
      type: 'donut',
    },
    labels: ['Flooring', 'Painting', 'Plumbing','Furniture','Electrical Design'],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        size: 100,
        donut: {
          size: '80%',
        },
      },
    },
    annotations: {
      position: 'front',
      points: [
        {
          x: 50,
          y: 50,
          marker: {
            size: 0,
          },
          label: {
            text: 'Center Text',
            offsetY: 0,
            style: {
              fontSize: '18px',
              color: '#000',
            },
          },
        },
      ],
    },
  };

  // useEffect(() => {
  //   if(mode === "dark") {
  //     setOptions((options) => ({...options, theme: { mode: 'dark' }}))
  //   } else if(mode === "light") {
  //     setOptions((options) => ({...options, theme: { mode: 'light' }}))
  //   }
  // }, [mode, setOptions]);
  return (
    <div className='object-contain flex justify-center' id="equity">
      <Chart options={options} series={series} type="donut" height={278.7} width={279} />
    </div>
  )
}

export default PieGraph;