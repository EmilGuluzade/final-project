import React from "react";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";

const Trends = () => {
  return (
    <div class="holder holder-mt-medium ">
      <div class="container">
        <a href="https://bit.ly/3eJX5XE" target="_blank" class="bnr-wrap bnr-">
          <div class="bnr custom-caption image-hover-scale bnr--middle bnr--right bnr--fullwidth">
            <div
              class="bnr-img d-none d-sm-block image-container"
              style={{ "padding-bottom": "41.36752136752137%" }}
            >
              <img
			  data-aos="fade-right"
                src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/banner-fashion2-full.webp"
                data-src="images/skins/fashion/banner-fashion2-full.webp"
                class="fade-up ls-is-cached lazyloaded"
                alt=""
              />
            </div>
            <div
              class="bnr-img d-sm-none image-container"
              style={{ "padding-bottom": "74.3139407244786%" }}
            >
              <img
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                data-src="images/skins/fashion/banner-fashion2-full-m.webp"
                class="lazyload fade-up"
                alt=""
              />
            </div>
            <div class="bnr-caption text-center" style={{ padding: "4% 4%" }}>
              <div class="bnr-caption-inside w-s-50 w-ms-100 title-wrap">
                <h2 class="h1-style" data-aos="fade-down">
                  The best trends
                  <br class="d-sm-none" /> of summer 2020
                </h2>
                <div class="h-sub mt-0"   data-aos="zoom-out">eCommerce HTML Template</div>
                <div class="bnr-btn inherit mt-sm order-3" data-aos="fade-up">
                  <PrimaryButton>Buy Now</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Trends;
