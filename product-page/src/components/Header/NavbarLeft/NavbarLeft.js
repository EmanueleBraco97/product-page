import "./NavbarLeft.css";
import logo from "../../../img/logo.svg";

const NavbarLeft = () => {
  return (
    <nav className="nav-left">
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>

      <ul>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavbarLeft;
