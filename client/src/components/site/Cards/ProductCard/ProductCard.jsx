import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { Rating } from "react-simple-star-rating";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css";
import MainContext from "../../../../context/context";

const ProductCard = ({ data }) => {
  const navigate = useNavigate();
  const { addToBasket,toggleWishList } = useContext(MainContext);

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 900,
      easing: "ease-out-cubic",
    });
  }, []);

  

  return (
    <div data-aos="fade-right" className="col-lg-3 col-md-4 col-sm-6 px-3">
      <div className="product__card">
        <Link  className="product__card-hdr">
          <img
            src={data.images[0]}
            alt=""
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
          <div className="product-detail">
            <Link to="#" onClick={()=>toggleWishList(data._id)}>
              <i className="fa-thin fa-heart"></i>
            </Link>
            <Link to={`/product/${data._id}`}>
              <i className="fa-light fa-eye"></i>
              <p className="detailLeft">View detail</p>
            </Link>
          </div>
        </Link>
        <div className="product__card-content">
          <div className="product__card-rating d-flex justify-content-center">
            <Rating readonly={true} initialValue={data.rating} size={20} />
          </div>
          <div className="product__card-info d-flex flex-column align-items-center">
            <Link to={`/product/${data._id}`} className="product-brand">
              {data.brand}
            </Link>
            <Link to={`/product/${data._id}`} className="product-title">
              {data.title}
            </Link>
            <div className="button-container" style={{ height: "50px" }}>
              <PrimaryButton onClick={()=>addToBasket(data._id)}>
                Add To Basket
              </PrimaryButton>
              <p className="product-price">{data.price}$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
