import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import AllApps from "../Pages/AllApps/AllApps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            path: "/",
            loader:()=>fetch('appsData.json').then(res=>res.json()),
            Component: Home
        },
        {
          path: "apps",
          loader:()=>fetch('appsData.json').then(res=>res.json()),
          Component: AllApps
        }
    ]
  },
]);

