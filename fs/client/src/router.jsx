import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "*", Component: NotFound },
    ],
  },
]);

export default router;
