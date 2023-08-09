import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrPage from "./pages/ErrPage";
import GlobalStyle from "./global";
import { RecoilRoot } from "recoil";

import Layout from "./Layout";
import MainPage from "./pages/MainPage";
import SurveyPage from "./pages/SurveyPage";
import KakaoLoginPage from "./pages/KakaoLoginPage";
import ResultPage from "./pages/ResultPage";
import PuzzlesPage from "./components/puzzlePage/PuzzlesPage";
import TestStartPage from "./pages/TestStartPage";
import ProfilePage from "./pages/ProfilePage";

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
        { path: "/:shortUrl", element: <TestStartPage /> },
        { path: "/profile", element: <ProfilePage /> },
      ],
    },
  ]);

  return (
    <RecoilRoot>
      <GlobalStyle />
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
