import React from 'react'
import "./Home.css"
import Slider from '../../../components/site/Home/Slider/Slider'
import Category from '../../../components/site/Home/Category/Category'
import Trends from '../../../components/site/Home/Trends/Trends'
import LatestBlog from '../../../components/site/Home/LatestBlog/LatestBlog'
const Home = () => {
  return (
    <>
      <Slider></Slider>
      <Category></Category>
      <Trends></Trends>
      <LatestBlog></LatestBlog>
    </>
  )
}

export default Home
