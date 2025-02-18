import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { FavoritesPage } from "../pages/FavoritesPage/FavoritesPage";
import { Layout } from "./Layout/Layout";
import { LoginPage } from "../pages/Auth/LoginPage/LoginPage";
import { RegisterPage } from "../pages/Auth/RegisterPage/RegisterPage";
import { ROUTER_PATH } from "../shared/routes";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { AnimePage } from "../pages/Anime/AnimePage";
import { RequireAuth } from "../pages/Auth/api/RequireAuth";
import { AppProvider } from "./AppProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: ROUTER_PATH.MAIN,
        element: (
          <RequireAuth>
            <MainPage />
          </RequireAuth>
        ),
      },
      {
        path: ROUTER_PATH.FAVORITES,
        element: (
          <RequireAuth>
            <FavoritesPage />
          </RequireAuth>
        ),
      },
      {
        path: ROUTER_PATH.ANIME,
        element: (
          <RequireAuth>
            <AnimePage />
          </RequireAuth>
        ),
      },
      {
        path: ROUTER_PATH.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTER_PATH.REGISTER,
        element: <RegisterPage />,
      },
    ],
  },
]);

export function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </Provider>
  );
}
