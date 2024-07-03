import React, { useEffect } from "react";
import "./Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Footer = () => {
  // useEffect(() => {
  //   AOS.init({
  //     disable: "phone",
  //     duration: 900,
  //     easing: "ease-out-cubic",
  //   });
  // }, []);

  return (
    <footer className="page-footer footer-style-6">
      <div className="holder">
        <div className="footer-shop-info">
          <div className="container">
            <div className="text-icn-blocks-bg-row d-flex flex-wrap">
              <div className="text-icn-block-footer" >
                <div className="icn">
                  <i className="fa-regular fa-cart-flatbed-boxes"></i>
                </div>
                <div className="text">
                  <h4>Extra fast delivery</h4>
                  <p>
                    Your order will be delivered 3-5 business days after all of
                    your items are available
                  </p>
                </div>
              </div>
              <div className="text-icn-block-footer" >
                <div className="icn">
                  <i className="fa-sharp fa-regular fa-coins"></i>
                </div>
                <div className="text">
                  <h4>Best price</h4>
                  <p>
                    We'll match the product prices of key online and local
                    competitors for immediately
                  </p>
                </div>
              </div>
              <div className="text-icn-block-footer">
                <div className="icn">
                  <i className="fa-sharp fa-solid fa-file-certificate"></i>
                </div>
                <div className="text">
                  <h4>Guarantee</h4>
                  <p>
                    If the item you want is available, we can process a return
                    and place a new order
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div className="footer2">
        <div className="container">
          <div className="foxic-footer">
            <img
              src="https://big-skins.com/frontend/foxic-html-demo/images/logo-footer.webp"
              alt=""
            />
            <Link>E-mail: Foxshop@gmail.com</Link>
            <Link>Hours: 10:00 - 18:00, Mon - Fri</Link>
            <div className="iconss">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-google-plus-g"></i>
              <i class="fa-brands fa-vimeo-v"></i>
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-pinterest-p"></i>
            </div>
          </div>
          <div className="information-footer">
            <h6>Information</h6>
            <ul>
              <li>
                <Link >About Us</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
              <li>
                <Link>Terms & Conditions</Link>
              </li>
              <li>
                <Link>Returns & Exchanges</Link>
              </li>
              <li>
                <Link>Shipping & Delivery</Link>
              </li>
            </ul>
          </div>
          <div className="information-footer">
            <h6>Account details</h6>
            <ul>
              <li>
                <Link>My Account</Link>
              </li>
              <li>
                {" "}
                <Link>View Cart</Link>
              </li>
              <li>
                {" "}
                <Link>My Wishlist</Link>
              </li>
              <li>
                <Link>Order Status</Link>
              </li>
              <li>
                {" "}
                <Link>Track My Order</Link>
              </li>
            </ul>
          </div>
          <div className="safe-payments">
            <h6>Safe payments</h6>
            <div className="google-visa">
              <i class="fa-brands fa-google-pay"></i>
              <i class="fa-brands fa-cc-visa"></i>
              <i class="fa-brands fa-apple-pay"></i>
            </div>
            <div className="foxic-theme">
              <i class="fa-regular fa-scissors"></i>
              <div className="spans">
                <span id="foxic">FOXIC</span>
                <span id="theme">THEME</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer3">
        <div className="container">
          <span>FOXshop ©2020 copyright</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
