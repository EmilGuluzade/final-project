import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const OurTeam = () => {
    

 useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 900,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div class="holder">
	<div class="container">
		<div class="title-wrap text-center">
			<h2 class="h1-style" data-aos="zoom-in-down">Our Team</h2>
		</div>
		<div class="row person-row">
			<div class="person-item image-hover-scale-scale" data-aos="fade-up">
				<div class="person-item-image image-container" style={{"padding-bottom": "141.86%"}}>
					<img class="fade-up ls-is-cached lazyloaded" src="https://big-skins.com/frontend/foxic-html-demo/images/pages/img-person-01.webp" data-src="images/pages/img-person-01.webp" alt=""/>
				</div>
				<div class="person-item-info">
					<div class="person-item-title">
						Markus<br/>Whalter
					</div>
					<div class="person-item-post">
						Creative director
					</div>
					<div class="person-item-socials">
						<ul class="social-list list-unstyled">
                        <li>
								<a href="#"><i class="icon-twitter fa-brands fa-twitter"></i></a>
							</li>
							<li>
								<a href="#"><i class="icon-instagram  fa-brands fa-instagram"></i></a>
							</li>
							<li>
								<a href="#"><i class="icon-linkedin  fa-brands fa-linkedin"></i></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="person-item image-hover-scale-scale" data-aos="fade-up">
				<div class="person-item-image image-container" style={{"padding-bottom": "141.86%"}}>
					<img class="fade-up ls-is-cached lazyloaded" src="https://big-skins.com/frontend/foxic-html-demo/images/pages/img-person-02.webp" data-src="images/pages/img-person-02.webp" alt=""/>
				</div>
				<div class="person-item-info">
					<div class="person-item-title">
						Chen<br/>Khoo
					</div>
					<div class="person-item-post">
						Creative director
					</div>
					<div class="person-item-socials">
						<ul class="social-list list-unstyled">
                        <li>
								<a href="#"><i class="icon-twitter fa-brands fa-twitter"></i></a>
							</li>
							<li>
								<a href="#"><i class="icon-instagram  fa-brands fa-instagram"></i></a>
							</li>
							<li>
								<a href="#"><i class="icon-linkedin  fa-brands fa-linkedin"></i></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="person-item image-hover-scale-scale" data-aos="fade-up">
				<div class="person-item-image image-container" style={{"padding-bottom": "141.86%"}}>
					<img class="fade-up lazyloaded" src="https://big-skins.com/frontend/foxic-html-demo/images/pages/img-person-03.webp" data-src="images/pages/img-person-03.webp" alt=""/>
				</div>
				<div class="person-item-info">
					<div class="person-item-title">
						Marta<br/>Stewart
					</div>
					<div class="person-item-post">
						Creative director
					</div>
					<div class="person-item-socials">
						<ul class="social-list list-unstyled">
                        <li>
								<a href="#"><i class="icon-twitter fa-brands fa-twitter"></i></a>
							</li>
							<li>
								<a href="#"><i class="icon-instagram  fa-brands fa-instagram"></i></a>
							</li>
							<li>
								<a href="#"><i class="icon-linkedin  fa-brands fa-linkedin"></i></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="person-item image-hover-scale-scale" data-aos="fade-up">
				<div class="person-item-image image-container" style={{"padding-bottom": "141.86%"}}>
					<img class="fade-up lazyloaded" src="https://big-skins.com/frontend/foxic-html-demo/images/pages/img-person-04.webp" data-src="images/pages/img-person-04.webp" alt=""/>
				</div>
				<div class="person-item-info">
					<div class="person-item-title">
						Sandra<br/>Adams
					</div>
					<div class="person-item-post">
						Creative director
					</div>
					<div class="person-item-socials">
						<ul class="social-list list-unstyled">
							<li>
								<a href="#"><i class="icon-twitter fa-brands fa-twitter"></i></a>
							</li>
							<li>
								<a href="#"><i class="icon-instagram  fa-brands fa-instagram"></i></a>
							</li>
							<li>
								<a href="#"><i class="icon-linkedin  fa-brands fa-linkedin"></i></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}

export default OurTeam
