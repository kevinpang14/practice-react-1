import ButtonPrimary from "../components/ButtonPrimary";

const ContactBanner = () => {
  return (
    <>
      <div className="contactContainer">
        <div className="contactBanner">
          <p>
            "Some of the History of Our Company is that we are Catching up
            through Video"
          </p>
          <ButtonPrimary buttonStyle={`button-primary`} />
        </div>
      </div>
    </>
  );
};

export default ContactBanner;
