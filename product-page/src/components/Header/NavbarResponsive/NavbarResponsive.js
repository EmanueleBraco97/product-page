import "./NavbarResponsive.css";
import menu from "../../../img/icon-menu.svg";
import close from "../../../img/icon-close.svg";

import { useState } from "react";

const NavbarResponsive = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const changeMenu = () => {
    if (openMenu) {
      setOpenMenu(!openMenu);
    } else {
      setOpenMenu(!openMenu);
    }
  };

  return (
    <nav className="navbar-responsive">
      <div className="menu-toggle">
        {openMenu ? (
          <button
            className="button-menu"
            onClick={changeMenu}
            style={{
              cursor: "pointer",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <img src={close} alt="close"></img>
          </button>
        ) : (
          <button
            className="button-menu"
            onClick={changeMenu}
            style={{
              cursor: "pointer",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <img src={menu} alt="menu"></img>
          </button>
        )}
      </div>

      <ul className={`ul-nav-responsive ${openMenu ? "active" : "disabled"}`}>
        <li className="li-navbar">
          <button className="btn-responsive">Collections</button>
        </li>
        <li className="li-navbar">
          <button className="btn-responsive">Men</button>
        </li>
        <li className="li-navbar">
          <button className="btn-responsive">Women</button>
        </li>
        <li className="li-navbar">
          <button className="btn-responsive">About</button>
        </li>
        <li className="li-navbar">
          <button className="btn-responsive">Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarResponsive;
