import { createContext, useState, useEffect } from "react";
import {
  getEmployees,
  addEmployee,
  deleteEmployee,
} from "../services/employeeService";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addNewEmployee = async (employee) => {
    const newEmployee = await addEmployee(employee);
    setEmployees([...employees, newEmployee]);
  };

  const deleteExistingEmployee = async (emp_id) => {
    await deleteEmployee(emp_id);
    setEmployees(employees.filter((emp) => emp._id !== emp_id));
  };

  return (
    <EmployeeContext.Provider
      value={{
        loading,
        employees,
        addEmployee: addNewEmployee,
        deleteEmployee: deleteExistingEmployee,
        loadEmployee: loadEmployees,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
