import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Category = () => {

 

  useEffect(() => {
    if (window.innerWidth < 768) {
      const aosElements = document.querySelectorAll('[data-aos]');
      aosElements.forEach(el => {
        el.removeAttribute('data-aos');
      });
    }
    AOS.init({
      
      disable: window.innerWidth < 1024,
  
      duration: 900,
      easing: "ease-out-cubic",
    });

    
  }, []);
  return (
    <>
      <div class="holder holder-mt-xsmall">
        <div class="container">
          <div class="row vert-margin-small">
            <div class="col-sm " data-aos="fade-up">
              <Link
                to="/category"
                class="collection-grid-3-item image-hover-scale "
              >
                <div
                  class="collection-grid-3-item-img image-container"
                  style={{ "padding-bottom": "93.68%" }}
                >
                  <img
                    src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/banner-fashion-2-02.webp"
                    data-src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/banner-fashion-2-02.webp"
                    class="fade-up ls-is-cached lazyloaded"
                    alt="Banner"
                  />
                  <div class="foxic-loader"></div>
                </div>
                <div class="collection-grid-3-caption-bg">
                  <h3 class="collection-grid-3-title">Accessories</h3>
                  <h4 class="collection-grid-3-subtitle">
                    The&nbsp;Best&nbsp;Look&nbsp;Anywhere
                  </h4>
                </div>
              </Link>
            </div>
            <div class="col-sm " data-aos="fade-up">
              <Link
                to="/category"
                class="collection-grid-3-item image-hover-scale "
              >
                <div
                  class="collection-grid-3-item-img image-container"
                  style={{ "padding-bottom": "93.68%" }}
                >
                  <img
                    src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/banner-fashion-2-04.webp"
                    data-src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/banner-fashion-2-04.webp"
                    class="fade-up ls-is-cached lazyloaded"
                    alt="Banner"
                  />
                  <div class="foxic-loader"></div>
                </div>
                <div class="collection-grid-3-caption-bg">
                  <h3 class="collection-grid-3-title">Fashion</h3>
                  <h4 class="collection-grid-3-subtitle">
                    Live&nbsp;According&nbsp;to&nbsp;Fashion
                  </h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="holder holder-mt-medium">
        <div class="container">
          <ul class="brand-grid flex-wrap justify-content- js-color-hover-brand-grid">
            <li data-aos="fade-up">
              <a
                href="#"
                target="_self"
                class="d-block image-container"
                title="Brand"
              >
                <img
                  class="fade-up lazyloaded"
                  src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/brands/brand-fashion-06.webp"
                  data-src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/brands/brand-fashion-06.webp"
                  alt="Brand"
                />
              </a>
            </li>
            <li data-aos="fade-up">
              <a
                href="#"
                target="_self"
                class="d-block image-container"
                title="Brand"
              >
                <img
                  class="fade-up lazyloaded"
                  src="	https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/brands/brand-fashion-05.webp"
                  data-src="images/skins/fashion/brands/brand-fashion-05.webp"
                  alt="Brand"
                />
              </a>
            </li>
            <li data-aos="fade-up">
              <a
                href="#"
                target="_self"
                class="d-block image-container"
                title="Brand"
              >
                <img
                  class="fade-up lazyloaded"
                  src="	https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/brands/brand-fashion-04.webp"
                  data-src="images/skins/fashion/brands/brand-fashion-01.webp"
                  alt="Brand"
                />
              </a>
            </li>
            <li data-aos="fade-up">
              <a
                href="#"
                target="_self"
                class="d-block image-container"
                title="Brand"
              >
                <img
                  class="fade-up lazyloaded"
                  src="	https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/brands/brand-fashion-03.webp"
                  data-src="images/skins/fashion/brands/brand-fashion-02.webp"
                  alt="Brand"
                />
              </a>
            </li>
            <li class="js-hidden" data-aos="fade-up">
              <a
                href="#"
                target="_self"
                class="d-block image-container"
                title="Brand"
              >
                <img
                  class="fade-up lazyloaded"
                  src="	https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/brands/brand-fashion-02.webp"
                  data-src="images/skins/fashion/brands/brand-fashion-03.webp"
                  alt="Brand"
                />
              </a>
            </li>
            <li class="js-hidden" data-aos="fade-up">
              <a
                href="#"
                target="_self"
                class="d-block image-container"
                title="Brand"
              >
                <img
                  class="fade-up lazyloaded"
                  src="	https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/brands/brand-fashion-01.webp"
                  data-src="images/skins/fashion/brands/brand-fashion-04.webp"
                  alt="Brand"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Category;
