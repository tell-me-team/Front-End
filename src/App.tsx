import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrPage from "./pages/ErrPage";
import SurveyPage from "./components/surveyPage/SurveyPage";
import { Reset } from "styled-reset";

import Layout from "./Layout";
import MainPage from "./pages/MainPage";
import KakaoLoginPage from "./pages/KakaoLoginPage";
import ResultPage from "./components/resultPage/ResultPage";
import PuzzlesPage from "./components/puzzlePage/PuzzlesPage";

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
        { path: "/puzzle", element: <PuzzlesPage /> },
        { path: "/result", element: <ResultPage /> },
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
