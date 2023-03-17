import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { Cart } from "./app/components/Cart";
import { List } from "./app/components/List";
import StoreNavbar from "./app/components/StoreNavbar";

function App() {
  return (
    <div className="App">
      <StoreNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
