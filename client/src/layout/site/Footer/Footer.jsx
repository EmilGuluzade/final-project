import React, { useEffect } from 'react'
import "./Footer.css"
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
    <footer class="page-footer footer-style-6 ">
	<div class="holder ">
		<div class="footer-shop-info">
			<div class="container">
				<div class="text-icn-blocks-bg-row d-flex flex-wrap">
					<div class="text-icn-block-footer "  data-aos="fade-down-right">
						<div class="icn">
            <i class="fa-regular fa-cart-flatbed-boxes"></i>
						</div>
						<div class="text">
							<h4>Extra fast delivery</h4>
							<p>Your order will be delivered 3-5 business days after all of your items are available</p>
						</div>
					</div>
					<div class="text-icn-block-footer " data-aos="fade-down">
						<div class="icn">
            <i class="fa-sharp fa-regular fa-coins"></i>
						</div>
						<div class="text">
							<h4>Best price</h4>
							<p>We'll match the product prices of key online and local competitors for immediately</p>
						</div>
					</div>
					<div class="text-icn-block-footer " data-aos="fade-down-left">
						<div class="icn">
							<i class="fa-sharp fa-solid fa-file-certificate"></i>
						</div>
						<div class="text">
							<h4>Guarantee</h4>
							<p>If the item you want is available, we can process a return and place a new order</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footer-top">
		<div class="container">
			<div class="row mt-0">
				<div class="col-lg col-xl last-mobile col-no-collapsed" data-aos="fade-down">
					<div class="footer-block">
						<div class="footer-logo">
							<a href="index.html"><img class="fade-up ls-is-cached lazyloaded" src="https://big-skins.com/frontend/foxic-html-demo/images/logo-footer.webp" alt="Logo" srcset="https://big-skins.com/frontend/foxic-html-demo/images/logo-footer.webp"/></a>
						</div>
						<div class="collapsed-content">
							<ul>
								<li>E-mail: <a href="mailto:Foxshop@gmail.com">Foxshop@gmail.com</a></li>
								<li>Hours: 10:00 - 18:00, Mon - Fri</li>
							</ul>
						</div>
						<ul class="social-list d-flex gap-2 mt-3">
	<li>
		<a href="#" class="icon icon-facebook">  <i className="fa-brands fa-facebook-f"></i></a>
	</li>
	<li>
		<a href="#" class="icon icon-twitter"> <i className="fa-brands fa-instagram"></i></a>
	</li>
	<li>
		<a href="#" class="icon icon-google">                    <i className="fa-brands fa-linkedin-in"></i></a>
	</li>
	<li>
		<a href="#" class="icon icon-vimeo"> <i className="fa-brands fa-twitter"></i></a>
	</li>
	<li>
		<a href="#" class="icon icon-youtube"> <i className="fa-brands fa-google-plus-g"></i></a>
	</li>
	<li>
		<a href="#" class="icon icon-pinterest">   <i className="fa-brands fa-vimeo-v"></i></a>
	</li>
</ul>
						<div class="d-lg-none mt-3">
							<div class="box-coupon">
								<div class="box-coupon-icon"><i class="fa-solid fa-scissors"></i></div>
								<div class="box-coupon-text"><span class="custom-color">FOXIC</span> THEME</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg col-xl" data-aos="fade-down">
					<div class="footer-block collapsed-mobile">
						<div class="title">
							<h4>Information</h4>
							<span class="toggle-arrow"><span></span><span></span></span>
						</div>
						<div class="collapsed-content ">
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
				<div class="col-lg col-xl" data-aos="fade-down">
					<div class="footer-block collapsed-mobile">
						<div class="title">
							<h4>Account details</h4>
							<span class="toggle-arrow"><span></span><span></span></span>
						</div>
						<div class="collapsed-content">
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
				<div class="col-lg col-xl" data-aos="fade-down">
					<div class="footer-block collapsed-mobile">
						<div class="title">
							<h4>Safe payments</h4>
							<span class="toggle-arrow"><span></span><span></span></span>
						</div>
						<div class="collapsed-content">
							<ul class="payment-link">
								<li> <i class=" icon-google-pay-logo fa-brands fa-google-pay"></i></li>
								<li><i class="icon-visa-pay-logo fa-brands fa-cc-visa"></i> </li>
								<li><i class=" icon-google-apple-logo fa-brands fa-apple-pay"></i></li>
							</ul>
						</div>
						<div class="d-none d-lg-block">
							<div class="box-coupon">
								<div class="box-coupon-icon"><i class="fa-solid fa-scissors"></i></div>
								<div class="box-coupon-text"><span class="custom-color">FOXIC</span> THEME</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footer-bottom footer-bottom--bg">
		<div class="container">
			<div class="footer-copyright text-center">
				<a href="#">FOXshop</a> ©2020 copyright
			</div>
		</div>
	</div>
</footer>
  )
}

export default Footer
