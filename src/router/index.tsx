import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Yard from "../pages/Yard/Yard";
import Favorite from "../pages/Favorite/Favorite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, //Layout
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/yard",
        element: <Yard />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
    ],
  },
]);

export default router;
