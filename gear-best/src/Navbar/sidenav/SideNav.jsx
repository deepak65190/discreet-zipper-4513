import React from 'react'
import './Sidenav.css'
import {CgShoppingBag} from 'react-icons/cg'
import {TbFileDollar} from 'react-icons/tb'
import {FiThumbsUp} from 'react-icons/fi'
// import {RiServiceLine} from 'react-icons/ri'
import {RiInformationLine} from 'react-icons/ri'
import {TbArrowBigUpLines} from 'react-icons/tb'
import { useState } from 'react';

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#Navbar" onClick={()=>setActiveNav('#Navbar')}
      className={activeNav==='#Navbar' ? 'active':''}><TbArrowBigUpLines/></a>
      
      <a href="#collection" onClick={()=>setActiveNav('#collection')}
      className={activeNav ==='#collection' ? 'active' : ''}><CgShoppingBag/></a>
      
      <a href="#superDeal" onClick={()=>setActiveNav('#superDeal')}
      className={activeNav ==='#superDeal' ? 'active' : ''}><TbFileDollar/></a>
      
      <a href="#recommend" onClick={()=>setActiveNav('#recommend')}
      className={activeNav==='#recommend' ? 'active':''}><FiThumbsUp/></a>
      
      {/* <a href="#services" onClick={()=>setActiveNav('#services')}
      className={activeNav==='#services' ? 'active':''}><RiServiceLine/></a> */}

      <a href="#footer" onClick={()=>setActiveNav('#portfolio')}
      className={activeNav==='#footer' ? 'active':''}><RiInformationLine/></a>

    </nav>
  )
}

export default Nav
