import { useEffect, useState } from "react";
// import { EmployeeContext } from "../context/EmployeeContext";
import Header from "./Header";
import EmployeeNotFound from "./EmployeeNotFound";
import { getEmployees, deleteEmployee } from "../services/employeeService";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
const EmployeeList = () => {
  // const { loading, employees, deleteEmployee } = useContext(EmployeeContext);
  const headers = ["Employee Name", "Role", "Employee Id", "Action"];
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
    loadEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      setEmployees(employees.filter((emp) => emp._id !== id));
    } catch (error) {
      console.error("Error deleting employee", error);
    }
  };

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
                  <li key={index}>
                    <div className="grid grid-cols-4 m-4 border-b-2 border-gray-700 pb-2">
                      <Link
                        to={`/employee/${employee._id}`}
                        className="col-span-3"
                      >
                        <div className="grid grid-cols-3 gap-2 w-full">
                          <div className="text-xl flex">
                            <Avatar
                              initial={employee.emp_name[0]}
                              thumbnail={true}
                            />
                            {employee.emp_name}
                          </div>
                          <div className="mx-auto">{employee.emp_role}</div>
                          <div className="mx-auto">{employee.emp_id}</div>
                        </div>
                      </Link>
                      <div className="mx-auto">
                        <Link to={`/employee/${employee._id}`}>
                          <button className="bg-blue-500 text-xl rounded-sm px-4 mr-2">
                            Details
                          </button>
                        </Link>
                        <button
                          className="bg-red-300 text-xl rounded-sm mx-auto px-4"
                          onClick={() => handleDelete(employee._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
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
