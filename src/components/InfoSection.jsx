const InfoSection = ({ title, children }) => {
  return (
    <>
      <div className="text-lg font-medium border-y-4 m-4 text-center">
        {title}
      </div>
      {children}
    </>
  );
};

export default InfoSection;
