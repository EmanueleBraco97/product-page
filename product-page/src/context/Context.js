import { createContext, useReducer } from "react";

export const Cartcontext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const itemAlreadyInCartAdd = state.find(
        (item) => action.payload.id === item.id
      );
      if (itemAlreadyInCartAdd) {
        return state.map((item) => {
          if (action.payload.id === item.id) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            };
          } else {
            return item;
          }
        });
      } else {
        return [...state, action.payload];
      }
    case "DIFF":
      const itemAlreadyInCartDiff = state.find(
        (item) => action.payload.id === item.id
      );
      if (itemAlreadyInCartDiff) {
        return state.map((item) => {
          if (action.payload.id === item.id) {
            return {
              ...item,
              quantity: item.quantity - action.payload.quantity,
            };
          } else {
            return item;
          }
        });
      } else {
        return [...state, action.payload];
      }
    case "REMOVE":
      const tempstate3 = state.filter((item) => item.id !== action.payload.id);

      return tempstate3;

    default:
      console.log(state);
      return state;
  }
};

const Context = (props) => {
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };
  return (
    <Cartcontext.Provider value={info}>{props.children}</Cartcontext.Provider>
  );
};

export default Context;
