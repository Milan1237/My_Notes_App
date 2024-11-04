import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContextComponent } from "./context/Context.jsx";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Archive from "./pages/Archive.jsx";

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
