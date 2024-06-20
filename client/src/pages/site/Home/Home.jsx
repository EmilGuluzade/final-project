import React, { useContext } from 'react'
import "./Home.css"
import Slider from '../../../components/site/Home/Slider/Slider'
import Category from '../../../components/site/Home/Category/Category'
import Trends from '../../../components/site/Home/Trends/Trends'
import LatestBlog from '../../../components/site/Home/LatestBlog/LatestBlog'
import Collections from '../../../components/site/Home/Collections/Collections'
import NewArrival from '../../../components/site/Home/NewArrival/NewArrival'
import { Helmet } from 'react-helmet-async'
import MainContext from '../../../context/context'
import Loading from '../../Loading/Loading'
const Home = () => {
  const {loading}=useContext(MainContext)
  return (
    <>
     <Helmet>
        <title> Home </title>
      </Helmet>
      {
     loading ? <Loading></Loading>:(<><Slider></Slider>
      <Category></Category>
      <Collections></Collections>
      <Trends></Trends>
      <NewArrival></NewArrival>
      <LatestBlog></LatestBlog></>)
      }
    </>
  )
}

export default Home
