import { Link } from "react-router-dom";

const ActionButtons = ({ id, onDelete }) => {
  return (
    <div className="mx-auto">
      <Link to={`/employee_details/${id}`}>
        <button className="bg-blue-500 text-xl rounded-sm px-4 mr-2">
          Details
        </button>
      </Link>
      <button
        className="bg-red-300 text-xl rounded-sm mx-auto px-4"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default ActionButtons;
