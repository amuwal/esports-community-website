import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home/index.js";
import About from "./pages/about/index.js";
import Tournaments from "./pages/tournaments/index.js";
import Contact from "./pages/contact/index.js";
import ErrorPage from "./pages/error/index.js";
import EventDetails from "./pages/tournaments/childPages/EventDetails/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/tournaments",
    element: <Tournaments />,
  },
  {
    path: "/tournaments/:event_id",
    element: <EventDetails />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
