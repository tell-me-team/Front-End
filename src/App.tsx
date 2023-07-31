import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrPage from "./pages/ErrPage";
import SurveyPage from "./components/surveyPage/SurveyPage";
import TestMain from "./pages/testMain";
import { Reset } from "styled-reset";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import MainPage from "./pages/MainPage";
import KakaoLoginPage from "./pages/KakaoLoginPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrPage />,
      children: [
        { path: "/", element: <MainPage /> },
        { path: "/survey", element: <SurveyPage /> },
        { path: "/auth/kakao", element: <KakaoLoginPage /> },
      ],
    },
  ]);

  return (
    <>
      <Reset />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
