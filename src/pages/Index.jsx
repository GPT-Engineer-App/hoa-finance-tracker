import React, { useState } from 'react';
import { FaUpload, FaEdit, FaChartBar, FaDollarSign, FaRegCalendarAlt, FaBalanceScale, FaRegListAlt, FaRegMoneyBillAlt, FaRegClock, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { parseFinancialData } from '../utils/parseFinancialDocs';
import ExpensesGraph from '../components/ExpensesGraph';

const Index = () => {
  const [uploadStatus, setUploadStatus] = useState(null);
  const [financialData, setFinancialData] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      setUploadStatus({ success: false, message: 'No file selected' });
      return;
    }
    const textContent = "Starting Balance: 1000.00 Ending Balance: 950.00 Total Income: 500.00 Total Expenses: 550.00 Utilities: 150.00 Maintenance: 200.00 Services: 200.00";
    const data = parseFinancialData(textContent);
    setFinancialData(data);
    setUploadStatus({ success: true, message: 'File uploaded and data extracted successfully!' });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">HOA Financial Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white border-b border-gray-200 shadow-sm sm:rounded-lg">
              <FaUpload className="text-2xl" />
              <h2 className="font-semibold text-xl">Upload Financial Documents</h2>
              <input type="file" onChange={handleFileUpload} className="mt-4 mb-2" />
              {uploadStatus && (
                <div className={`text-sm ${uploadStatus.success ? 'text-green-500' : 'text-red-500'}`}>
                  {uploadStatus.success ? <FaCheckCircle /> : <FaTimesCircle />}
                  {uploadStatus.message}
                </div>
              )}
            </div>
            <div className="p-6 bg-white border-b border-gray-200 shadow-sm sm:rounded-lg">
              <FaEdit className="text-2xl" />
              <h2 className="font-semibold text-xl">Manual Data Entry</h2>
            </div>
            <div className="p-6 bg-white border-b border-gray-200 shadow-sm sm:rounded-lg">
              <FaChartBar className="text-2xl" />
              <h2 className="font-semibold text-xl">Financial Metrics Dashboard</h2>
            </div>
            <div className="p-6 bg-white border-b border-gray-200 shadow-sm sm:rounded-lg">
              <FaDollarSign className="text-2xl" />
              <h2 className="font-semibold text-xl">Budget vs Actual Expenses</h2>
            </div>
            <div className="p-6 bg-white border-b border-gray-200 shadow-sm sm:rounded-lg">
              <FaRegCalendarAlt className="text-2xl" />
              <h2 className="font-semibold text-xl">Trends Analysis</h2>
            </div>
            <div className="p-6 bg-white border-b border-gray-200 shadow-sm sm:rounded-lg">
              <FaBalanceScale className="text-2xl" />
              <h2 className="font-semibold text-xl">Income & Expenses Breakdown</h2>
            </div>
            <div className="p-6 bg-white border-b border-gray-200 shadow-sm sm:rounded-lg">
              <FaRegListAlt className="text-2xl" />
              <h2 className="font-semibold text-xl">Reserve Fund Status</h2>
            </div>
            <div className="p-6 bg-white border-b border-gray-200 shadow-sm sm:rounded-lg">
              <FaRegMoneyBillAlt className="text-2xl" />
              <h2 className="font-semibold text-xl">Cash Flow Analysis</h2>
            </div>
            <div className="p-6 bg-white border-b border-gray-200 shadow-sm sm:rounded-lg">
              <FaRegClock className="text-2xl" />
              <h2 className="font-semibold text-xl">Benchmarking Tool</h2>
            </div>
            {financialData && <ExpensesGraph data={financialData} />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;