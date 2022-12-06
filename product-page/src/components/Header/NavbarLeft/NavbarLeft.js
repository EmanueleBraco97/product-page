import "./NavbarLeft.css";
import logo from "../../../img/logo.svg";
import menu from "../../../img/icon-menu.svg";

const NavbarLeft = () => {
  return (
    <nav className="nav-left">
      <img className="menu-nav-responsive" src={menu} alt="menu"></img>

      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <ul>
        <li>
          <button>Collection</button>
        </li>
        <li>
          <button>Men</button>
        </li>
        <li>
          <button>Women</button>
        </li>
        <li>
          <button>About</button>
        </li>
        <li>
          <button>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarLeft;
