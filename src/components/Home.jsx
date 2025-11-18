import Navbar from "./Home/Navbar"
import HomeHero from "./Home/HomeHero"
import AboutUs from "./AboutUs/AboutUs"
import React from 'react'
import WhatWeOffer from "./Home/WhatWeOffer"
import TestimonialCarousel from "./Home/TestimonialCarousel"
import TeamSection from "./Home/TeamSection"
import JoinOurTeam from "./Home/JoinOurTeam"
import AwardsCarousel from "./Offers/AwardsCarousel"
import LatestNews from "./Home/LatestNews"

const Home = () => {
  return (
    <>
     {/* <Navbar />  */}
    <HomeHero/>
    <AboutUs/>
    <WhatWeOffer/>
    <TestimonialCarousel/>
    <TeamSection/>
    <JoinOurTeam/>
    <AwardsCarousel/>
    <LatestNews/>

    
    </>
  )
}

export default Home