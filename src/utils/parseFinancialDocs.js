// Placeholder for PDF parsing functionality
// This function should be replaced with an appropriate implementation that does not require external dependencies.

export const parseFinancialData = (text) => {
  const data = {
    startingBalance: parseFloat(text.match(/Starting Balance: (\d+\.\d+)/)[1]),
    endingBalance: parseFloat(text.match(/Ending Balance: (\d+\.\d+)/)[1]),
    totalIncome: parseFloat(text.match(/Total Income: (\d+\.\d+)/)[1]),
    totalExpenses: parseFloat(text.match(/Total Expenses: (\d+\.\d+)/)[1]),
    expensesCategories: {
      utilities: parseFloat(text.match(/Utilities: (\d+\.\d+)/)[1]),
      maintenance: parseFloat(text.match(/Maintenance: (\d+\.\d+)/)[1]),
      services: parseFloat(text.match(/Services: (\d+\.\d+)/)[1])
    }
  };

  return data;
};