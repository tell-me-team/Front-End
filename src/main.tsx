import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import App from "./App";
import PageA from "./pages/PageA";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/pageA" element={<PageA />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
