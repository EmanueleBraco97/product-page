import Cart from "../Cart/Cart";
import cart from "../../img/icon-cart.svg";

import { Cartcontext } from "../../context/Context";
import { useContext } from "react";

const IconCart = () => {
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  return (
    <div>
      <button
        onClick={() => dispatch({ type: "SHOW", paylod: {} })}
        className="cart-nav"
      >
        <img className="cart-nav-icon" src={cart} alt="cart"></img>
      </button>
      <Cart />
    </div>
  );
};

export default IconCart;
