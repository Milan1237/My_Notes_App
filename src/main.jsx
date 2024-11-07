import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContextComponent } from "./context/Context.jsx";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Archive from "./pages/Archive.jsx";
import Bin from "./pages/Bin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/archive",
        element: <Archive />,
      },
      {
        path: '/bin',
        element: <Bin />
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextComponent>
      <RouterProvider router={router} />
    </ContextComponent>
  </StrictMode>
);
