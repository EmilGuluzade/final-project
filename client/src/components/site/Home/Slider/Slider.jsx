import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import "./Slider.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
const Slider = () => {
  const IMAGE_PARTS = 4;
  const AUTOCHANGE_TIME = 4000;
  const [activeSlide, setActiveSlide] = useState(-1);
  const [prevSlide, setPrevSlide] = useState(-1);
  const [sliderReady, setSliderReady] = useState(false);
  const changeTO = useRef(null);
  useEffect(() => {
    AOS.init({
      disable: window.innerWidth < 1024,

      duration: 900,
      easing: "ease-out-cubic",
    });
  }, []);
  const slides = [
    {
      title: "Best Price This Year",
      description: "eCommerce HTML Tempplate",
      margin: "0 0 0 300px",
      img: "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/slider/slide-fashion-02.webp",
    },
    {
      title: "Best Rated Theme 2020",
      description: "eCommerce HTML Tempplate",
      margin: "0 300px 0 0",
      img: "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/slider/slide-fashion-01.webp",
    },
  ];
  const runAutochangeTO = () => {
    changeTO.current = setTimeout(() => {
      changeSlides(1);
      runAutochangeTO();
    }, AUTOCHANGE_TIME);
  };

  const changeSlides = (change) => {
    clearTimeout(changeTO.current);
    const length = slides.length;
    const prev = activeSlide;
    let active = prev + change;
    if (active < 0) active = length - 1;
    if (active >= length) active = 0;
    setActiveSlide(active);
    setPrevSlide(prev);
  };

  useEffect(() => {
    runAutochangeTO();
    setTimeout(() => {
      setActiveSlide(0);
      setSliderReady(true);
    }, 0);

    return () => clearTimeout(changeTO.current);
  }, []);

  return (
    <div className={classNames("slider", { "s--ready": sliderReady })}>
      <div className="slider__slides">
        {slides.map((slide, index) => (
          <div
            className={classNames("slider__slide", {
              "s--active": activeSlide === index,
              "s--prev": prevSlide === index,
            })}
            key={slide.title}
          >
            <div
              className="slider__slide-content"
              style={{ margin: slide.margin }}
            >
              <h3 className="slider__slide-subheading">{slide.description}</h3>
              <h2 className="slider__slide-heading">
                {slide.title.split("").map((l, i) => (
                  <span key={i}>{l}</span>
                ))}
              </h2>
              <p className="slider__slide-readmore">
                <PrimaryButton>Shop Now</PrimaryButton>
              </p>
            </div>
            <div className="slider__slide-parts">
              {[...Array(IMAGE_PARTS)].map((x, i) => (
                <div className="slider__slide-part" key={i}>
                  <div
                    className="slider__slide-part-inner"
                    style={{ backgroundImage: `url(${slide.img})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="slider__control" onClick={() => changeSlides(-1)} />
      <div
        className="slider__control slider__control--right"
        onClick={() => changeSlides(1)}
      />
    </div>
  );
};

export default Slider;
