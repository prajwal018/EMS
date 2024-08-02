import { Link } from "react-router-dom";
import EmployeeInfo from "./EmployeeInfo";
import ActionButtons from "./ActionButtons";

const EmployeeItem = ({ employee, deleteEmployee }) => {
  return (
    <li key={employee._id}>
      <div className="grid grid-cols-4 m-4 border-b-2 border-gray-700 pb-2">
        <Link to={`/employee_details/${employee._id}`} className="col-span-3">
          <EmployeeInfo
            name={employee.emp_name}
            role={employee.emp_role}
            id={employee.emp_id}
          />
        </Link>
        <ActionButtons id={employee._id} onDelete={deleteEmployee} />
      </div>
    </li>
  );
};

export default EmployeeItem;
