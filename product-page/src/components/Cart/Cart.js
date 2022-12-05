import { useContext } from "react";
import { Cartcontext } from "../../context/Context";

const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div className="cart">
      {state.map((item, index) => {
        return (
          <div className="card" key={index}>
            <img src={item.image} style={{ width: "50px" }} alt="" />
            <p>{item.title}</p>
            <p>${item.quantity * item.price}.00</p>
            <button>Checkout</button>
            <h2 onClick={() => dispatch({ type: "REMOVE", payload: item })}>
              x
            </h2>
          </div>
        );
      })}
      {state.length > 0 && (
        <div className="total">
          <h2>${total}.00</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
