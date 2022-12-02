import { useState, useContext, useEffect } from "react";
import data from "../../data";
import { Cartcontext } from "../../context/Context";
import Cart from "../Cart/Cart";

import "./DataProduct.css";

const DataPhoto = () => {
  const [product, setProduct] = useState(data);

  useEffect(() => {
    setProduct((product) => product);
  }, []);

  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;

  return (
    <div>
      {product.map((item, index) => {
        item.quantity = 1;
        return (
          <div className="card-container" key={index}>
            <section className="img-product-left">
              <img
                className="img-product"
                src={item.image}
                alt="imageProduct"
              ></img>

              <div className="other-photo-product">
                <img
                  className="little-photo"
                  src={item.firstImage}
                  alt="FirstProduct"
                ></img>
                <img
                  className="little-photo"
                  src={item.secondImage}
                  alt="FirstProduct"
                ></img>
                <img
                  className="little-photo"
                  src={item.thirdImage}
                  alt="FirstProduct"
                ></img>
                <img
                  className="little-photo"
                  src={item.fourthImage}
                  alt="FirstProduct"
                ></img>
              </div>
            </section>

            <article className="info-product-right">
              <h1>Sneaker Company</h1>
              <h2>{item.title}</h2>
              <p className="description">{item.description}</p>
              <div className="price-discount">
                <div className="structure-price-discount">
                  <p className="price">${item.price}.00</p>
                  <div className="discount-box">
                    <p className="discount">{item.discountPercentage}%</p>
                  </div>
                </div>
                <div className="old-price">${item.oldPrice}.00</div>
              </div>
              <section className="add-implement-cart">
                <div className="quantity">
                  <button
                    onClick={() =>
                      dispatch({ type: "INCREASE", payload: item })
                    }
                  >
                    +
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => {
                      if (item.quantity > 1) {
                        dispatch({ type: "DECREASE", payload: item });
                      } else {
                        dispatch({ type: "REMOVE", payload: item });
                      }
                    }}
                  >
                    -
                  </button>
                </div>
                <button
                  className="add-cart"
                  onClick={() => dispatch({ type: "ADD", payload: item })}
                >
                  <svg
                    width="22"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                      fill="#ffffff"
                      fillRule="nonzero"
                    />
                  </svg>
                  Add to Cart
                </button>
                <Cart />
              </section>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default DataPhoto;
