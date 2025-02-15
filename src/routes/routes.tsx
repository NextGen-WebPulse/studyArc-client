import { createBrowserRouter } from "react-router-dom";
import Home from "../pages";
import App from "../App";
import Register from "@/pages/auth/register";
import Login from "@/pages/auth/login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default routes;
