import React from 'react'
import "./About.css"
import AboutUs from '../../../components/site/About/AboutUs/AboutUs'
import Why from '../../../components/site/About/Why/Why'
import Performance from '../../../components/site/About/Performance/Performance'
import OurTeam from '../../../components/site/About/OurTeam/OurTeam'
import Subscribe from '../../../components/site/About/Subscribe/Subscribe'
import { Helmet } from 'react-helmet-async'
const About = () => {
  return (
    <>
      <Helmet>
            <title> About Us</title>
        </Helmet>
      <AboutUs></AboutUs>
      <Why></Why>
      <Performance></Performance>
      <OurTeam></OurTeam>
      <Subscribe></Subscribe>
    </>
  )
}
export default About
