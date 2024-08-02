import { Link } from "react-router-dom";

const EmployeeNotFound = ({ message, linkText, linkTo }) => {
  return (
    <div className="text-3xl font-light bg-sky-700 rounded-md text-center w-full">
      <div className="m-2 p-4">{message}</div>
      <Link to={linkTo}>
        <button className="text-sm text-center mx-auto font-bold border-2 p-2 bg-sky-200 hover:bg-sky-400 rounded-lg m-2">
          {linkText}
        </button>
      </Link>
    </div>
  );
};

export default EmployeeNotFound;
