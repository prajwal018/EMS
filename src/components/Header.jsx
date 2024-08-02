const Header = ({ headers }) => {
  return (
    <div className="grid grid-cols-4">
      {headers.map((head, index) => (
        <div
          key={index}
          className="text-bold text-l text-center font-bold px-4 rounded-sm bg-blue-300 m-1"
        >
          {head}
        </div>
      ))}
    </div>
  );
};

export default Header;
