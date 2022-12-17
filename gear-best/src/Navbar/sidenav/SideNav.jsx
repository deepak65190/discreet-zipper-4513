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
      
      <a href="#" onClick={()=>setActiveNav('#')}
      className={activeNav ==='#' ? 'active' : ''}><HiShoppingBag/></a>
      
      <a href="#about" onClick={()=>setActiveNav('#about')}
      className={activeNav ==='#about' ? 'active' : ''}><FaFileInvoiceDollar/></a>
      
      <a href="#experience" onClick={()=>setActiveNav('#experience')}
      className={activeNav==='#experience' ? 'active':''}><GrDiamond/></a>
      
      {/* <a href="#services" onClick={()=>setActiveNav('#services')}
      className={activeNav==='#services' ? 'active':''}><RiServiceLine/></a> */}

      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')}
      className={activeNav==='#portfolio' ? 'active':''}><RiPencilFill/></a>

    </nav>
  )
}

export default Nav
