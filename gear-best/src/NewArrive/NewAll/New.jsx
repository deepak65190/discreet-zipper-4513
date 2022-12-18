import React, { useRef } from 'react'
import styles from './new.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import NewCard from "./NewCard";
import { getNewProductData } from '../newRedux/actions';
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";
import NewCaro from './NewCaro';
import Dotdotdot from 'react-dotdotdot';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
// import CommonHeader from '../../Navbar/CommonHeader';


const nav =[
  {title:"All"},
  {title:"Consumer Electronics"},
  {title:"Appliances"},
  {title:"Smartphones"},
  {title:"Computers & Tables"},
  {title:"3D Printers & Suppliers"},
  {title:"Home & Garden"},
  {title:"Outdoors & Sports"},
  {title:"Shoes & Apparel"},
  {title:"Motor & Car Electronics"},
  {title:"Phones Accessories"},
  {title:"Toys & Kids"},
  {title:"Beauty & Care"},
  {title:"TV Box"},
  {title:"Watches & Jewelry"}
 

]


const New = () => {
 
  const ref = useRef(null)
    const dispatch = useDispatch();
    const data1 = useSelector((store) => store);
    let data=data1.newproductReducer.data
   
    
 
    const btnprev =()=>{
        let width = ref.current.clientWidth;
        ref.current.scrollLeft = ref.current.scrollLeft - width;
    }
    const btnnext =()=>{
        let width = ref.current.clientWidth;
        ref.current.scrollLeft = ref.current.scrollLeft + width;
    }

    useEffect(() => {
     dispatch(getNewProductData)
    }, []);

  
    return (
      <div className={styles.container}>
        <Navbar />
        {/* <CommonHeader /> */}
        <NewCaro />
      
        <div>
          <div className={styles.secondtitlebox}>
            <p className={styles.secondtitle} >LATEST COLLECTIONS</p>
            <p className={styles.smalltitle}>All New Arrivals {">"}</p>
          </div>
             <div className={styles.navbox}>
             <FiChevronLeft className={styles.superprev} onClick={btnprev} />
                <FiChevronRight className={styles.supernext} onClick={btnnext} />
                <div ref={ref} className={styles.navcard}>
                {nav.map((item, index) => (
                        <div
                        className={styles.super_imgbox}
                        key={`nav-${index}-${item.title.replaceAll(" ", "-")}`}
                        >
                        {/* <p className={styles.super_title}>{item.title}</p> */}
                        <Dotdotdot clamp={2} useNativeClamp className={styles.super_title}>
                {item.title}
            </Dotdotdot>
                        </div>
                    ))}
                </div>
             </div>
           <div className={styles.productsdata}>
             {data?.map((item) => (
              <NewCard key={`caro-card-${item.id}`}  {...item} />
              ))}
            </div>
        </div>
        <Footer />
      </div>
    );
}

export default New