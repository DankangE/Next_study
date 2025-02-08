'use client';

import { Breadcrumb, Layout, theme } from "antd";

interface BaseContainerProps {
  children: React.ReactNode;
  pathname?: string;
}

export default function BaseContainer({ children, pathname }: BaseContainerProps) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const pathList = (pathname ?? '/').split('/')

  return (
    <>
      <Breadcrumb
        items={pathList.map(title => ({ title }))}
        style={{ margin: '16px 0' }}
      />
      <Layout.Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        {children}
      </Layout.Content>
    </>
  )
}