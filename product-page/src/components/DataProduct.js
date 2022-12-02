import { useState } from "react";
import data from "../data";

import "./DataProduct.css";

const DataPhoto = () => {
  const [product, setProduct] = useState(data);

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
              <h1>{item.title}</h1>
              <p className="description">{item.description}</p>
              <div className="price-discount">
                <p className="price">${item.price}.00</p>
                <div className="discount-box">
                  <p className="discount">{item.discountPercentage}%</p>
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default DataPhoto;
