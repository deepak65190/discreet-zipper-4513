import React from 'react'
import Navbar from '../Navbar/Navbar';
import Carousel from '../Category/Carousal';
import Collection from '../ShowProducts/Collection1';
import Collection2 from '../ShowProducts/Collection2';
import Row1 from '../ShowProducts/Row1';
import Category from "../Category/Category";
import Footer from '../Footer/Footer'



function HomePage() {
  return (
    <div>
     <Navbar/>
     <Category />
     <Carousel />
     <Collection/>
     <Row1/>
     <Collection2/>
     <Footer />
    
    </div>
  )
}

export default HomePage