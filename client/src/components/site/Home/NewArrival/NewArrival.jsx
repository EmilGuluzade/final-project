import React, { useContext, useEffect } from 'react'
import ProductCard from '../../Cards/ProductCard/ProductCard'
import AOS from "aos";
import "aos/dist/aos.css";
import MainContext from '../../../../context/context';
const NewArrival = () => {
  const {products}=useContext(MainContext)

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

{products&& products.slice(-4).map((item,index)=>(
   <ProductCard key={index} data={item} ></ProductCard>
))
   
  

}
</div>
    </div>
  )
}

export default NewArrival
