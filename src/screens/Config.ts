import { lazy } from "react";
import { IRouteConfig } from "../Routes/index";

const config: IRouteConfig[] = [
  {
    path: "/login/",
    component: lazy(() => import("./Login")),
  },
  {
    path: "/home/",
    component: lazy(() => import("./Feed")),
  },
  {
    path: "/create-post/",
    component: lazy(() => import("./CreatePost")),
  },
];

export default config;
