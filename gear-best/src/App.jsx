import './App.css'
import Footer from "./footer/Footer";
import Navbar from "./Navbar/Navbar";
import Category from "./Category/Category";
import HomePage from './Homepage/HomePage';
import Nav from "./Navbar/sidenav/SideNav";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Category />
      <HomePage />
      <Nav />
      <Footer />
    </div>
  )
}

export default App
