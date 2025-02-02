"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import RootContentLayout from "./RootContentLayout";
import { ConfigProvider, theme } from "antd";
import { DarkmodeContext } from "./DarkmodeContext";
import { useState } from "react";
import { FloatButton } from "antd";
import { MoonOutlined } from "@ant-design/icons";

interface RootconfigLayoutProps {
  children?: React.ReactNode;
}

export default function RootConfigLayout({ children }: RootconfigLayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <AntdRegistry>
      <DarkmodeContext.Provider
        value={{ isDarkMode, toggleDarkMode: () => setIsDarkMode(!isDarkMode) }}
      >
        <ConfigProvider
          theme={{
            algorithm: [
              isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
              theme.compactAlgorithm,
            ],
          }}
        >
          <RootContentLayout>
            <FloatButton
              icon={<MoonOutlined />}
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              Test
            </FloatButton>
            {children}
          </RootContentLayout>
        </ConfigProvider>
      </DarkmodeContext.Provider>
    </AntdRegistry>
  );
}
