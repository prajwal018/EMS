import { useContext, useEffect } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import Header from "./Header";
import EmployeeItem from "./EmployeeItem";
import EmployeeNotFound from "./EmployeeNotFound";

const EmployeeList = () => {
  const { loading, employees, deleteEmployee, loadEmployee } =
    useContext(EmployeeContext);
  const headers = ["Employee Name", "Role", "Employee Id", "Action"];

  useEffect(() => {
    loadEmployee();
  });

  return (
    <>
      {loading ? (
        <div className="flex justify-center">
          <div className="text-xl font-bold m-4">Loading...</div>
        </div>
      ) : (
        <div className="m-4">
          <div className="flex justify-center">
            <div className="text-xl font-bold mb-4">All Employee List</div>
          </div>
          {employees.length === 0 ? (
            <EmployeeNotFound
              message="No Employees in the system!"
              linkText="Add Employee Data"
              linkTo="/add_employee"
            />
          ) : (
            <div>
              <Header headers={headers} />
              <ul>
                {employees.map((employee, index) => (
                  <EmployeeItem
                    key={index}
                    index={index}
                    employee={employee}
                    deleteEmployee={deleteEmployee}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default EmployeeList;
