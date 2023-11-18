import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home/index.js";
import About from "./pages/about/index.js";
import Events from "./pages/events/index.js";
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
    path: "/events",
    Component: Events,
  },
  {
    path: "/contact",
    Component: Contact,
  },
]);

export default router;
