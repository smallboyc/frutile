import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Yard from "../pages/Yard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/yard",
    element: <Yard />,
  },
]);

export default router;
