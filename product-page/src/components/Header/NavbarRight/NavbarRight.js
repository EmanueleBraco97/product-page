/* eslint-disable jsx-a11y/alt-text */
import "./NavbarRight.css";
import avatar from "../../../img/image-avatar.png";
// import Cart from "../../Cart/Cart";
import IconCart from "../IconCart";

const NavbarRight = () => {
  return (
    <nav className="nav-right">
      <IconCart />
      <button className="avatar-nav">
        <img className="avatar-icon" src={avatar} alt="avatar"></img>
      </button>
    </nav>
  );
};

export default NavbarRight;
