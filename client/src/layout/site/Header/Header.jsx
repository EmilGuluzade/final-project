import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
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
              <Link className="account-link" to="/login">
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
                      <Link to="/basket">Cart & Checkout</Link>
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
                  <span className="counter">2</span>
                </Link>
              </li>
              <li className="profile">
                <Link to="/login">
                  <i class="fa-thin fa-user"></i>
                </Link>
              </li>
              <li>
                <Link to="/basket" className="counter-wrapper">
                  <i class="fa-thin fa-basket-shopping"></i>
                  <div className=" total-price">12$</div>
                  <span className="counter">2</span>
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
    </>
  );
};

export default Header;
