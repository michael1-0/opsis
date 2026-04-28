import React from "react";

const Layout = React.lazy(() => import("./Layout"));

export const routes = [
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: React.lazy(() => import("./pages/index")),
      },
      {
        path: "tentang",
        Component: React.lazy(() => import("./pages/tentang")),
      },
      {
        path: "gejala",
        Component: React.lazy(() => import("./pages/gejala")),
      },
      {
        path: "pengobatan",
        Component: React.lazy(() => import("./pages/pengobatan")),
      },
      {
        path: "riset",
        Component: React.lazy(() => import("./pages/riset")),
      },
    ],
  },
];
