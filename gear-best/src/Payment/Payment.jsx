import styles from "./Payment.module.css";
import { useState,useEffect } from "react";
import {useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Payment = () => {
  const navigate=useNavigate();
  const [fname,setFName]=useState('')
  const [lname,setLName]=useState('')
  const [email,setEmail]=useState('')
  const [address,setAdd]=useState('')
  const [city,setCity]=useState('')
  const [district,setDist]=useState('')
  const [phone,setPhone]=useState('')
  const [state,setState]=useState('')
  const [searchParams,setSearchParams]=useSearchParams();
  const initialMode=searchParams.getAll('mode');
  const [mode,setMode]=useState(initialMode[0]||'');
 const  handleMode=(e)=>{
setMode(e.target.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(fname==='' || lname==='' || email==='' || city==='' || district==='' || phone==='' || state===''){
      alert('Fill All Credintials')
    }else{
      localStorage.setItem('userDetails',JSON.stringify({name:`${fname} ${lname}`,email:email,city:city,district:district,phone:phone,state:state,mode:mode}))
    }
  }

useEffect(()=>{
let params={};
params.mode=mode
setSearchParams(params)
},[setSearchParams,mode])
const handleClick=()=>{
  
  navigate("/pay");
}

  return (
    <div className={styles.container}>
      <div>
        <Link to="/">
          <img
            src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png"
            alt=""
          />
        </Link>
      </div>
      <div>
        <div className={styles.form}>
          <h1>Enter Your Details</h1>
          <form action="" onSubmit={handleSubmit}>
            <label style={{ marginRight: "110px" }} htmlFor="">
              Name :{" "}
            </label>
            <input
              type="text"
              style={{ marginRight: "10px" }}
              placeholder="First Name"
              onChange={(e) => setFName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLName(e.target.value)}
            />
            <br />
            <label style={{ marginRight: "50px" }} htmlFor="">
              Email Address :{" "}
            </label>
            <input
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label style={{ marginRight: "40px" }} htmlFor="">
              Phone Number :{" "}
            </label>
            <input
              type="number"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <label style={{ marginRight: "130px" }} htmlFor="">
              City :
            </label>
            <input
              type="text"
              placeholder="Enter City Name"
              onChange={(e) => setCity(e.target.value)}
            />
            <br />
            <label style={{ marginRight: "100px" }} htmlFor="">
              District :{" "}
            </label>
            <input
              type="text"
              placeholder="Enter District Name"
              onChange={(e) => setDist(e.target.value)}
            />
            <br />
            <label style={{ marginRight: "113px" }} htmlFor="">
              State :{" "}
            </label>
            <input
              type="text"
              placeholder="Enter State Name"
              onChange={(e) => setState(e.target.value)}
            />
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
              <button
                className={styles.btn}
                type="submit"
                onClick={handleClick}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Payment;
