import React from 'react'
import { Helmet } from 'react-helmet-async'
import BannerGrid from '../../../components/site/Category/BannerGrid/BannerGrid'
import ProductList from '../../../components/site/Category/ProductList/ProductList'

const Category = () => {
  return (
    <div> 
    <Helmet>
    <title> Category</title>
</Helmet>
      
      <BannerGrid></BannerGrid>
      <ProductList></ProductList>
    </div>
  )
}

export default Category
