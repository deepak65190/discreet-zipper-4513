import React from 'react'
import './Sidenav.css'
import {HiShoppingBag} from 'react-icons/hi'
import {FaFileInvoiceDollar} from 'react-icons/fa'
import {GrDiamond} from 'react-icons/gr'
// import {RiServiceLine} from 'react-icons/ri'
import {RiPencilFill} from 'react-icons/ri'
import {TbArrowBigUpLines} from 'react-icons/tb'
import { useState } from 'react';

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#Navbar" onClick={()=>setActiveNav('#Navbar')}
      className={activeNav==='#Navbar' ? 'active':''}><TbArrowBigUpLines/></a>
      
      <a href="#collection" onClick={()=>setActiveNav('#collection')}
      className={activeNav ==='#collection' ? 'active' : ''}><HiShoppingBag/></a>
      
      <a href="#superDeal" onClick={()=>setActiveNav('#superDeal')}
      className={activeNav ==='#superDeal' ? 'active' : ''}><FaFileInvoiceDollar/></a>
      
      <a href="#recommend" onClick={()=>setActiveNav('#recommend')}
      className={activeNav==='#recommend' ? 'active':''}><GrDiamond/></a>
      
      {/* <a href="#services" onClick={()=>setActiveNav('#services')}
      className={activeNav==='#services' ? 'active':''}><RiServiceLine/></a> */}

      <a href="#footer" onClick={()=>setActiveNav('#portfolio')}
      className={activeNav==='#footer' ? 'active':''}><RiPencilFill/></a>

    </nav>
  )
}

export default Nav
