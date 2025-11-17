import Navbar from "./Home/Navbar"
import HomeHero from "./Home/HomeHero"
import AboutUs from "./AboutUs/AboutUs"
import React from 'react'
import WhatWeOffer from "./Home/WhatWeOffer"
// import AboutUs from "./AboutUs/AboutUs"

const Home = () => {
  return (
    <>
     {/* <Navbar />  */}
    <HomeHero/>
    <AboutUs/>
    <WhatWeOffer/>

    
    </>
  )
}

export default Home