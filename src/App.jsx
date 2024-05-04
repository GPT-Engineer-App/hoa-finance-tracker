import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ExpensesGraph from './components/ExpensesGraph';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/expenses-graph" element={<ExpensesGraph data={{ expensesCategories: { Food: 150, Utilities: 200, Rent: 800 } }} />} />
      </Routes>
    </Router>
  );
}

export default App;
