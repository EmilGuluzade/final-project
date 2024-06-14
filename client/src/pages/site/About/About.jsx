import React from 'react'
import "./About.css"
import AboutUs from '../../../components/site/About/AboutUs/AboutUs'
import Why from '../../../components/site/About/Why/Why'
import Performance from '../../../components/site/About/Performance/Performance'
import OurTeam from '../../../components/site/About/OurTeam/OurTeam'
import Subscribe from '../../../components/site/About/Subscribe/Subscribe'
const About = () => {
  return (
    <>
      <AboutUs></AboutUs>
      <Why></Why>
      <Performance></Performance>
      <OurTeam></OurTeam>
      <Subscribe></Subscribe>
    </>
  )
}
export default About
