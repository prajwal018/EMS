import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { EmployeeContext } from "../context/EmployeeContext";
import EmployeeNotFound from "./EmployeeNotFound";
import Avatar from "./Avatar";
import InfoSection from "./InfoSection";
import InfoItem from "./InfoItem";

const EmployeeDetails = () => {
  const { emp_id } = useParams();
  const { loading, employees } = useContext(EmployeeContext);
  const employee = employees.find((emp) => emp._id === emp_id);

  if (!employee) {
    return (
      <EmployeeNotFound
        message="No such employees in the system!"
        linkText="Add Employee Data"
        linkTo="/add_employee"
      />
    );
  }

  return (
    <>
      {loading ? (
        <div className="flex justify-center">
          <div className="text-xl font-bold m-4">Loading...</div>
        </div>
      ) : (
        <div className="w-max p-6 bg-white shadow-lg rounded-lg mx-auto my-4">
          <div className="flex justify-start">
            <Avatar initial={employee.emp_name[0]} thumbnail={false} />
            <div className="col-div-1">
              <div className="text-3xl m-4">{employee.emp_name}</div>

              <InfoSection title="Identity">
                <InfoItem label="ID" value={employee.emp_id} />
                <InfoItem label="Role" value={employee.emp_role} />
              </InfoSection>

              <InfoSection title="Address">
                <InfoItem label="Area" value={employee.emp_address.area} />
                <InfoItem label="City" value={employee.emp_address.city} />
                <InfoItem
                  label="Country"
                  value={employee.emp_address.country}
                />
                <InfoItem label="Pin-code" value={employee.emp_address.zip} />
              </InfoSection>

              <InfoSection title="Contact">
                {employee.emp_contact.map((contact, index) => (
                  <InfoItem
                    key={index}
                    label={contact.contact_method}
                    value={contact.value}
                  />
                ))}
              </InfoSection>
            </div>
          </div>
          <div className="flex justify-end">
            <Link
              to="/"
              className="inline-block mt-6 px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-600"
            >
              Back to Employee List
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default EmployeeDetails;
