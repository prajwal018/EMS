const Avatar = ({ initial, thumbnail }) => {
  return (
    <div
      className={
        thumbnail
          ? `bg-sky-500 rounded-sm size-8 pl-1 mr-2`
          : `bg-sky-500 rounded-full size-36 pl-8 col-span-1 my-4 mr-8`
      }
    >
      <span
        className={
          thumbnail
            ? "text-2xl font-bold text-sky-900 "
            : "text-9xl font-bold text-sky-900"
        }
      >
        {initial}
      </span>
    </div>
  );
};

export default Avatar;
