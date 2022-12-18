import styles from "./Payment.module.css";
import { useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Payment = () => {
  const [searchParams,setSearchParams]=useSearchParams();
  const initialMode=searchParams.getAll('mode');
  const [mode,setMode]=useState(initialMode[0]||'');
 const  handleMode=(e)=>{
setMode(e.target.value)
  }

useEffect(()=>{
let params={};
params.mode=mode
setSearchParams(params)
},[setSearchParams,mode])

  return (
    <div className={styles.container}>
      <div>
        <Link to="/" >
        <img
          src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png"
          alt=""
        />
        </Link>
      </div>
      <div>
        <div className={styles.form}>
          <h1>Enter Your Details</h1>
          <form action="">
            <label htmlFor="">Name : </label>{" "}
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <br />
            <label htmlFor="">Email Address : </label>
            <input type="email" placeholder="Email Address" />
            <br />
            <label htmlFor="">Phone Number : </label>
            <input type="number" placeholder="Phone Number" />
            <br />
            <label htmlFor="">City : </label>
            <input type="text" placeholder="Enter City Name" />
            <br />
            <label htmlFor="">District : </label>
            <input type="text" placeholder="Enter District Name" />
            <br />
            <label htmlFor="">State : </label>
            <input type="text" placeholder="Enter State Name" />
            <br />
            <div>
              <div className={styles.payment}>
                <h1>Select Payment Mode</h1>
                <input
                className={styles.radio}
                  type="radio"
                  value="bycard"
                  name="select"
                  defaultChecked={mode === "bycard"}
                  onChange={handleMode}
                />
                <label>Credit Card</label>
                <br />
                <input
                className={styles.radio}
                  type="radio"
                  value="cod"
                  name="select"
                  defaultChecked={mode === "cod"}
                  onChange={handleMode}
                />
                <label>Cash On Delivery</label>
                <br />
                <input
                className={styles.radio}
                  type="radio"
                  value="netB"
                  name="select"
                  defaultChecked={mode === "netB"}
                  onChange={handleMode}
                />
                <label>Net Banking</label>
              </div>
              <button className={styles.btn}>Continue</button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  );
};
export default Payment;
