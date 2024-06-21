import React, { useContext, useState } from "react";
import MainContext from "../../../../context/context";
import ProductCard from "../../Cards/ProductCard/ProductCard";

const ProductList = () => {
  const { products } = useContext(MainContext);
  const [sortConfig, setSortConfig] = useState({ field: null, asc: null });
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState(null);

  const handleSortChange = (field, asc) => {
    setSortConfig({ field, asc: asc === "true" ? true : asc === "false" ? false : null });
  };

  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case "category":
        setSelectedCategory(value);
        break;
      case "brand":
        setSelectedBrand(value);
        break;
      case "collection":
        setSelectedCollection(value);
        break;
      default:
        break;
    }
  };

  const filteredProducts = products ? products.filter((product) => {
    return (
      (!selectedCategory || product.category === selectedCategory) &&
      (!selectedBrand || product.brand === selectedBrand) &&
      (!selectedCollection || product.collection === selectedCollection)
    );
  }) : [];

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortConfig.field === null) {
      return 0;
    }
    if (sortConfig.field === "title") {
      if (sortConfig.asc) {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    } else {
      if (sortConfig.asc) {
        return a[sortConfig.field] > b[sortConfig.field] ? 1 : -1;
      } else {
        return a[sortConfig.field] < b[sortConfig.field] ? 1 : -1;
      }
    }
  });

  return (
    <div className="holder">
      <div className="container">
        <div className="row">
          <div className="page-title text-center">
            <h1>PRODUCT’S</h1>
          </div>

          <div className="my-5">
            <div className="d-flex align-items-center gap-3 justify-content-end">
              <div className="items-count">{sortedProducts.length} item(s)</div>
              <div className="select-wrap align-items-center d-md-flex">
                <div className="select-label">SORT BY PRICE:</div>
                <div className="select-wrapper select-wrapper-xxs">
                  <select
                    onChange={(e) => handleSortChange("price", e.target.value)}
                    className="form-control input-sm"
                    value={sortConfig.field === "price" ? sortConfig.asc : ""}
                  >
                    <option value={null}>default</option>
                    <option value={"true"}>low to high</option>
                    <option value={"false"}>high to low</option>
                  </select>
                </div>
              </div>
              <div className="select-wrap align-items-center d-md-flex">
                <div className="select-label">SORT BY RATING:</div>
                <div className="select-wrapper select-wrapper-xxs">
                  <select
                    onChange={(e) => handleSortChange("rating", e.target.value)}
                    className="form-control input-sm"
                    value={sortConfig.field === "rating" ? sortConfig.asc : ""}
                  >
                    <option value={null}>default</option>
                    <option value={"true"}>low to high</option>
                    <option value={"false"}>high to low</option>
                  </select>
                </div>
              </div>
              <div className="select-wrap align-items-center d-md-flex">
                <div className="select-label">SORT BY NAME:</div>
                <div className="select-wrapper select-wrapper-xxs">
                  <select
                    onChange={(e) => handleSortChange("title", e.target.value)}
                    className="form-control input-sm"
                    value={sortConfig.field === "title" ? sortConfig.asc : ""}
                  >
                    <option value={null}>default</option>
                    <option value={"true"}>A-Z</option>
                    <option value={"false"}>Z-A</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="sidebar-block">
              <div className="sidebar-block_title">
                <span>Filter By</span>
              </div>
            </div>
            <div
              className={`sidebar-block filter-group-block ${categoriesOpen ? "" : "collapsed"}`}
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
                      <a href="#" title="T-Shirts" className="open" onClick={() => handleFilterChange("category", "tShirt")}>
                        T-Shirts
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Shoes" className="open" onClick={() => handleFilterChange("category", "shoes")}>
                        Shoes
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Jeans" className="open" onClick={() => handleFilterChange("category", "jeans")}>
                        Jeans
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Watch" className="open" onClick={() => handleFilterChange("category", "watch")}>
                        Watch
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Earring" className="open" onClick={() => handleFilterChange("category", "earring")}>
                        Earring
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Necklace" className="open" onClick={() => handleFilterChange("category", "necklace")}>
                        Necklace
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div
              className={`sidebar-block filter-group-block ${brandsOpen ? "" : "collapsed"}`}
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
                      <a href="#" onClick={() => handleFilterChange("brand", "adidas")}>Adidas</a>
                    </li>
                    <li>
                      <a href="#" onClick={() => handleFilterChange("brand", "nike")}>Nike</a>
                    </li>
                    <li className="active">
                      <a href="#" onClick={() => handleFilterChange("brand", "puma")}>Puma</a>
                    </li>
                    <li>
                      <a href="#" onClick={() => handleFilterChange("brand", "rolex")}>Rolex</a>
                    </li>
                    <li>
                      <a href="#" onClick={() => handleFilterChange("brand", "Casio")}>Casio</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div
              className={`sidebar-block filter-group-block ${collectionsOpen ? "" : "collapsed"}`}
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
                      <a href="#" onClick={() => handleFilterChange("collection", "men")}>Men</a>
                    </li>
                    <li>
                      <a href="#" onClick={() => handleFilterChange("collection", "women")}>Women</a>
                    </li>
                    <li className="active">
                      <a href="#" onClick={() => handleFilterChange("collection", "accessories")}>Accessories</a>
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
            {sortedProducts.map((item, index) => (
              <ProductCard key={index} data={item}></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
