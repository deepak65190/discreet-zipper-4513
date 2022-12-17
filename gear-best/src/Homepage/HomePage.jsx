import React from 'react'
import Navbar from '../Navbar/Navbar';
import Collection from '../ShowProducts/Collection1';
import Collection2 from '../ShowProducts/Collection2';
import Row1 from '../ShowProducts/Row1';
import Row2 from '../ShowProducts/Row2';
import Category from "../Category/Category";
import Footer from '../Footer/Footer';
import Nav from "../Navbar/sidenav/SideNav";
import HomeProducts from '../HomeProducts/HomeProducts';


function HomePage() {
  return (
    <div>
     <Navbar/>
     <Category />
     <Collection/>
     <Row1/>
     <Collection2/>
     <Row2 />
     <HomeProducts />
     <Nav />
     <Footer />
    
    </div>
  )
}

export default HomePage