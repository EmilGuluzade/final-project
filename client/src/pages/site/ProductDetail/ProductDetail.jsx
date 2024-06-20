import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import controller from "../../../services/api/requests";
import { endpoints } from "../../../services/api/constants";
import { Rating } from "react-simple-star-rating";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderProductCard from "../../../components/site/Cards/ProductCard/SliderProductCard";
import AOS from "aos";
import "aos/dist/aos.css";
import MainContext from "../../../context/context";
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

const ProductDetail = () => {
  const { id } = useParams();
  const [countdownTime, setCountdownTime] = useState("05:08:03");
  const [deliveryDate, setDeliveryDate] = useState("Tuesday, July 22, 2024");
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function getSingleProduct() {
      try {
        const response = await controller.getOne(endpoints.products, id);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
    getSingleProduct();
  }, [id]);

  useEffect(() => {
    const startTimer = () => {
      const endTime = new Date("2024-07-22T23:59:59");
      const interval = setInterval(() => {
        const currentTime = new Date();
        const timeDifference = endTime - currentTime;

        if (timeDifference > 0) {
          const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
          const seconds = Math.floor((timeDifference / 1000) % 60);

          setCountdownTime(
            `${hours.toString().padStart(2, "0")}:${minutes
              .toString()
              .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
          );
        } else {
          clearInterval(interval);
          setCountdownTime("00:00:00");
        }
      }, 1000);

      return () => clearInterval(interval);
    };

    startTimer();
  }, []);

  const images = [
    {
      original: product.images?.[0],
      thumbnail: product.images?.[0],
    },
    {
      original: product.images?.[1],
      thumbnail: product.images?.[1],
    },
  ];

  const { products } = useContext(MainContext);
  const [collection, setCollection] = useState("women");

  const slider = React.useRef(null);
  var settings = {
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 900,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div className="holder">
        <div className="container js-prd-gallery" id="prdGallery">
          <div className="row prd-block prd-block-under prd-block--prv-bottom">
            <div className="col">
              <div className="js-prd-d-holder">
                <div className="prd-block_title-wrap">
                  <div
                    className="prd-block_reviews"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Scroll To Reviews"
                  >
                    <Rating
                      readonly={true}
                      initialValue={product.rating}
                      size={25}
                    />
                    <span className="reviews-link">
                      <a href="#" className="js-reviews-link">
                        (17 reviews)
                      </a>
                    </span>
                  </div>
                  <h1 className="prd-block_title">{product.title}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 prd-block prd-block--prv-bottom d-flex">
            <div className="col-6 px-3  ">
              <div className="aside-content">
                <div className="prd-block_main-image">
                  <div
                    className="prd-block_main-image-holder"
                    id="prdMainImage"
                  >
                    <ImageGallery items={images} showPlayButton={false} />
                    <div className="prd-block_label-sale-squared justify-content-center align-items-center">
                      <span>Sale</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6  ">
              <div
                className="prd-block_info prd-block_info--style1"
                data-prd-handle="/products/copy-of-suede-leather-mini-skirt"
              >
                <div className="prd-block_info-top prd-block_info_item order-0 order-md-2">
                  <div className="prd-block_price prd-block_price--style2 ">
                    <div className="prd-block_price--actual">
                      ${product.price}
                    </div>
                  </div>
                  <div className="prd-block_viewed-wrap  d-md-flex">
                    <div className="prd-block_viewed">
                      <i class="fa-thin fa-clock icon-time"></i>
                      <span>
                        This product was viewed 13 times within last hour
                      </span>
                    </div>
                  </div>
                </div>
                <div className="prd-block_description prd-block_info_item">
                  <h3>Short description</h3>
                  <p>
                    {product.description &&
                      (() => {
                        const description = product.description;
                        return description.slice(0, 345);
                      })()}
                  </p>
                  <div className="mt-1"></div>
                  <div className="row vert-margin-less">
                    <div className="col-sm">
                      <ul className="list-marker">
                        <li>
                          {" "}
                          <i class="fa-thin fa-check"></i>100% Polyester
                        </li>
                        <li>
                          <i class="fa-thin fa-check"></i>Lining: 100% Viscose
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm">
                      <ul className="list-marker">
                        <li>
                          <i class="fa-thin fa-check"></i>Do not dry clean
                        </li>
                        <li>
                          <i class="fa-thin fa-check"></i>Only non-chlorine
                          bleach
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="prd-progress prd-block_info_item"
                  data-left-in-stock=""
                >
                  <div className="prd-progress-text">
                    Hurry Up! Left{" "}
                    <span className="prd-progress-text-left js-stock-left">
                      {product.stock}
                    </span>{" "}
                    in stock
                  </div>
                  <div className="prd-progress-text-null"></div>
                  <div className="prd-progress-bar-wrap progress">
                    <div
                      className="prd-progress-bar progress-bar active"
                      data-stock="50, 10, 30, 25, 1000, 15000"
                      style={{ width: `${(product.stock * 100) / 50}%` }}
                    ></div>
                  </div>
                </div>
                <div
                  className="prd-block_order-info prd-block_info_item"
                  data-order-time=""
                  data-locale="en"
                >
                  <i class="fa-thin fa-box icon-box-2"></i>
                  <div>
                    Order in the next
                    <span className="prd-block_order-info-time countdownCircleTimer mx-2">
                      {countdownTime}
                    </span>
                    to get it by
                    <span>{deliveryDate}</span>
                  </div>
                </div>

                <div className="prd-block_info-box prd-block_info_item">
                  <div className="two-column">
                    <p>
                      Availability:
                      <span className="prd-in-stock" data-stock-status="">
                        {product.stock > 0 && "in stock"}
                      </span>
                    </p>
                    <p className="prd-taxes">
                      Tax Info: <span>tax included.</span>
                    </p>
                    <p>
                      Collection: <span>{product.collections}</span>
                    </p>
                    <p>
                      Category: <span>{product.category}</span>
                    </p>
                    <p>
                      Brand: <span>{product.brand}</span>
                    </p>
                  </div>
                </div>
                <div className=" order-md-100">
                  <form method="post" action="#">
                    <div className="prd-block_actions prd-block_actions--wishlist">
                      <div className="prd-block_qty">
                        <div className="qty qty-changer">
                          <button
                            className="decrease js-qty-button"
                            type="button"
                          ></button>
                          <input
                            type="number"
                            className="qty-input"
                            name="quantity"
                            defaultValue="1"
                            min="1"
                            max="1000"
                          />
                          <button
                            className="increase js-qty-button"
                            type="button"
                          ></button>
                        </div>
                      </div>
                      <div className="btn-wrap">
                        <button
                          className="btn btn--add-to-cart js-trigger-addtocart js-prd-addtocart"
                          data-product='{ "name": "Leather Pegged Pants", "url": "product.html", "path": "images/skins/fashion/product-page/product-01.webp", "aspect_ratio": "0.78" }'
                        >
                          Add to cart
                        </button>
                      </div>
                      <div className="btn-wishlist-wrap">
                        <a
                          href="#"
                          className="btn-add-to-wishlist ml-auto btn-add-to-wishlist--add js-add-wishlist"
                          title="Add To Wishlist"
                        >
                          <i className="icon-heart-stroke"></i>
                        </a>
                        <a
                          href="#"
                          className="btn-add-to-wishlist ml-auto btn-add-to-wishlist--off js-remove-wishlist"
                          title="Remove From Wishlist"
                        >
                          <i className="icon-heart-hover"></i>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="prd-block_info_item">
                  <img
                    className="img-responsive d-none d-sm-block ls-is-cached lazyloaded"
                    src="https://big-skins.com/frontend/foxic-html-demo/images/payment/safecheckout.webp  "
                    data-src="images/payment/safecheckout.webp"
                    alt="Safe Checkout"
                    width={"100%"}
                  />
                  <img
                    className="img-responsive lazyload d-sm-none"
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    data-src="images/payment/safecheckout-m.webp"
                    alt="Safe Checkout"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="collection holder">
        <div className="container">
          <div className="title-wrap text-center">
            <h2 data-aos="zoom-in-down" className="h1-style">
              You May Also Like
            </h2>
            <div className="sliderButtons ">
              <a onClick={() => slider?.current?.slickPrev()}>
                <i class="fa-solid fa-chevron-left"></i>
              </a>
              <a onClick={() => slider?.current?.slickNext()}>
                <i class="fa-solid fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="row">
            <Slider ref={slider} {...settings}>
              {products &&
                products
                  .filter(
                    (x) =>
                      x.category == product.category &&
                      x.collections == product.collections &&
                      x._id !== id
                  )
                  .map((item, index) => (
                    <SliderProductCard
                      key={index}
                      data={item}
                    ></SliderProductCard>
                  ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
