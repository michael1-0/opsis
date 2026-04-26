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
        path: "a",
        Component: React.lazy(() => import("./pages/a")),
      },
      {
        path: "nest/*",
        lazy: async () => {
          await import("./components/load-comp-1");
          return {
            Component: (await import("./pages/nest/[b]")).Component,
          };
        },
        getStaticPaths: () => ["nest/b1", "nest/b2"],
      },
    ],
  },
];
