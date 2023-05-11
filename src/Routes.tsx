import { createBrowserRouter } from "react-router-dom";
import { Home, Game, ErrorPage } from "./pages/index";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/game',
      element: <Game />,
      errorElement: <ErrorPage />,
    },
  ])