const HeaderSection = ({ navpage }) => {
  return (
    <div className="HeaderSection">
      <h1>{navpage}</h1>
      <p>Home/{navpage}</p>
    </div>
  );
};

export default HeaderSection;

//not yet reusable
