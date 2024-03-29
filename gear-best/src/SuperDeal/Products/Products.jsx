import styles from "./Products.module.css";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductData } from "../Redux/actions";
import ProductCard from "./ProductCard";
import { useState } from "react";
import Navbar1 from "../navbar/navbar";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import CommonHeader from "../../Navbar/CommonHeader";

const Products = () => {
  const [clas, setClas] = useState("recommend");
  const dispatch = useDispatch();
  const data = useSelector((store) => store);

    let products = data.productReducer.data;



  if (clas === "price") {
    products.sort((a, b) => Number(a.newPrice) - Number(b.newPrice));
  }

  if (clas === "discount") {
    products.sort(
      (a, b) =>
        (
          ((Number(b.price) - Number(b.newPrice)) / Number(b.price)) *
          100
        ).toFixed(0) -
        (
          ((Number(a.price) - Number(a.newPrice)) / Number(a.price)) *
          100
        ).toFixed(0)
    );
  }
  useEffect(() => {
    dispatch(getProductData);
  }, []);

 
  return (
    <div className={styles.container}>
    
      <CommonHeader />
      <Navbar1 />
      <div className={styles.productsnav}>
        <span style={{ color: "grey" }}>Sort By:</span>
        <div>
          <span
            onClick={() => setClas("recommend")}
            className={clas == "recommend" ? styles.price : ""}
          >
            Recommend
          </span>
          <span
            onClick={() => setClas("hottest")}
            className={clas == "hottest" ? styles.price : ""}
          >
            Hottest
          </span>
          <span
            onClick={() => setClas("newest")}
            className={clas == "newest" ? styles.price : ""}
          >
            Newest
          </span>
          <span
            style={{ color: "grey" }}
            onClick={() => setClas("price")}
            className={clas == "price" ? styles.price : ""}
          >
            Price
            <GoTriangleUp />
          </span>
          <span
            style={{ color: "grey" }}
            onClick={() => setClas("discount")}
            className={clas == "discount" ? styles.price : ""}
          >
            Discount
            <GoTriangleDown />
          </span>
        </div>
      </div>
      <div className={styles.productsdata}>
        {products?.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
     
    </div>
  );
};
export default Products;
