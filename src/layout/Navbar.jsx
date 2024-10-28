import ButtonPrimary from "../components/ButtonPrimary";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-img">
          <img src="" alt="Logo"></img>
          <p>Logoipsum</p>
        </div>
        <div className="navbar-content">
          <div className="navbar-menu">
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Our Services</a>
              </li>
              <li>
                <a href="">Portfolio</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <ButtonPrimary
            buttonText={"Get in Touch"}
            buttonStyle={`button-primary`}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
