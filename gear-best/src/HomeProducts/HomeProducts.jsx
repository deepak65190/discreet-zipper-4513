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
  

  useEffect(() => {
    dispatch(getHomeProductData);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.productsdata}>
        {data?.data?.map((item) => (
          <HomeProductCard {...item} />
        ))}
      </div>
    </div>
  );
};
export default HomeProducts;
