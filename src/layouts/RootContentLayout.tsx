"use client";

import { useRouter } from "next/navigation";
import { Layout, Menu, theme } from "antd";
import { RootMenuList, RootSiderMenuList } from "./Menu";
import Title from "antd/es/typography/Title";
import Footer from "./footer";

interface RootContentLayoutProps {
  children: React.ReactNode;
}

export default function RootContentLayout({
  children,
}: RootContentLayoutProps) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const router = useRouter();

  const handleMenuClick = (e: { key: string }) => {
    if (e.key === "home") {
      router.push("/");
    } else if (e.key === "post_list") {
      router.push("/pages/postlist");
    } else if (e.key === "post") {
      router.push("/pages/post");
    } else if (e.key === "form") {
      router.push("/pages/form");
    }
  };

  return (
    <Layout>
      <Layout.Header
        style={{
          display: "flex",
          alignItems: "center",
          background: colorBgContainer,
        }}
      >
        <Title level={4} style={{ marginRight: "45px" }}>
          Dankang_Blog
        </Title>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={RootMenuList}
          onClick={handleMenuClick}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Layout.Header>
      <Layout>
        <Layout.Sider
          width={200}
          style={{
            background: colorBgContainer,
            height: "auto",
            overflow: "auto",
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={RootSiderMenuList}
          />
        </Layout.Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
            overflow: "auto",
            height: "auto",
          }}
        >
          {children}
          <Layout.Footer
            style={{
              borderTop: "1px solid #e8e8e8",
              // borderTop: "1px solid #e8e8e8",
              background: colorBgContainer,
            }}
          >
            <Footer />
          </Layout.Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
