import { useState } from "react";
import data from "../../data";

import "./DataProduct.css";

const DataPhoto = () => {
  const [product, setProduct] = useState(data);

  return (
    <div>
      {product.map((item, index) => {
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
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default DataPhoto;
