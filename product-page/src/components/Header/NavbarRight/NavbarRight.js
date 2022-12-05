/* eslint-disable jsx-a11y/alt-text */
import "./NavbarRight.css";
import avatar from "../../../img/image-avatar.png";
import cart from "../../../img/icon-cart.svg";
import Cart from "../../Cart/Cart";
import { Cartcontext } from "../../../context/Context";
import { useContext } from "react";

const NavbarRight = () => {
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  return (
    <nav className="nav-right">
      <button
        onClick={() => dispatch({ type: "SHOW", paylod: {} })}
        className="cart-nav"
      >
        <img className="cart-nav-icon" src={cart} alt="cart"></img>
      </button>
      <button className="avatar-nav">
        <img className="avatar-icon" src={avatar} alt="avatar"></img>
      </button>
      <Cart />
    </nav>
  );
};

export default NavbarRight;
