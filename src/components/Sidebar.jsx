// src/components/Sidebar.js
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="text-blue-200 col-span-1 bg-sky-950 rounded-r-sm my-1 p-2">
      <div className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-blue-500">
        Employee Management System
      </div>
      <Link to="/">
        <button className="bg-sky-700 rounded-md p-2 mt-4 w-full">
          All Employees
        </button>
      </Link>
      <Link to="/add_employee">
        <button className="bg-sky-700 rounded-md p-2 my-4 w-full">
          Add Employee
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
