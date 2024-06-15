import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import { Rating } from "react-simple-star-rating";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css";

const SliderProductCard = () => {
  const [rating, setRating] = useState(4);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 900,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div
      data-aos="fade-right"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="px-3 "
    >
      <div className="product__card ">
        <Link to="/catgery" className="product__card-hdr">
          <img
            src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-03-1.webp"
            alt=""
          />
          {isHover ? (
            <div className="product-detail">
              <Link to="#">
                <i class="fa-thin fa-heart"></i>
              </Link>

              <Link to={`/detail/${"id"}`}>
                <i class="fa-light fa-eye"></i>
                <p className="detailLeft">view detail</p>
              </Link>
            </div>
          ) : (
            ""
          )}
        </Link>
        <div className="product__card-content">
          <div className="product__card-rating d-flex justify-content-center">
            <Rating readonly={true} initialValue={rating} size={20} />
          </div>
          <div className="product__card-info d-flex flex-column align-items-center">
            <Link to="/category" className="product-brand">
              {" "}
              Foxic
            </Link>

            <Link to="/category" className="product-title">
              {" "}
              Oversized Cotton Blouse{" "}
            </Link>
            <div className="button-container" style={{ height: "50px" }}>
              {isHover ? (
                <PrimaryButton onClick={() => console.log("sa")}>
                  Add To Basket
                </PrimaryButton>
              ) : (
                <p className="product-price">100$</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderProductCard;
