import styles from "./Login.module.css";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

let data=JSON.parse(localStorage.getItem('userData'))
const Login = () => {
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('');
    const navigate=useNavigate()
  
const handleSubmit=(e)=>{
e.preventDefault();
 if(data.email==email && data.password==pass){
  console.log(data,email,pass)
  navigate("/")
 }else{
  alert("no")

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
            <span>SIGN IN</span>
            <Link to='/signup'>
            <span>REGISTER</span>
            </Link>
          </div>
          <div>
            <form className={styles.login} onSubmit={handleSubmit}>
              <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} /><br />
              <input type="password" placeholder="Create password" onChange={(e)=>setPass(e.target.value)}/><br />
             
              <button className={styles.btn} type="submit" >Login</button>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
