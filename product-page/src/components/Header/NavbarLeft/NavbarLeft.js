import "./NavbarLeft.css";
import logo from "../../../img/logo.svg";
import NavbarResponsive from "../NavbarResponsive/NavbarResponsive";

const NavbarLeft = () => {
  return (
    <>
      <NavbarResponsive />
      <nav className="nav-left">
        <div className="logo">
          <img className="logo" src={logo} alt="logo"></img>
        </div>
        <ul>
          <li className="list-navbar">
            <button>Collection</button>
          </li>
          <li className="list-navbar">
            <button>Men</button>
          </li>
          <li className="list-navbar">
            <button>Women</button>
          </li>
          <li className="list-navbar">
            <button>About</button>
          </li>
          <li className="list-navbar">
            <button>Contact</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavbarLeft;
