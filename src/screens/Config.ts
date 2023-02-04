import { lazy } from "react";
import { IRouteConfig } from "../Routes/index";

const config: IRouteConfig[] = [
  {
    path: "/login/",
    component: lazy(() => import("./Login")),
  },
  {
    path: "/create-post/",
    component: lazy(() => import("./CreatePost")),
  },
  {
    path: "/",
    component: lazy(() => import("./Feed")),
  },
];

export default config;
