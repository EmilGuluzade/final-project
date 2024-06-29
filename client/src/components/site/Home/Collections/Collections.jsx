import React, { useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderProductCard from '../../Cards/ProductCard/SliderProductCard';
import AOS from "aos";
import "aos/dist/aos.css";
import MainContext from '../../../../context/context';

import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "white" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "white" }}
      onClick={onClick}
    />
  );
}
const Collections = () => {
  const {products,basket,setBasket}=useContext(MainContext)
const [collection,setCollection]=useState("women")
const [quantity,setQuantity]=useState(1)
  const slider = React.useRef(null);
  var settings = {
   
    infinite: true,
    autoplaySpeed: 2000,
    autoplay:true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    AOS.init({
     disable: window.innerWidth < 1024,

      duration: 900,
      easing: "ease-out-cubic",
    });
  }, []);



  function addToBasket(id) {
    let basketItem = basket.find((x) => x._id == id);

    if (!basketItem) {
      let target = products.find((x) => x._id == id);

      let newItem = {
        ...target,
        count: quantity,
        totalPrice: target.price,
      };
      setBasket([...basket, newItem]);
      Toastify({
        text: "Item Added to basket!",
        className: "info",
        style: {
          background: "#17c6aa",
        },
      }).showToast();
    } else {
      basketItem.count += quantity;
      basketItem.totalPrice += basketItem.price;
      setBasket([...basket]);
      Toastify({
        text: "Item Added to basket!",
        className: "info",
        style: {
          background: "#17c6aa",
        },
      }).showToast();
    }
  }

  return (
    <section  className='collection holder'>
    <div className="container"> 

    <div className="title-wrap text-center">
            <h2 data-aos="zoom-in-down" className="h1-style">Collections</h2>
            <div className="title-wrap title-tabs-wrap text-center js-title-tabs ps ps--theme_default" data-ps-id="91bb7c47-c5e5-d52f-b6e4-565de78f1e68">
                <div className="title-tabs">
                    <h2 className="h3-style active">
                        <a  href='#' onClick={(e)=>{ 
                              e.preventDefault()
                              setCollection("women")}} >
                            <span className={collection=="women"?"title-tabs-text theme-font isCollection " : "title-tabs-text theme-font"} >Women</span>
                        </a>
                    </h2>
                    <h2 className="h3-style">
                        <a href='#' onClick={(e)=>{
                              e.preventDefault()
                              
                              setCollection("men")}}>
                            <span className={collection=="men"?"title-tabs-text theme-font isCollection " : "title-tabs-text theme-font"}>Men</span>
                        </a>
                    </h2>
                    <h2 className="h3-style">
                        <a href='#' onClick={(e)=>{
                              e.preventDefault()
                              
                              setCollection("accessories")}}>
                            <span className={collection=="accessories"?"title-tabs-text theme-font isCollection " : "title-tabs-text theme-font"} >Accessories</span>
                        </a>
                    </h2>
                </div>
                <div className="ps__scrollbar-x-rail" style={{ left: '0px', bottom: '0px' }}>
                    <div className="ps__scrollbar-x" tabIndex="0" style={{ left: '0px', width: '0px' }}></div>
                </div>
                <div className="ps__scrollbar-y-rail" style={{ top: '0px', right: '0px' }}>
                    <div className="ps__scrollbar-y" tabIndex="0" style={{ top: '0px', height: '0px' }}></div>
                </div>
            </div>
        </div>
<div className="row">

<Slider ref={slider} {...settings}>
                              
{
  products && products.filter(x=>x.collections==collection).map((item,index)=>(
    <SliderProductCard key={index} data={item} ></SliderProductCard>

  ))
}
   
    </Slider>
    <div className='sliderButtons '>
  <a  onClick={() => slider?.current?.slickPrev()}><i class="fa-solid fa-chevron-left"></i></a>
  <a    onClick={() => slider?.current?.slickNext()}><i class="fa-solid fa-chevron-right"></i></a>
</div>
</div>
    </div>
    </section>
  );
};

export default Collections;