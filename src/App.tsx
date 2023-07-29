import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrPage from "./pages/ErrPage";
import SurveyPage from "./pages/SurveyPage";
import TestMain from "./pages/testMain";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrPage />,
      children: [
        { path: "/", element: <TestMain /> },
        { path: "/survey", element: <SurveyPage /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
