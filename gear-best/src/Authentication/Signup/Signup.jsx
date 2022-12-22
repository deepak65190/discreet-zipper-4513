import styles from "./Signup.module.css";
import {FcGoogle} from "react-icons/fc"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const navigate= useNavigate()

  const handleSubmit=(e)=>{
e.preventDefault();
if(email!=='' || pass!==''){
    localStorage.setItem('userData',JSON.stringify({"email":email,"password":pass}));
    navigate('/login')
}else{
    alert('something went wrong')
}


    }
  return (
    <div className={styles.container}>
      <div>
        <img
          src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png"
          alt=""
        />
      </div>
      <div>
        <div className={styles.form}>
          <div>
            <Link to='/login'>
            <span>SIGN IN</span>
            </Link>
            <span>REGISTER</span>
            
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} /><br />
              <input type="password" placeholder="Create password" onChange={(e)=>setPass(e.target.value)}/><br />
              <input type="password" placeholder="Re-type password" /><br />
             {/* <input type="text" placeholder="Enter the code" /><img src="https://login.gearbest.com/captcha/default?0.09237631156892223" alt="" /> */}
              
              <input className={styles.check} type="checkbox" />
              <span  className={styles.grey}>I agree to Gearbest</span>
              <span className={styles.red}>Terms and Conditions</span>
              <span  className={styles.grey}>and</span>
              <span className={styles.red}>Privacy Policies</span>
              <p className={styles.tip}>Tip: To maximize online security, please do not reuse passwords or choose easy to guess ones on Gearbest</p>
              <button className={styles.btn} type="submit" >Register</button>
              {/* <p>or connect via</p>
              <FcGoogle fontSize="30px" /> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
