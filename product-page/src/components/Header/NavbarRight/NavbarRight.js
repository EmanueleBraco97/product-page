import "./NavbarRight.css";
import avatar from "../../../img/image-avatar.png";
import cart from "../../../img/icon-cart.svg";
import Cart from "../../Cart/Cart";

const NavbarRight = () => {
  return (
    <nav className="nav-right">
      <button className="cart-nav">
        <img className="cart-nav-icon" src={cart} alt="cart"></img>
      </button>
      <button className="avatar-nav">
        <img className="avatar-icon" src={avatar} alt="avatar"></img>
        {/* <Cart /> */}
      </button>
    </nav>
  );
};

export default NavbarRight;
