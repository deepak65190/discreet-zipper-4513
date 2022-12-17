import React from "react";
import { Routes, Route } from "react-router-dom";
import SinglePage from "./singlePage" 
import NotFound from "./NotFound";
import Products from "../SuperDeal/Products/Products";


function MainRoutes() {
  return (
    <Routes>
      <Route path="/superDeal" element={<Products/>}></Route>
      <Route path="/superDeal/:productId" element={<SinglePage />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default MainRoutes;
