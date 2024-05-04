import React from 'react';
import { Pie } from 'react-chartjs-2';

const ExpensesGraph = ({ data }) => {
  const chartData = {
    labels: Object.keys(data.expensesCategories),
    datasets: [{
      label: 'Expenses Distribution',
      data: Object.values(data.expensesCategories),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Expenses Distribution</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default ExpensesGraph;