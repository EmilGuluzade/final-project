import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}
const LatestBlog = () => {
  const settings = {
    slidesToShow: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div class="holder holder-mt-medium">
      <div class="container">
        <div class="title-wrap text-center ">
          <h2 class="h1-style text-center">
            <a href="blog.html" title="View all" data-aos="zoom-in-down">
              Latest From Blog
            </a>
          </h2>
          <div
            class="carousel-arrows"
            style={{ margin: "0 auto 65px", width: "50px" }}
          ></div>
        </div>
        <Slider {...settings}>
          <div className="post-prw-vert col"  data-aos="fade-right" >
            <a
              href="blog-post.html"
              className="post-prw-img image-hover-scale image-container"
              style={{ paddingBottom: "54.44%" }}
            >
              <img
                className="fade-up w-100 lazyloaded"
                alt="The High-Street Brand Fashion"
                src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/blog/blog-fashion-02.webp"
              />
            </a>
            <h4 className="post-prw-title">
              <a href="blog-post.html">The High-Street Brand Fashion</a>
            </h4>
            <div className="post-prw-links">
              <div className="post-prw-date">
                <i className="icon-calendar1"></i> June 9, 2020
              </div>
            </div>
          </div>
          <div className="post-prw-vert col"  data-aos="fade-right">
            <a
              href="blog-post.html"
              className="post-prw-img image-hover-scale image-container"
              style={{ paddingBottom: "54.44%" }}
            >
              <img
                className="fade-up w-100 lazyloaded"
                alt="The High-Street Brand Fashion"
                src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/blog/blog-fashion-03.webp"
              />
            </a>
            <h4 className="post-prw-title">
              <a href="blog-post.html">Trends to Try This Season</a>
            </h4>
            <div className="post-prw-links">
              <div className="post-prw-date">
                <i className="icon-calendar1"></i> June 3, 2020
              </div>
            </div>
          </div>
          <div className="post-prw-vert col"  data-aos="fade-right">
            <a
              href="blog-post.html"
              className="post-prw-img image-hover-scale image-container"
              style={{ paddingBottom: "54.44%" }}
            >
              <img
                className="fade-up w-100 lazyloaded"
                alt="The High-Street Brand Fashion"
                src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/blog/blog-fashion-04.webp"
              />
            </a>
            <h4 className="post-prw-title">
              <a href="blog-post.html">Working From Home</a>
            </h4>
            <div className="post-prw-links">
              <div className="post-prw-date">
                <i className="icon-calendar1"></i> June 1, 2020
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default LatestBlog;
