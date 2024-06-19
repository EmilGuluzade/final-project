import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import { Rating } from "react-simple-star-rating";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css";

const SliderProductCard = ({data}) => {



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
     
      className="px-3 "
    >
      <div className="product__card ">
        <Link to="/catgery" className="product__card-hdr">
          <img
            src={data.images[0]}
            alt=""
          

            style={{  width:"100%",height:"300px",objectFit:"cover"}}
          />
         
            <div className="product-detail">
              <Link to="#">
                <i class="fa-thin fa-heart"></i>
              </Link>

              <Link to={`/detail/${"id"}`}>
                <i class="fa-light fa-eye"></i>
                <p className="detailLeft">view detail</p>
              </Link>
            </div>
         
        </Link>
        <div className="product__card-content">
          <div className="product__card-rating d-flex justify-content-center">
            <Rating readonly={true} initialValue={data.rating} size={20} />
          </div>
          <div className="product__card-info d-flex flex-column align-items-center">
            <Link to="/category" className="product-brand">
            {data.brand}
            </Link>

            <Link to="/category" className="product-title">
              
              {data.title}
            </Link>
            <div className="button-container" style={{ height: "50px" }}>
                <PrimaryButton onClick={() => console.log("sa")}>
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

export default SliderProductCard;
