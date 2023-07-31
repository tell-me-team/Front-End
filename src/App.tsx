import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrPage from "./pages/ErrPage";
import SurveyPage from "./components/surveyPage/SurveyPage";
import { Reset } from "styled-reset";

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
