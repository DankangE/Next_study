"use client";

import { Refine } from "@refinedev/core";
import {
  ThemedLayoutV2,
  useNotificationProvider,
  ErrorComponent,
  RefineThemes,
} from "@refinedev/antd";
import routerProvider, { NavigateToResource } from "@refinedev/react-router";
import dataProvider from "@refinedev/simple-rest";

import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import { ConfigProvider } from "antd";
import "@refinedev/antd/dist/reset.css";

// import { PostList } from "pages/posts";

const API_URL = "https://api.fake-rest.refine.dev";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ConfigProvider theme={RefineThemes.Blue}>
        <Refine
          routerProvider={routerProvider}
          dataProvider={dataProvider(API_URL)}
          notificationProvider={useNotificationProvider}
          resources={[
            {
              name: "posts",
              list: "/posts",
            },
          ]}
        >
          <Routes>
            <Route index element={<NavigateToResource />} />
            <Route
              element={
                <ThemedLayoutV2>
                  <Outlet />
                </ThemedLayoutV2>
              }
            >
              {/* <Route path="/posts" element={<PostList />} /> */}
            </Route>
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
        </Refine>
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default App;
