import React from "react";
import { getProduct } from "./reduxAppOnly/action";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import AppOnlyP from "./AppOnlyP";
import styles from "./AppOnly.module.css";
import Loading from "./Loading";

function AppOnly() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const loading = useSelector((state) => state.isloading);
  useEffect(() => {
    dispatch(getProduct);
  }, []);
  if(loading){
    return <Loading />
   
  }
  return (
    <div className={styles.singleProductGrid}>
      {product?.map((item) => {
        return <AppOnlyP key={item.id} id={item} />;
      })}
    </div>
  );
}

export default AppOnly;
