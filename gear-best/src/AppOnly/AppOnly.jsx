import styles from "./AppOnly.module.css";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAppProductData } from "./appRedux/action";
import AppOnlyP from "./AppOnlyP";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import CommonHeader from "../Navbar/CommonHeader";
import Footer from "../Footer/Footer";

const AppOnly = () => {

 const [clas,setClas]=useState('recommend')
  const dispatch = useDispatch();
  const data = useSelector((store) => store);
  let appproduct = data.appProductReducer.data;

  console.log(appproduct)
  useEffect(() => {
    dispatch(getAppProductData);
  }, []);

  return (
    
    <div className={styles.container}>
      
      <CommonHeader />
      <div className={styles.productsdata} style={{marginTop:'50px'}}>
        {appproduct?.map((item) => (
          <AppOnlyP {...item} />
        ))}
      </div>
      
    </div>
  );
};
export default AppOnly;
