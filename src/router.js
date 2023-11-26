import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home/index.js";
import About from "./pages/about/index.js";
import Tournaments from "./pages/tournaments/index.js";
import Contact from "./pages/contact/index.js";
import ErrorPage from "./pages/error/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/tournaments",
    Component: Tournaments,
  },
  {
    path: "/contact",
    Component: Contact,
  },
]);

export default router;
