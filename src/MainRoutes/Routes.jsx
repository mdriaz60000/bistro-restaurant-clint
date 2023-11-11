import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from "../MainLayout/mainLayout";
import Home from "../Pages/FullHome/Home/Home";


export  const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
        {
            path:"/",
            element:<Home></Home>,
        },
    ]
  },
]);