import React, { useEffect } from 'react'
import ProductCard from '../../Cards/ProductCard/ProductCard'
import AOS from "aos";
import "aos/dist/aos.css";
const NewArrival = () => {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 900,
          easing: "ease-out-cubic",
        });
      }, []);
      
  return (
    <div className='container holder'>
      <div class="title-wrap text-center"><h2 data-aos="zoom-in-down" class="h1-style">New arrival</h2>
			<div data-aos="zoom-in-down" class="h-sub maxW-825">Hurry up! Limited</div>
		</div>
<div className="row">
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>

    <ProductCard></ProductCard>

    <ProductCard></ProductCard>

    <ProductCard></ProductCard>



    <ProductCard></ProductCard>

    <ProductCard></ProductCard>


</div>
    </div>
  )
}

export default NewArrival
