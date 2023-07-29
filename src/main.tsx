import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import App from "./App";
import PageA from "./pages/PageA";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/pageA" element={<PageA />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
