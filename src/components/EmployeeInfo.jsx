import Avatar from "./Avatar";

const EmployeeInfo = ({ name, role, id }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-2 w-full">
        <div className="text-xl flex">
          <Avatar initial={name[0]} thumbnail={true} />
          {name}
        </div>
        <div className="mx-auto">{role}</div>
        <div className="mx-auto">{id}</div>
      </div>
    </>
  );
};

export default EmployeeInfo;
