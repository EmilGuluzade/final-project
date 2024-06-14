import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
const Why = () => {
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
			<h2 class="h1-style"  data-aos="zoom-in-down">Why Shop With Us?</h2>
		</div>
		<div class="text-icn-blocks-row">
			<div class="text-icn-block" data-aos="fade-up">
				<div class="icn">
                    <i class="icon-shopping-1 fa-sharp fa-thin fa-hand-holding-box"></i>
				</div>
				<div class="text">
					Complete buyer supply store
				</div>
			</div>
			<div class="text-icn-block" data-aos="fade-up" >
				<div class="icn">
                    <i class="icon-box-1 fa-sharp fa-thin fa-box-check"></i>
				</div>
				<div class="text">
					Same day dispatch on all orders
				</div>
			</div>
			<div class="text-icn-block" data-aos="fade-up">
				<div class="icn">
                    <i class="icon-delivery-truck fa-thin fa-truck"></i>
				</div>
				<div class="text">
					Free delivery on all orders
				</div>
			</div>
			<div class="text-icn-block" data-aos="fade-up">
				<div class="icn">
                    <i class="icon-call-center fa-sharp fa-thin fa-head-side-headphones"></i>
				</div>
				<div class="text">
					Professional advice and great support
				</div>
			</div>
			<div class="text-icn-block d-none d-sm-block" data-aos="fade-up">
				<div class="icn">
                    <i class="icon-tag fa-thin fa-tag"></i>
				</div>
				<div class="text">
					Fall savings are in the air
				</div>
			</div>
		</div>
	</div>
</div>
  )
}

export default Why
