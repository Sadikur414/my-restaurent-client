const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div
      className="md:w-1/4 mx-auto text-center my-4
    "
    >
      <p className="text-yellow-500">---{subHeading}---</p>

      <h1 className="uppercase border-y-4 text-2xl my-2">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
