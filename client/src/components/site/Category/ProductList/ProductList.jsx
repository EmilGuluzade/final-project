import React, { useContext, useState } from "react";
import MainContext from "../../../../context/context";
import ProductCard from "../../Cards/ProductCard/ProductCard";

const ProductList = () => {
  const { products } = useContext(MainContext);
  const [selectedFilters, setSelectedFilters] = useState([
    "Grey",
    "Men",
    "Above $200",
  ]);
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  return (
    <div class="holder">
      <div class="container">
        <div className="row">
        <div class="page-title text-center">
          <h1>PRODUCT’S</h1>
        </div>

        <div class=" my-5">
          <div class=" d-flex align-items-center gap-3 justify-content-end">
            <div class="items-count">35 item(s)</div>
            <div class="select-wrap align-items-center  d-md-flex">
              <div class="select-label">SORT BY PRICE:</div>

              <div class="select-wrapper select-wrapper-xxs">
                <select class="form-control input-sm">
                  <option value="default">default</option>
                  <option value="lowtohigh">low to high</option>
                  <option value="hightolow">high to low</option>
                </select>
              </div>
            </div>

            <div class="select-wrap align-items-center  d-md-flex">
              <div class="select-label">SORT BY RATING:</div>

              <div class="select-wrapper select-wrapper-xxs">
                <select class="form-control input-sm">
                  <option value="default">default</option>
                  <option value="lowtohigh">low to high</option>
                  <option value="hightolow">high to low</option>
                </select>
              </div>
            </div>
            <div class="select-wrap align-items-center  d-md-flex">
              <div class="select-label">SORT BY NAME:</div>

              <div class="select-wrapper select-wrapper-xxs">
                <select class="form-control input-sm">
                  <option value="default">default</option>
                  <option value="lowtohigh">A_Z</option>
                  <option value="hightolow">Z_A</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="col-3 ">
          <div className="sidebar-block">
            <div className="sidebar-block_title">
              <span>Filter By</span>
            </div>
          </div>

          <div
            className={`sidebar-block filter-group-block ${
              categoriesOpen ? "" : "collapsed"
            }`}
          >
            <div
              className="sidebar-block_title"
              onClick={() => setCategoriesOpen(!categoriesOpen)}
            >
              <span>Categories</span>
              <span className="toggle-arrow">
                <span></span>
                <span></span>
              </span>
            </div>
            {categoriesOpen && (
              <div className="sidebar-block_content">
                <ul className="category-list">
                  <li>
                    <a href="#" title="T-Shirts" className="open">
                      T-Shirts
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Medical" className="open">
                      Shoes
                    </a>
                  </li>
                  <li>
                    <a href="#" title="FoodMarket" className="open">
                      Jeans
                    </a>
                  </li>
                  <li>
                    <a href="#" title="T-Shirts" className="open">
                      Watch
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Medical" className="open">
                      Earring
                    </a>
                  </li>
                  <li>
                    <a href="#" title="FoodMarket" className="open">
                      Necklace
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div
            className={`sidebar-block filter-group-block ${
              brandsOpen ? "" : "collapsed"
            }`}
          >
            <div
              className="sidebar-block_title"
              onClick={() => setBrandsOpen(!brandsOpen)}
            >
              <span>Brands</span>
              <span className="toggle-arrow">
                <span></span>
                <span></span>
              </span>
            </div>

            {brandsOpen && (
              <div className="sidebar-block_content">
                <ul className="category-list">
                  <li>
                    <a href="#">Adidas</a>
                  </li>
                  <li>
                    <a href="#">Nike</a>
                  </li>
                  <li className="active">
                    <a href="#">Puma</a>
                  </li>
                  <li>
                    <a href="#">Rolex</a>
                  </li>
                  <li>
                    <a href="#">Casio</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div
            className={`sidebar-block filter-group-block ${
              collectionsOpen ? "" : "collapsed"
            }`}
          >
            <div
              className="sidebar-block_title"
              onClick={() => setCollectionsOpen(!collectionsOpen)}
            >
              <span>Collection</span>
              <span className="toggle-arrow">
                <span></span>
                <span></span>
              </span>
            </div>
            {collectionsOpen && (
              <div className="sidebar-block_content">
                <ul className="category-list">
                  <li>
                    <a href="#">Men</a>
                  </li>
                  <li>
                    <a href="#">Women</a>
                  </li>
                  <li className="active">
                    <a href="#">Accessories</a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <a
            href="#"
            className="bnr image-hover-scale bnr--bottom bnr--left fontratio-calc"
            style={{ fontSize: "73.4177px" }}
          >
            <div className="bnr-img">
              <img
                src="https://big-skins.com/frontend/foxic-html-demo/images/banners/banner-collection-aside.webp"
                alt=""
              />
            </div>
          </a>
        </div>

        <div className="col-9 d-flex flex-wrap">
            {
                products && products.map((item,index)=>(
                    <ProductCard key={index} data={item}></ProductCard>
                ))
            }
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
