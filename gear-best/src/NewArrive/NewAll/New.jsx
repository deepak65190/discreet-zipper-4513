import React from 'react'
import styles from './new.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import NewCard from "./NewCard";
import { getProductData } from '../newRedux/actions';
import NewCaro from './NewCaro';


const New = () => {
 
    const dispatch = useDispatch();
    const data = useSelector((store) => store);
    useEffect(() => {
      dispatch(getProductData);
    }, []);

   
  
    return (
      <div className={styles.container}>
        <NewCaro />
      
        <div>
            <p className={styles.secondtitle} >LATEST COLLECTIONS</p>
           <div className={styles.productsdata}>
             {data?.data.map((item) => (
              <NewCard key={`caro-card-${item.id}`} {...item} />
              ))}
            </div>
        </div>
      </div>
    );
}

export default New