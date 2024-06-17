import React, { useEffect } from 'react';
import "./Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 900,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <footer className="page-footer footer-style-6">
      <div className="holder">
        <div className="footer-shop-info">
          <div className="container">
            <div className="text-icn-blocks-bg-row d-flex flex-wrap">
              <div className="text-icn-block-footer" data-aos="fade-down-right">
                <div className="icn">
                  <i className="fa-regular fa-cart-flatbed-boxes"></i>
                </div>
                <div className="text">
                  <h4>Extra fast delivery</h4>
                  <p>Your order will be delivered 3-5 business days after all of your items are available</p>
                </div>
              </div>
              <div className="text-icn-block-footer" data-aos="fade-down">
                <div className="icn">
                  <i className="fa-sharp fa-regular fa-coins"></i>
                </div>
                <div className="text">
                  <h4>Best price</h4>
                  <p>We'll match the product prices of key online and local competitors for immediately</p>
                </div>
              </div>
              <div className="text-icn-block-footer" data-aos="fade-down-left">
                <div className="icn">
                  <i className="fa-sharp fa-solid fa-file-certificate"></i>
                </div>
                <div className="text">
                  <h4>Guarantee</h4>
                  <p>If the item you want is available, we can process a return and place a new order</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-top">
        <div className="container">
          <div className="row mt-0">
            <div className="col-lg col-xl last-mobile col-no-collapsed" data-aos="fade-down">
              <div className="footer-block">
                <div className="footer-logo">
                  <a href="index.html">
                    <img
                      className="fade-up ls-is-cached lazyloaded"
                      src="https://big-skins.com/frontend/foxic-html-demo/images/logo-footer.webp"
                      alt="Logo"
                      srcSet="https://big-skins.com/frontend/foxic-html-demo/images/logo-footer.webp"
                    />
                  </a>
                </div>
                <div className="collapsed-content">
                  <ul>
                    <li>E-mail: <a href="mailto:Foxshop@gmail.com">Foxshop@gmail.com</a></li>
                    <li>Hours: 10:00 - 18:00, Mon - Fri</li>
                  </ul>
                </div>
                <ul className="social-list d-flex gap-2 mt-3">
                  <li>
                    <a href="#" className="icon icon-facebook">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon icon-instagram">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon icon-linkedin-in">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon icon-twitter">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon icon-google-plus-g">
                      <i className="fa-brands fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon icon-vimeo">
                      <i className="fa-brands fa-vimeo-v"></i>
                    </a>
                  </li>
                </ul>
                <div className="d-lg-none mt-3">
                  <div className="box-coupon">
                    <div className="box-coupon-icon">
                      <i className="fa-solid fa-scissors"></i>
                    </div>
                    <div className="box-coupon-text">
                      <span className="custom-color">FOXIC</span> THEME
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg col-xl" data-aos="fade-down">
              <div className="footer-block collapsed-mobile">
                <div className="title">
                  <h4>Information</h4>
                  <span className="toggle-arrow"><span></span><span></span></span>
                </div>
                <div className="collapsed-content">
                  <ul>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="typography.html">Terms &amp; Conditions</a></li>
                    <li><a href="typography.html">Returns &amp; Exchanges</a></li>
                    <li><a href="typography.html">Shipping &amp; Delivery</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg col-xl" data-aos="fade-down">
              <div className="footer-block collapsed-mobile">
                <div className="title">
                  <h4>Account details</h4>
                  <span className="toggle-arrow"><span></span><span></span></span>
                </div>
                <div className="collapsed-content">
                  <ul>
                    <li><a href="account-details.html">My Account</a></li>
                    <li><a href="cart.html">View Cart</a></li>
                    <li><a href="account-wishlist.html">My Wishlist</a></li>
                    <li><a href="account-history.html">Order Status</a></li>
                    <li><a href="account-history.html">Track My Order</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg col-xl" data-aos="fade-down">
              <div className="footer-block collapsed-mobile">
                <div className="title">
                  <h4>Safe payments</h4>
                  <span className="toggle-arrow"><span></span><span></span></span>
                </div>
                <div className="collapsed-content">
                  <ul className="payment-link">
                    <li><i className="fa-brands fa-google-pay"></i></li>
                    <li><i className="fa-brands fa-cc-visa"></i></li>
                    <li><i className="fa-brands fa-apple-pay"></i></li>
                  </ul>
                </div>
                <div className="d-none d-lg-block">
                  <div className="box-coupon">
                    <div className="box-coupon-icon"><i className="fa-solid fa-scissors"></i></div>
                    <div className="box-coupon-text"><span className="custom-color">FOXIC</span> THEME</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom footer-bottom--bg">
        <div className="container">
          <div className="footer-copyright text-center">
            <a href="#">FOXshop</a> ©2020 copyright
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
