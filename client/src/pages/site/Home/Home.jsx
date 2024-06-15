import React from 'react'
import "./Home.css"
import Slider from '../../../components/site/Home/Slider/Slider'
import Category from '../../../components/site/Home/Category/Category'
import Trends from '../../../components/site/Home/Trends/Trends'
import LatestBlog from '../../../components/site/Home/LatestBlog/LatestBlog'
import Collections from '../../../components/site/Home/Collections/Collections'
import NewArrival from '../../../components/site/Home/NewArrival/NewArrival'
const Home = () => {
  return (
    <>
      <Slider></Slider>
      <Category></Category>
      <Collections></Collections>
      <Trends></Trends>
      <NewArrival></NewArrival>
      <LatestBlog></LatestBlog>
    </>
  )
}

export default Home
