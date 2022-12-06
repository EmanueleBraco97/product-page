import { useContext } from "react";
import { Cartcontext } from "../../context/Context";
import "./Cart.css";

import cestino from "../../img/icon-delete.svg";

const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div className="cart">
      {state.length === 0 ? (
        <div style={{ display: "none" }} className="card"></div>
      ) : (
        state.map((item, index) => {
          return (
            <div className="card" key={index}>
              <h1 className="title-little-cart">Cart</h1>
              <div className="divisor"></div>
              <div className="structure-top-card">
                <div style={{ display: "flex" }} className="img-btn">
                  <img
                    src={item.image}
                    style={{ width: "50px", borderRadius: "5px" }}
                    alt=""
                  />
                </div>

                <div className="quantity-price-cart">
                  <p style={{ color: "#b6bcc8" }}>{item.title}</p>

                  {state.length > 0 && (
                    <div
                      style={{ display: "flex", columnGap: "30px" }}
                      className="total"
                    >
                      <p style={{ color: "#b6bcc8" }}>
                        ${item.quantity * item.price}.00
                      </p>
                      <p style={{ fontWeight: "bold" }}>${total}.00</p>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => dispatch({ type: "REMOVE", payload: item })}
                >
                  <img src={cestino} alt="delete"></img>
                </button>
              </div>
              <div className="structure-btn-checkout">
                <button className="btn-checkout">Checkout</button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Cart;
