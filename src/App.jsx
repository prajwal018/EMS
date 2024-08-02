// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import EmployeeDetails from "./components/EmployeeDetails";
import AddEmployee from "./components/AddEmployee";
import Sidebar from "./components/Sidebar";
import { EmployeeProvider } from "./context/EmployeeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// require("dotenv").config();
const App = () => {
  return (
    <EmployeeProvider>
      <ToastContainer />
      <Router>
        <div className="grid grid-cols-5 bg-gray-400 h-dvh">
          <Sidebar />
          <div className="col-span-4 bg-sky-200 rounded-sm m-1">
            <Routes>
              <Route path="/" element={<EmployeeList />} />
              <Route
                path="/employee_details/:emp_id"
                element={<EmployeeDetails />}
              />
              <Route path="/add_employee" element={<AddEmployee />} />
            </Routes>
          </div>
        </div>
      </Router>
    </EmployeeProvider>
  );
};

export default App;
