import React, { useContext, useState, useEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import MainContext from "../../../context/context";
import QuickLogin from "../../../components/site/Home/QuickLogin/QuickLogin";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);
  const [isCardBar, setIsCardBar] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const { basket, user } = useContext(MainContext);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScroll(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 
  return (
    <>
      <header className="hdr-top">
        <div className="container">
          <div className="row">
            <div className="hdr-top__left col-lg-4">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-google-plus-g"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-vimeo-v"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="hdr-top__center col-lg-4 js align-items-center">
              Use promocode FOXIC to get 15% discount!
            </div>
            <div className="hdr-top__right col-lg-4">
              <Link
                onClick={() => setIsOpen(true)}
                className="account-link"
                to="#"
              >
                <i className="fa-regular fa-user"></i> Account
              </Link>
            </div>
          </div>
        </div>
      </header>
      <header className={`hdr-bottom ${isScroll ? "fixed-header" : ""}`} style={
          isScroll
            ? { position: "fixed", width: "100%", top: "0" }
            : { position: "static" }
        }>
        <div className="container">
          <div className="row justify-content-between">
            <div className="hdr-bottom__logo col-lg-4 col-6">
              <i
                onClick={() => setIsSidebar(!isSidebar)}
                className="fa-solid fa-bars"
              ></i>
              <Link to="/">
                <img
                  src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/logo.webp"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="hdr-bottom__nav col-lg-4">
              <ul>
                <li>
                  <Link onClick={() => setIsOpen(false)} to="/">
                    Home
                  </Link>
                </li>
                <li className="pages">
                  <Link to="#">
                    Pages <i className="fa-solid fa-chevron-down"></i>
                  </Link>
                  <ul className="pages_dropdown">
                    <li>
                      <Link onClick={() => setIsOpen(false)} to="/category">
                        Category
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => setIsOpen(false)} to="/gallery">
                        Gallery
                      </Link>
                    </li>

                    {user.id && (
                      <>
                        <li>
                          <Link onClick={() => setIsOpen(false)} to="/accountdetails">
                            Account
                          </Link>
                        </li>
                        <li>
                          <Link onClick={() => setIsOpen(false)} to="/basket">
                            Cart
                          </Link>
                        </li>
                        <li>
                          <Link onClick={() => setIsOpen(false)} to="/checkout">
                            Checkout
                          </Link>
                        </li>
                        <li>
                          <Link onClick={() => setIsOpen(false)} to="/wishlist">
                            Wishlist
                          </Link>
                        </li>
                      </>
                    )}

                    <li>
                      <Link onClick={() => setIsOpen(false)} to="/faq">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link onClick={() => setIsOpen(false)} to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsOpen(false)} to="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsOpen(false)} to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="hdr-bottom__right col-lg-4 col-6">
              <li>
                <Link to="#" onClick={() => setIsSearch(!isSearch)}>
                  <i className="fa-thin fa-magnifying-glass"></i>
                </Link>
              </li>
              {user.id && (
                <li>
                  <Link to="/wishlist" className="counter-wrapper">
                    <i className="fa-thin fa-heart"></i>
                    <div className="counter">2</div>
                  </Link>
                </li>
              )}

              <li className="profile">
                <Link to={"#"} onClick={() => setIsOpen(true)}>
                  <i className="fa-thin fa-user"></i>
                </Link>
              </li>

              {user.id && (
                <li>
                  <Link
                    onClick={() => setIsCardBar(true)}
                    to="#"
                    className="counter-wrapper"
                  >
                    <i className="fa-thin fa-basket-shopping"></i>
                    <div className="total-price">12$</div>
                    <div className="counter">2</div>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        {isSearch && (
          <div className="search-div">
            <div className="container">
              <input type="text" placeholder="What are you looking for?" />
              <i
                onClick={() => setIsSearch(!isSearch)}
                className="fa-solid fa-x"
              ></i>
            </div>
          </div>
        )}
      </header>
      <div
        onClick={() => setIsSidebar(false)}
        className={isSidebar ? "sidebar-overlay" : ""}
      >
        <aside
          className={`sidebar-content ${isSidebar ? "sidebar-close" : ""}`}
        >
          <a
            className="close-btn"
            href="#"
            onClick={() => setIsSidebar(!isSidebar)}
          >
            Close
          </a>
          <ul>
            <li>
              <Link onClick={() => setIsSidebar(false)} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsSidebar(false)} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsSidebar(false)} to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsSidebar(false)} to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsSidebar(false)} to="/category">
                Category
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsSidebar(false)} to="/gallery">
                Gallery
              </Link>
            </li>
            {user.id && (
              <>
                <li>
                  <Link onClick={() => setIsSidebar(false)} to="/login">
                    Account
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsSidebar(false)} to="/basket">
                    Cart
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsSidebar(false)} to="/checkout">
                    Checkout
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsSidebar(false)} to="/wishlist">
                    Wishlist
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link onClick={() => setIsSidebar(false)} to="/faq">
                FAQ
              </Link>
            </li>
          </ul>
        </aside>
      </div>

      <div
        className={`dropdn-content cardbar minicart-drop ${
          isCardBar ? "is-opened" : "cardbar-close"
        }`}
        id="dropdnMinicart"
      >
        <div className="dropdn-content-block">
          <div className="dropdn-close">
            <span
              onClick={() => setIsCardBar(false)}
              className="js-dropdn-close"
            >
              Close
            </span>
          </div>
          <div className="minicart-drop-content js-dropdn-content-scroll ps ps--theme_default">
            <div className="card-scroll">
              {basket.length > 0 ? (
                <>
                  <div className="minicart-prd row">
                    <div className="minicart-prd-image image-hover-scale-circle col">
                      <a href="product.html">
                        <img
                          className="fade-up ls-is-cached lazyloaded"
                          src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-01-1.webp"
                          data-src="images/skins/fashion/products/product-01-1.webp"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="minicart-prd-info col">
                      <div className="minicart-prd-tag">FOXic</div>
                      <h2 className="minicart-prd-name">
                        <a href="#">Leather Pegged Pants</a>
                      </h2>
                      <div className="minicart-prd-qty">
                        <span className="minicart-prd-qty-label">
                          Quantity:
                        </span>
                        <span className="minicart-prd-qty-value">1</span>
                      </div>
                      <div className="minicart-prd-price prd-price">
                        <div className="price-old">$200.00</div>
                        <div className="price-new">$180.00</div>
                      </div>
                    </div>
                    <div className="minicart-prd-action">
                      <a
                        href="#"
                        className="js-product-remove"
                        data-line-number="1"
                      >
                        <i className="icon-recycle"></i>
                      </a>
                    </div>
                  </div>
                  <div className="minicart-prd row">
                    <div className="minicart-prd-image image-hover-scale-circle col">
                      <a href="product.html">
                        <img
                          className="fade-up ls-is-cached lazyloaded"
                          src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-01-1.webp"
                          data-src="images/skins/fashion/products/product-16-1.webp"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="minicart-prd-info col">
                      <div className="minicart-prd-tag">FOXic</div>
                      <h2 className="minicart-prd-name">
                        <a href="#">Cascade Casual Shirt</a>
                      </h2>
                      <div className="minicart-prd-qty">
                        <span className="minicart-prd-qty-label">
                          Quantity:
                        </span>
                        <span className="minicart-prd-qty-value">1</span>
                      </div>
                      <div className="minicart-prd-price prd-price">
                        <div className="price-old">$200.00</div>
                        <div className="price-new">$180.00</div>
                      </div>
                    </div>
                    <div className="minicart-prd-action">
                      <a
                        href="#"
                        className="js-product-remove"
                        data-line-number="2"
                      >
                        <i className="icon-recycle"></i>
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <div className="minicart-empty js-minicart-empty">
                  <div className="minicart-empty-text">Your cart is empty</div>
                  <div className="minicart-empty-icon">
                    <i className="fa-light fa-bag-shopping icon-shopping-bag"></i>
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 306 262"
                      style={{ enableBackground: "new 0 0 306 262" }}
                      xmlSpace="preserve"
                    >
                      <path
                        className="st0"
                        d="M78.1,59.5c0,0-37.3,22-26.7,85s59.7,237,142.7,283s193,56,313-84s21-206-69-240s-249.4-67-309-60C94.6,47.6,78.1,59.5,78.1,59.5z"
                      ></path>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="minicart-drop-fixed js-hide-empty">
            <div
              className="loader-horizontal-sm js-loader-horizontal-sm"
              data-loader-horizontal=""
            >
              <span></span>
            </div>
            <div className="minicart-drop-total js-minicart-drop-total row no-gutters align-items-center">
              <div className="minicart-drop-total-txt col-auto heading-font">
                Subtotal
              </div>
              <div
                className="minicart-drop-total-price col"
                data-header-cart-total=""
              >
                $340
              </div>
            </div>
            <div className="minicart-drop-actions">
              <Link to="/basket" className="btn btn--md btn--grey">
                <i className="icon-basket"></i>
                <span>Cart Page</span>
              </Link>
              <Link to="/checkout" className="btn btn--md">
                <i className="icon-checkout"></i>
                <span>Check out</span>
              </Link>
            </div>
            <ul className="payment-link mb-2">
              <li>
                <i className="fa-brands fa-amazon icon-amazon-logo"></i>
              </li>
              <li>
                <i className="fa-brands fa-cc-visa icon-visa-pay-logo"></i>
              </li>
              <li>
                <i className="fa-brands fa-cc-paypal icon-paypal-logo"></i>
              </li>
              <li>
                <i className="fa-brands fa-google-pay icon-apple-pay-logo"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <QuickLogin isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
