const InfoItem = ({ label, value }) => {
  return (
    <div className="text-lg font-medium grid grid-cols-2 gap-2 m-4">
      <div className="uppercase">{label}:</div>
      <div className="text-lg font-normal">{value}</div>
    </div>
  );
};

export default InfoItem;
