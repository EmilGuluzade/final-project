import React from 'react';
import { Link } from 'react-router-dom';

const BannerGrid = () => {
  return (
    <div className="holder holder-mt-medium">
      <div className="container">
        <div className="row vert-margin-small">
          <div className="col-sm">
            <Link to={"/category"} className="collection-grid-3-item image-hover-scale">
              <div className="collection-grid-3-item-img image-container" style={{ paddingBottom: '68.22%' }}>
                <img
                  src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/banner-category-01.webp"
                  data-src="images/skins/fashion/banner-category-01.webp"
                  className="fade-up ls-is-cached lazyloaded"
                  alt="Banner"
                />
                <div className="foxic-loader"></div>
              </div>
              <div className="collection-grid-3-caption-bg">
                <h3 className="collection-grid-3-title">Top</h3>
                <h4 className="collection-grid-3-subtitle">The Best Look</h4>
              </div>
            </Link>
          </div>
          <div className="col-sm">
            <Link to={"/category"} className="collection-grid-3-item image-hover-scale">
              <div className="collection-grid-3-item-img image-container" style={{ paddingBottom: '68.22%' }}>
                <img
                  src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/banner-category-02.webp"
                  data-src="images/skins/fashion/banner-category-02.webp"
                  className="fade-up ls-is-cached lazyloaded"
                  alt="Banner"
                />
                <div className="foxic-loader"></div>
              </div>
              <div className="collection-grid-3-caption-bg">
                <h3 className="collection-grid-3-title">Bottom</h3>
                <h4 className="collection-grid-3-subtitle">Live for Fashion</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerGrid;