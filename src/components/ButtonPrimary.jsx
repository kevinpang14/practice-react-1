const ButtonPrimary = ({ buttonText, buttonStyle }) => {
  return (
    //get input from parent component
    <div className={buttonStyle}>
      <a href="">{buttonText}</a>
    </div>
  );
};

export default ButtonPrimary;
