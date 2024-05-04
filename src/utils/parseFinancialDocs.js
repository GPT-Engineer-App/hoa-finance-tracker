import { pdfjs } from 'react-pdf';

// Function to extract text from a PDF file
export const extractTextFromPDF = async (file) => {
  const pdf = await pdfjs.getDocument(file).promise;
  let textContent = '';

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const text = await page.getTextContent();
    textContent += text.items.map(item => item.str).join(' ');
  }

  return textContent;
};

// Function to parse financial data from extracted text
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