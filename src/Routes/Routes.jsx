import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import AllApps from "../Pages/AllApps/AllApps";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AppDetails from "../Pages/AppDetails/AppDetails";
import AppError from "../Pages/AppError/AppError";
import Installation from "../Pages/Installation/Installation";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path: "/",
            loader:()=>fetch('/appsData.json').then(res=>res.json()),
            Component: Home
        },
        {
          path: "/apps",
          loader:()=>fetch('/appsData.json').then(res=>res.json()),
          Component: AllApps,
          errorElement: <AppError></AppError>,
        },
        {
          path: "/appDetails/:id",
          loader:()=>fetch('/appsData.json').then(res=>res.json()),
          Component: AppDetails,
          errorElement: <AppError></AppError>
        },
        {
          path: "/installation",
          Component: Installation,
        }
    ]
  },
]);

