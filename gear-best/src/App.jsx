import './App.css'
import Footer from "./footer/Footer";
import Navbar from "./Navbar/Navbar";
import Category from "./Category/Category";
import HomePage from './Homepage/HomePage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Category />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
