import styles from "./HomeProducts.module.css";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHomeProductData } from '../Homepage/homeRedux/action'
import HomeProductCard from "./HomeProductCard";
import { useState } from "react";

const HomeProducts = () => {

 const [clas,setClas]=useState('recommend')
  const dispatch = useDispatch();
  const data = useSelector((store) => store);
  
  let homeproduct = data.homeProductReducer.data;
  console.log(homeproduct)
  useEffect(() => {
    dispatch(getHomeProductData);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.productsdata}>
        {homeproduct?.map((item) => (
          <HomeProductCard {...item} />
        ))}
      </div>
    </div>
  );
};
export default HomeProducts;
