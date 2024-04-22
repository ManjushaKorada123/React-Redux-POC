import React from "react";
import Order from "./Order";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/orders" element={<Order/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
