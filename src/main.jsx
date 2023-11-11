import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { router } from "./MainRoutes/Routes";
import { RouterProvider } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className=" max-w-screen-xl mx-auto">
    <RouterProvider router={router} />
    </div>
    
  </React.StrictMode>
);
