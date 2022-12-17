import React, { useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductData } from '../newRedux/actions';
import {GrDiamond} from 'react-icons/gr';
import styles from './newcaro.module.css'
import NewCaroCard from './NewCaroCard';
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";

const NewCaro = () => {
    const ref = useRef(null)
    const dispatch = useDispatch();
    const data = useSelector((store) => store);
    useEffect(() => {
      dispatch(getProductData);
    }, []);

    const btnpressprev = () => {
        let width = ref.current.clientWidth;
        ref.current.scrollLeft = ref.current.scrollLeft - width;
        // console.log(width)
    }

    const btnpressnext = () => {
         let width = ref.current.clientWidth;
        ref.current.scrollLeft = ref.current.scrollLeft + width;
        // console.log(width)
    }
  return (
    <div>
    <div className={styles.newtitle} ><GrDiamond className={styles.daimond} /><p>NEW FOR TODAY</p> </div>
    <div className={styles.product_carousel}>
        <div className={styles.caroselwrap}>
          <button className={styles.pre_btn} onClick={btnpressprev}><FiChevronLeft  className={styles.arrow} /> </button>
          <button className={styles.next_btn} onClick={btnpressnext}><FiChevronRight className={styles.arrow} /></button>

          <div ref={ref} className={styles.product_container}>
            {data?.data.map((item) => (
              <NewCaroCard key={`caro-card-${item.id}`} {...item} className={styles.Mycard} />
            ))}
          </div>
        </div>
    </div>
  </div>
  )
}

export default NewCaro