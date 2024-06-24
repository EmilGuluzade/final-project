import React, { useContext, useState } from "react";
import MainContext from "../../../../context/context";
import ProductCard from "../../Cards/ProductCard/ProductCard";

const ProductList = () => {
  const { products } = useContext(MainContext);
  const [sortConfig, setSortConfig] = useState({ field: null, asc: null });
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8); // Initial number of products to display

  const handleSortChange = (field, asc) => {
    setSortConfig({
      field,
      asc: asc === "true" ? true : asc === "false" ? false : null,
    });
  };

  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case "category":
        setSelectedCategories((prev) =>
          prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value]
        );
        break;
      case "brand":
        setSelectedBrands((prev) =>
          prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value]
        );
        break;
      case "collection":
        setSelectedCollections((prev) =>
          prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value]
        );
        break;
      default:
        break;
    }
  };

  const handleSelectAll = (filterType) => {
    switch (filterType) {
      case "category":
        setSelectedCategories([]);
        break;
      case "brand":
        setSelectedBrands([]);
        break;
      case "collection":
        setSelectedCollections([]);
        break;
      default:
        break;
    }
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 8); // Increase the number of visible products by 8
  };

  const filteredProducts = products
    ? products.filter((product) => {
        return (
          (selectedCategories.length === 0 ||
            selectedCategories.includes(product.category)) &&
          (selectedBrands.length === 0 ||
            selectedBrands.includes(product.brand)) &&
          (selectedCollections.length === 0 ||
            selectedCollections.includes(product.collections))
        );
      })
    : [];

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
                      <input
                        type="checkbox"
                        id="category-all"
                        name="category"
                        value="all"
                        checked={selectedCategories.length === 0}
                        onChange={() => handleSelectAll("category")}
                      />
                      <label htmlFor="category-all">All</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="category-t-shirt"
                        name="category"
                        value="t-shirt"
                        checked={selectedCategories.includes("t-shirt")}
                        onChange={() =>
                          handleFilterChange("category", "t-shirt")
                        }
                      />
                      <label htmlFor="category-t-shirt">T-Shirts</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="category-shoes"
                        name="category"
                        value="shoes"
                        checked={selectedCategories.includes("shoes")}
                        onChange={() => handleFilterChange("category", "shoes")}
                      />
                      <label htmlFor="category-shoes">Shoes</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="category-jeans"
                        name="category"
                        value="jeans"
                        checked={selectedCategories.includes("jeans")}
                        onChange={() => handleFilterChange("category", "jeans")}
                      />
                      <label htmlFor="category-jeans">Jeans</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="category-watch"
                        name="category"
                        value="watch"
                        checked={selectedCategories.includes("watch")}
                        onChange={() => handleFilterChange("category", "watch")}
                      />
                      <label htmlFor="category-watch">Watch</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="category-earring"
                        name="category"
                        value="earring"
                        checked={selectedCategories.includes("earring")}
                        onChange={() =>
                          handleFilterChange("category", "earring")
                        }
                      />
                      <label htmlFor="category-earring">Earring</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="category-necklace"
                        name="category"
                        value="necklace"
                        checked={selectedCategories.includes("necklace")}
                        onChange={() =>
                          handleFilterChange("category", "necklace")
                        }
                      />
                      <label htmlFor="category-necklace">Necklace</label>
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
                      <input
                        type="checkbox"
                        id="brand-all"
                        name="brand"
                        value="all"
                        checked={selectedBrands.length === 0}
                        onChange={() => handleSelectAll("brand")}
                      />
                      <label htmlFor="brand-all">All</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="brand-nike"
                        name="brand"
                        value="nike"
                        checked={selectedBrands.includes("nike")}
                        onChange={() => handleFilterChange("brand", "nike")}
                      />
                      <label htmlFor="brand-nike">Nike</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="brand-adidas"
                        name="brand"
                        value="adidas"
                        checked={selectedBrands.includes("adidas")}
                        onChange={() => handleFilterChange("brand", "adidas")}
                      />
                      <label htmlFor="brand-adidas">Adidas</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="brand-levis"
                        name="brand"
                        value="levis"
                        checked={selectedBrands.includes("levis")}
                        onChange={() => handleFilterChange("brand", "levis")}
                      />
                      <label htmlFor="brand-levis">Levi's</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="brand-puma"
                        name="brand"
                        value="puma"
                        checked={selectedBrands.includes("puma")}
                        onChange={() => handleFilterChange("brand", "puma")}
                      />
                      <label htmlFor="brand-puma">Puma</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="brand-casio"
                        name="brand"
                        value="casio"
                        checked={selectedBrands.includes("casio")}
                        onChange={() => handleFilterChange("brand", "casio")}
                      />
                      <label htmlFor="brand-casio">Casio</label>
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
                <span>Collections</span>
                <span className="toggle-arrow">
                  <span></span>
                  <span></span>
                </span>
              </div>
              {collectionsOpen && (
                <div className="sidebar-block_content">
                  <ul className="category-list">
                    <li>
                      <input
                        type="checkbox"
                        id="collection-all"
                        name="collection"
                        value="all"
                        checked={selectedCollections.length === 0}
                        onChange={() => handleSelectAll("collection")}
                      />
                      <label htmlFor="collection-all">All</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="collection-spring"
                        name="collection"
                        value="spring"
                        checked={selectedCollections.includes("spring")}
                        onChange={() =>
                          handleFilterChange("collection", "spring")
                        }
                      />
                      <label htmlFor="collection-spring">Spring</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="collection-summer"
                        name="collection"
                        value="summer"
                        checked={selectedCollections.includes("summer")}
                        onChange={() =>
                          handleFilterChange("collection", "summer")
                        }
                      />
                      <label htmlFor="collection-summer">Summer</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="collection-fall"
                        name="collection"
                        value="fall"
                        checked={selectedCollections.includes("fall")}
                        onChange={() =>
                          handleFilterChange("collection", "fall")
                        }
                      />
                      <label htmlFor="collection-fall">Fall</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="collection-winter"
                        name="collection"
                        value="winter"
                        checked={selectedCollections.includes("winter")}
                        onChange={() =>
                          handleFilterChange("collection", "winter")
                        }
                      />
                      <label htmlFor="collection-winter">Winter</label>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <a
              href="#"
              className="bnr image-hover-scale bnr--bottom bnr--left fontratio-calc mt-5"
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
            {sortedProducts.slice(0, visibleProducts).map((item, index) => (
              <ProductCard key={index} data={item}></ProductCard>
            ))}
            {visibleProducts < sortedProducts.length && (
              <div className="load-more-container">
                <button className="btn btn-primary" onClick={loadMoreProducts}>
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
