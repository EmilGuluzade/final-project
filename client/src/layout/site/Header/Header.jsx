import React, { useContext, useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import MainContext from "../../../context/context"
import QuickLogin from "../../../components/site/Home/QuickLogin/QuickLogin";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSidebar, setIsSidebar] = useState(false);
  const [isCardBar, setIsCardbar] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const {basket }=useContext(MainContext)
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
                  <a href="">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-google-plus-g"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-vimeo-v"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="hdr-top__center col-lg-4 js align-items-center ">
              Use promocode FOXIC to get 15% discount!
            </div>
            <div className="hdr-top__right col-lg-4">
              <Link  onClick={()=>setIsOpen(true)} className="account-link" to="/login">
                <i class="fa-regular fa-user"></i> Account
              </Link>
            </div>
          </div>
        </div>
      </header>
      <header
        style={
          isScroll
            ? { position: "fixed", width: "100%", top: "0" }
            : { position: "static" }
        }
        className="hdr-bottom"
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="hdr-bottom__logo col-lg-4 col-6">
              <i
                onClick={() => setIsSidebar(!isSidebar)}
                class="fa-solid fa-bars"
              ></i>
              <Link to="/">
                <img
                  src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/logo.webp"
                  alt=""
                />
              </Link>
            </div>
            <div className="hdr-bottom__nav col-lg-4">
              <ul className="">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="pages">
                  <Link
                    onClick={() => {
                      setIsDrop(!isDrop);
                    }}
                    to="#"
                  >
                    Pages <i class="fa-solid fa-chevron-down"></i>
                  </Link>{" "}
                  <ul className={"pages_dropdown"}>
                    <li>
                      <Link to="/category">Category</Link>
                    </li>
                    <li>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/login">Account</Link>
                    </li>
                    <li>
                      <Link to="/basket">Cart</Link>
                    </li>
                    <li>
                      <Link to="/checkout"> Checkout</Link>
                    </li>
                    <li>
                      <Link to="/wishlist">Wishlist</Link>
                    </li>
                    <li>
                      <Link to="/faq"> FAQ</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <ul className="hdr-bottom__right col-lg-4 col-6">
              <li>
                <Link to="#" onClick={() => setIsSearch(!isSearch)}>
                  <i class="fa-thin fa-magnifying-glass"></i>
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="counter-wrapper">
                  <i class="fa-thin fa-heart"></i>
                  <div className="counter">2</div>
                </Link>
              </li>
              <li className="profile">
                <Link onClick={()=>isOpen(true)} >
                  <i class="fa-thin fa-user"></i>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsCardbar(true)}
                  to="#"
                  className="counter-wrapper"
                >
                  <i class="fa-thin fa-basket-shopping"></i>
                  <div className=" total-price">12$</div>
                  <div className="counter">2</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {isSearch ? (
          <div className="search-div">
            <div className="container">
              <input type="text" placeholder="What are you looking for?" />
              <i
                onClick={() => setIsSearch(!isSearch)}
                class="fa-solid fa-x "
              ></i>
            </div>
          </div>
        ) : (
          ""
        )}
      </header>
      <div
        onClick={() => setIsSidebar(false)}
        className={isSidebar ? "sidebar-owerlay" : ""}
      >
        <aside
          className={
            isSidebar ? "sidebar-content sidebar-close " : "sidebar-content "
          }
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
              <Link onClick={() => setIsSidebar(false)} to={"/"}>
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
                {" "}
                Checkout
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsSidebar(false)} to="/wishlist">
                Wishlist
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsSidebar(false)} to="/faq">
                {" "}
                FAQ
              </Link>
            </li>
          </ul>
        </aside>
      </div>
     

      <div
        class= {isCardBar?"dropdn-content cardbar minicart-drop is-opened" : "dropdn-content cardbar minicart-drop cardbar-close"}   
        id="dropdnMinicart"
      >
        <div class="dropdn-content-block">
          <div class="dropdn-close">
            <span   onClick={() => setIsCardbar(false)} class="js-dropdn-close">Close</span>
          </div>
          <div
            class="minicart-drop-content js-dropdn-content-scroll ps ps--theme_default"
            data-ps-id="adb25dd1-744d-5359-3f8a-6fe5ab7d0d25"
          >
          <div className="card-scroll">
            {
              basket.lemgth>0 ? ( 
                <> 
              <div class="minicart-prd row">
              <div class="minicart-prd-image image-hover-scale-circle col">
                <a href="product.html">
                  <img
                    class="fade-up ls-is-cached lazyloaded"
                    src="	https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-01-1.webp"
                    data-src="images/skins/fashion/products/product-01-1.webp"
                    alt=""
                  />
                </a>
              </div>
              <div class="minicart-prd-info col">
                <div class="minicart-prd-tag">FOXic</div>
                <h2 class="minicart-prd-name">
                  <a href="#">Leather Pegged Pants</a>
                </h2>
                <div class="minicart-prd-qty">
                  <span class="minicart-prd-qty-label">Quantity:</span>
                  <span class="minicart-prd-qty-value">1</span>
                </div>
                <div class="minicart-prd-price prd-price">
                  <div class="price-old">$200.00</div>
                  <div class="price-new">$180.00</div>
                </div>
              </div>
              <div class="minicart-prd-action">
                <a href="#" class="js-product-remove" data-line-number="1">
                  <i class="icon-recycle"></i>
                </a>
              </div>
            </div>
            <div class="minicart-prd row">
              <div class="minicart-prd-image image-hover-scale-circle col">
                <a href="product.html">
                  <img
                    class="fade-up ls-is-cached lazyloaded"
                    src="	https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-01-1.webp"
                    data-src="images/skins/fashion/products/product-16-1.webp"
                    alt=""
                  />
                </a>
              </div>
              <div class="minicart-prd-info col">
                <div class="minicart-prd-tag">FOXic</div>
                <h2 class="minicart-prd-name">
                  <a href="#">Cascade Casual Shirt</a>
                </h2>
                <div class="minicart-prd-qty">
                  <span class="minicart-prd-qty-label">Quantity:</span>
                  <span class="minicart-prd-qty-value">1</span>
                </div>
                <div class="minicart-prd-price prd-price">
                  <div class="price-old">$200.00</div>
                  <div class="price-new">$180.00</div>
                </div>
              </div>
              <div class="minicart-prd-action">
                <a href="#" class="js-product-remove" data-line-number="2">
                  <i class="icon-recycle"></i>
                </a>
              </div>
            </div> 
            </>
            ):( 
              <div class="minicart-empty js-minicart-empty ">
              <div class="minicart-empty-text">Your cart is empty</div>
              <div class="minicart-empty-icon">
                <i class="fa-light fa-bag-shopping icon-shopping-bag "></i>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 306 262"
                  style={{ "enable-background": "new 0 0 306 262" }}
                  xml:space="preserve"
                >
                  <path
                    class="st0"
                    d="M78.1,59.5c0,0-37.3,22-26.7,85s59.7,237,142.7,283s193,56,313-84s21-206-69-240s-249.4-67-309-60C94.6,47.6,78.1,59.5,78.1,59.5z"
                  ></path>
                </svg>
              </div>
            </div>
            )
            }
          </div>
           
            
           
           
            
          </div>
          <div class="minicart-drop-fixed js-hide-empty">
            <div
              class="loader-horizontal-sm js-loader-horizontal-sm"
              data-loader-horizontal=""
            >
              <span></span>
            </div>
            <div class="minicart-drop-total js-minicart-drop-total row no-gutters align-items-center">
              <div class="minicart-drop-total-txt col-auto heading-font">
                Subtotal
              </div>
              <div
                class="minicart-drop-total-price col"
                data-header-cart-total=""
              >
                $340
              </div>
            </div>
            <div class="minicart-drop-actions">
              <Link to="/basket" class="btn btn--md btn--grey">
                <i class="icon-basket"></i>
                <span>Cart Page</span>
              </Link>
              <Link to="/checkout" class="btn btn--md">
                <i class="icon-checkout"></i>
                <span>Check out</span>
              </Link>
            </div>
            <ul class="payment-link mb-2">
              <li>
                <i class="fa-brands fa-amazon icon-amazon-logo"></i>
              </li>
              <li>
                <i class="fa-brands fa-cc-visa icon-visa-pay-logo"></i>
              </li>
              
              <li>
                <i class="fa-brands fa-cc-paypal icon-paypal-logo"></i>
              </li>
              <li>
                <i class="fa-brands fa-google-pay icon-apple-pay-logo"></i>
              </li>
            </ul>
          </div>
       
      
        
      </div>
      </div>

      <QuickLogin isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  );
};

export default Header;
