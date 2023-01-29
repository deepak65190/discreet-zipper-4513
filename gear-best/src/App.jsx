import './App.css'
import Homepage from './Homepage/HomePage';
import Navbar from './Navbar/Navbar';
import New from './NewArrive/NewAll/New';
import NewCaro from './NewArrive/NewAll/NewCaro';
import Products from './SuperDeal/Products/Products';
import Login from "./Authentication/Login/Login"
import Signup from "./Authentication/Signup/Signup";
import MainRoutes from './AllRoutes/mainRoutes';
import CommonHeader from './Navbar/CommonHeader';
import Payment from './Payment/Payment';
import NewFooter from './newFooter/newFooter';
function App() {
  return (
    <div className="App">
    <Navbar/>
      <MainRoutes />
     <NewFooter/>
    </div>
  )

     

}

export default App
