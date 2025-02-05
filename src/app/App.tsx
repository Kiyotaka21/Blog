import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { FavoritesPage } from "../pages/FavoritesPage/FavoritesPage";
import { Layout } from "../pages/Layout/LayoutMain/Layout";
import { LayoutAuth } from "../pages/Layout/LayoutAuth/LayoutAuth";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <LayoutAuth/>,
    children: [
      {
        path: "login",
        element: <LoginPage/>,
      },
      {
        path: "register",
        element: <RegisterPage/>,
      },
    ],
  },
]);

export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
