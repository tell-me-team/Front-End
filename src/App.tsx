import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrPage from "./pages/ErrPage";
import SurveyPage from "./components/surveyPage/SurveyPage";
import GlobalStyle from "./global";

import Layout from "./Layout";
import MainPage from "./pages/MainPage";
import KakaoLoginPage from "./pages/KakaoLoginPage";
import TestStartPage from "./pages/TestStartPage";

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
        { path: "/testStart", element: <TestStartPage /> },
      ],
    },
  ]);

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
