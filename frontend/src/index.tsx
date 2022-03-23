import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { MainContent } from "pages/MainContent";
import { Checkout } from "pages/Checkout";
import { Category } from "pages/Category";
import { ProductList } from "pages/Category/ProductList";
import { Details } from "pages/Category/Details";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<MainContent />}>
            <Route index element={<Home />} />
            <Route path="category" element={<Category />}>
              <Route path=":category" element={<ProductList />} />
              <Route path=":category/:productName" element={<Details />} />
            </Route>
          </Route>
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
