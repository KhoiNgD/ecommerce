import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Headphones } from "pages/Category/Headphones";
import { Speakers } from "pages/Category/Speakers";
import { Earphones } from "pages/Category/Earphones";
import { Home } from "pages/Home";
import { MainContent } from "pages/MainContent";
import { Checkout } from "pages/Checkout";
import { Category } from "pages/Category";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<MainContent />}>
            <Route index element={<Home />} />
            <Route path="category" element={<Category />}>
              <Route path="headphones" element={<Headphones />} />
              <Route path="earphones" element={<Earphones />} />
              <Route path="speakers" element={<Speakers />} />
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
