import React from 'react'
import Cards from './Cards';
import Blog from './Blog';
// import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';
import FNavbar from './FNavbar';
import Service from './Service';
function Home() {
  return (
    <div>
        {/* <FNavbar/> */}
        {/* <Navbar/> */}
        <Hero/>
        <Service/>
      <Cards/>
      <Blog/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home