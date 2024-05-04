import React from 'react';

const ExpensesGraph = ({ data }) => {
  const categories = Object.keys(data.expensesCategories);
  const values = Object.values(data.expensesCategories);

  return (
    <div>
      <h2 className="text-xl font-semibold">Expenses Distribution</h2>
      <svg width="400" height="400" viewBox="0 0 400 400">
        {values.map((value, index) => {
          const x = 100 + index * 100;
          const y = 400 - value;
          return (
            <rect key={index} x={x} y={y} width="50" height={value} fill="blue" />
          );
        })}
        <g>
          {categories.map((category, index) => {
            const x = 100 + index * 100;
            return (
              <text key={index} x={x} y="390" fontSize="12" textAnchor="middle">{category}</text>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default ExpensesGraph;