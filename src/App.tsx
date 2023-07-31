import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import MainPage from "./pages/MainPage";
import KakaoLoginPage from "./pages/KakaoLoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/auth/kakao" element={<KakaoLoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
