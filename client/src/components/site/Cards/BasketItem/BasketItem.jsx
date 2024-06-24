import React, { useContext } from "react";
import MainContext from "../../../../context/context";
import { Link } from "react-router-dom";

const BasketItem = ({ item }) => {
  const { addToBasket, deleteFromBasket, resetBasket } = useContext(MainContext);
  return (
    <div class="cart-table-prd">
      <div class="cart-table-prd-image d-flex align-items-center">
        <Link  to={`/product/${item._id}`} >
          <img class="fade-up lazyloaded" src={item.images[0]} alt="" />
        </Link>
      </div>
      <div class="cart-table-prd-content-wrap">
        <div class="cart-table-prd-info">
          <div class="cart-table-prd-price">
            <div class="price-new">${item.price}</div>
          </div>
          <h2 class="cart-table-prd-name">
            <a href="product.html">{item.title}</a>
          </h2>
        </div>
        <div class="cart-table-prd-qty">
          <div class="qty qty-changer">
            <button
              onClick={() => deleteFromBasket(item._id)}
              class="decrease"
            ></button>
            <input
              type="text"
              class="qty-input"
              value={item.count}
              data-min="0"
              data-max="1000"
              readOnly
            />
            <button
              onClick={() => addToBasket(item._id)}
              class="increase"
            ></button>
          </div>
        </div>
        <div class="cart-table-prd-price-total">${item.totalPrice}</div>
      </div>
      <div class="cart-table-prd-action">
        <p onClick={()=>resetBasket()} class="cart-table-prd-remove" data-tooltip="Remove Product">
          <i class="icon-recycle"></i>
        </p>
      </div>
    </div>
  );
};

export default BasketItem;
