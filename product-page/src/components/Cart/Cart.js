import { useContext } from "react";
import { Cartcontext } from "../../context/Context";
import "./Cart.css";

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
              <h1 style={{ color: "black" }}>Cart</h1>
              <div className="divisor"></div>
              <div className="structure-top-card">
                <img
                  src={item.image}
                  style={{ width: "50px", borderRadius: "5px" }}
                  alt=""
                />
                <p>{item.title}</p>
              </div>

              <p>${item.quantity * item.price}.00</p>
              <button>Checkout</button>
              <button
                onClick={() => dispatch({ type: "REMOVE", payload: item })}
              >
                x
              </button>
              {state.length > 0 && (
                <div className="total">
                  <h3>${total}.00</h3>
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Cart;
