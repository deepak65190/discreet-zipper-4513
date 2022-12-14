import styles from "./Products.module.css";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductData } from "../Redux/actions";
import ProductCard from "./ProductCard";
import { useState } from "react";

const Products = () => {

 const [clas,setClas]=useState('recommend')
  const dispatch = useDispatch();
  const data = useSelector((store) => store);
  useEffect(() => {
    dispatch(getProductData);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.productsnav}>
        <span>Sort By:</span>
        <div>
          <span onClick={()=>setClas('recommend')} className={clas? '':"recommend"} >Recommend</span>
          <span onClick={()=>setClas('hottest')} className={clas? '':"hottest"} >Hottest</span>
          <span onClick={()=>setClas('newest')} className={clas? '':"newset"} >Newest</span>
          <span onClick={()=>setClas('price')} className={clas? '':"price"} >
            Price
            <GoTriangleUp />
          </span>
          <span onClick={()=>setClas('discount')} className={clas? '':"discount"} >
            Discount
            <GoTriangleDown />
          </span>
        </div>
      </div>
      <div className={styles.productsdata}>
        {data?.data?.map((item) => (
          <ProductCard {...item} />
        ))}
      </div>
    </div>
  );
};
export default Products;
