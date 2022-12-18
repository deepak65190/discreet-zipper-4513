import React from "react";
import { Routes, Route } from "react-router-dom";
import SinglePage from "./singlePage" 
import NotFound from "./NotFound";
import Products from "../SuperDeal/Products/Products";
import Signup from "../Authentication/Signup/Signup";
import Login from "../Authentication/Login/Login";
import Homepage from "../../src/Homepage/HomePage";
import New from "../NewArrive/NewAll/New";
import AppOnly from "../AppOnly/AppOnly";


function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/:productId" element={<SinglePage />}></Route>
      <Route path="/superDeal" element={<Products/>}></Route>
      <Route path="/superDeal/:productId" element={<SinglePage />}></Route>
      <Route path='/singlepage' element={<SinglePage />}></Route>
      <Route path='/apponly' element={<AppOnly />}></Route>
      <Route path="/apponly/:productId" element={<SinglePage />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/new' element={<New />}></Route>
      <Route path="/new/:productId" element={<SinglePage />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default MainRoutes;
